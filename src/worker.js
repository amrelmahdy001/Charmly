import icons from '../dist/icons.json' assert { type: 'json' };

// Layout constants
const ICON_SIZE = 48;
const PADDING = 0;
const GAP = 8;
const BOX = ICON_SIZE;
const RADIUS = 12;
const BG = '#1a1b2e';

// Rate limiting configuration
const RATE_LIMIT_MAX = 100;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_CLEANUP_MS = 5 * 60_000;

// In-memory store for per-IP request counts.
// This is a per-isolate limiter, not globally accurate across all colos.
const rateLimitStore = new Map();
let lastCleanup = Date.now();

function cleanupRateLimitStore(now) {
  if (now - lastCleanup < RATE_LIMIT_CLEANUP_MS) return;
  
  for (const [ip, entry] of rateLimitStore) {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
      rateLimitStore.delete(ip);
    }
  }
  
  lastCleanup = now;
}

function isRateLimited(ip) {
  const now = Date.now();
  cleanupRateLimitStore(now);
  
  const entry = rateLimitStore.get(ip);
  
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return false;
  }
  
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

function renderIcon(name, x, y, index) {
  const icon = icons[name];
  if (!icon) return '';
  
  const clipId = `clip-${index}`;
  
  return `
    <g transform="translate(${x}, ${y})">
      <rect width="${BOX}" height="${BOX}" rx="${RADIUS}" fill="${BG}"/>
      <clipPath id="${clipId}">
        <rect width="${BOX}" height="${BOX}" rx="${RADIUS}"/>
      </clipPath>
      <g clip-path="url(#${clipId})">
        <svg x="${PADDING}" y="${PADDING}" width="${ICON_SIZE}" height="${ICON_SIZE}"
             viewBox="${icon.viewBox}" preserveAspectRatio="xMidYMid meet">
          ${icon.content}
        </svg>
      </g>
    </g>
  `;
}

function buildSvg(names, perline) {
  const valid = names.filter((n) => icons[n]);
  
  if (valid.length === 0) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="320" height="48">
        <text x="8" y="28" font-family="monospace" font-size="13" fill="#e05252">
          No valid icons found
        </text>
      </svg>
    `;
  }
  
  const columns = perline && perline > 0 ?
    Math.min(perline, valid.length) :
    valid.length;
  
  const rows = Math.ceil(valid.length / columns);
  const width = columns * BOX + (columns - 1) * GAP;
  const height = rows * BOX + (rows - 1) * GAP;
  
  const parts = [];
  
  valid.forEach((name, idx) => {
    const col = idx % columns;
    const row = Math.floor(idx / columns);
    const x = col * (BOX + GAP);
    const y = row * (BOX + GAP);
    parts.push(renderIcon(name, x, y, idx));
  });
  
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"
         viewBox="0 0 ${width} ${height}" fill="none">
      ${parts.join('')}
    </svg>
  `;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname !== '/icons') {
      return new Response('Not found', { status: 404 });
    }
    
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    
    if (isRateLimited(ip)) {
      return new Response('Too Many Requests', {
        status: 429,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Retry-After': '60',
        },
      });
    }
    
    const iParam = url.searchParams.get('i') || '';
    const names = iParam
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
    
    if (names.length === 0) {
      return new Response(
        'Missing "i" query parameter, e.g. ?i=js,html,css', { status: 400 }
      );
    }
    
    const perlineParam = url.searchParams.get('perline');
    const perline = perlineParam ? parseInt(perlineParam, 10) : 0;
    
    const svg = buildSvg(names, perline);
    
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        // Note: max-age is intentionally kept short during active development.
        // It will be increased once the project reaches a stable release phase.
        'Cache-Control': 'public, max-age=60',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};