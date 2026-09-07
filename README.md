![banner](./.github/imgs/banner.png)
<a name="readme-top"></a>
<div align="center">

# Charmly Icons

**Generate beautiful skill icons for your GitHub README using a simple URL.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-C071FF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=javascript,react,nodejs&perline=3)
[![License](https://img.shields.io/badge/License-MIT-C071FF?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Version](https://img.shields.io/github/package-json/v/amrelmahdy001/charmly?style=for-the-badge&color=C071FF&logo=semanticrelease&logoColor=white)](https://github.com/amrelmahdy001/charmly/releases)
[![Last Commit](https://img.shields.io/github/last-commit/amrelmahdy001/charmly?style=for-the-badge&color=C071FF&logo=git&logoColor=white)](https://github.com/amrelmahdy001/charmly/commits)
[![Stars](https://img.shields.io/github/stars/amrelmahdy001/charmly?style=for-the-badge&color=C071FF&logo=github&logoColor=white)](https://github.com/amrelmahdy001/charmly/stargazers)

![README Tools](https://img.shields.io/badge/README%20Tools-C071FF?style=for-the-badge&logo=readme&logoColor=white)
![Markdown Tools](https://img.shields.io/badge/Markdown%20Tools-C071FF?style=for-the-badge&logo=markdown&logoColor=white)
</div>

---

## What is Charmly?

Charmly is a lightweight API that generates a row of skill icons as an SVG image.
You can use it in your GitHub profile, project README, or resume.

**Powered by Cloudflare Workers ⚡**

## Example

```markdown
![My Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=swift,typescript,react,go,flask&perline=5)
```

Result:

![My Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=swift,typescript,react,go,flask&perline=5)

---

## Usage

### 1. Basic Usage

```markdown
![Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=javascript,html,css,tailwindcss)
```
![Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=javascript,html,css,tailwindcss)

Replace `i=` with a comma-separated list of icon names.

### 2. Icons Per Line

```markdown
![Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=aws,figma,azure,react,angular,npm&perline=3)
```
![Skills](https://charmly.amrelmahdy001-b28.workers.dev/icons?i=aws,figma,azure,react,angular,npm&perline=3)

### 3. Center Icons

```html
<p align="center">
  <img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=git,kubernetes,gitlab,c,github" />
</p>
```
<p align="center">
  <img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=git,kubernetes,gitlab,c,github" />
</p>

---

## Parameters

| Parameter | Description | Default |
|-----------|--------------|---------|
| `i` | Comma-separated icon names (required) | - |
| `perline` | Number of icons per line (1–50) | All icons in one line |

---

## How It Works

1. Icon SVGs are stored in the `icons/` folder.
2. `build-icons.js` extracts `viewBox` and inner content from each SVG.
3. Cloudflare Worker reads `dist/icons.json` and generates a combined SVG image.
4. The image is returned with `Content-Type: image/svg+xml`.


---

## Project Structure

```
charmly/
├── icons/                # SVG icon files
├── src/
│   └── worker.js         # Cloudflare Worker logic
├── build-icons.js        # Converts SVG files to JSON
├── package.json
├── wrangler.toml
├── README.md
└── LICENSE
```

---

## Contributing

Contributions are welcome!
To suggest an icon, open an issue or add the SVG file directly to the `icons/` folder and submit a pull request.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

<p align="center">Made by <a href="https://github.com/amrelmahdy001">amrelmahdy001</a></p>

---

## Available Icons

Total icons: **150**. Use the `id` shown next to each icon in your API call, e.g. `?i=flutter,html,swift`.

### Table of Contents

- [Languages & Runtimes](#languages--runtimes)
- [Frontend (Frameworks, UI & State)](#frontend-frameworks-ui--state)
- [Backend Frameworks](#backend-frameworks)
- [Databases & ORMs](#databases--orms)
- [Mobile & Cross-Platform](#mobile--cross-platform)
- [DevOps & Cloud](#devops--cloud)
- [Dev Tools & Version Control](#dev-tools--version-control)
- [Testing & Build Tools](#testing--build-tools)

### Languages & Runtimes

<table>
  <tbody>
    <tr>
      <td align="center"><code>javascript</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=javascript&perline=1" alt="javascript" width="48" height="48"></td>
      <td align="center"><code>typescript</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=typescript&perline=1" alt="typescript" width="48" height="48"></td>
      <td align="center"><code>python</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=python&perline=1" alt="python" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>java</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=java&perline=1" alt="java" width="48" height="48"></td>
      <td align="center"><code>csharp</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=csharp&perline=1" alt="csharp" width="48" height="48"></td>
      <td align="center"><code>cplusplus</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=cplusplus&perline=1" alt="cplusplus" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>c</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=c&perline=1" alt="c" width="48" height="48"></td>
      <td align="center"><code>php</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=php&perline=1" alt="php" width="48" height="48"></td>
      <td align="center"><code>go</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=go&perline=1" alt="go" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>rust</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=rust&perline=1" alt="rust" width="48" height="48"></td>
      <td align="center"><code>kotlin</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=kotlin&perline=1" alt="kotlin" width="48" height="48"></td>
      <td align="center"><code>swift</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=swift&perline=1" alt="swift" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>ruby</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=ruby&perline=1" alt="ruby" width="48" height="48"></td>
      <td align="center"><code>dart</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=dart&perline=1" alt="dart" width="48" height="48"></td>
      <td align="center"><code>nodejs</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=nodejs&perline=1" alt="nodejs" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>dotnet</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=dotnet&perline=1" alt="dotnet" width="48" height="48"></td>
      <td align="center"><code>bun</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=bun&perline=1" alt="bun" width="48" height="48"></td>
      <td align="center"><code>deno</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=deno&perline=1" alt="deno" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>scala</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=scala&perline=1" alt="scala" width="48" height="48"></td>
      <td align="center"><code>elixir</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=elixir&perline=1" alt="elixir" width="48" height="48"></td>
      <td align="center"><code>phoenix</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=phoenix&perline=1" alt="phoenix" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>haskell</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=haskell&perline=1" alt="haskell" width="48" height="48"></td>
      <td align="center"><code>clojure</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=clojure&perline=1" alt="clojure" width="48" height="48"></td>
      <td align="center"><code>r</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=r&perline=1" alt="r" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>lua</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=lua&perline=1" alt="lua" width="48" height="48"></td>
      <td align="center"><code>julia</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=julia&perline=1" alt="julia" width="48" height="48"></td>
      <td align="center"><code>zig</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=zig&perline=1" alt="zig" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>nim</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=nim&perline=1" alt="nim" width="48" height="48"></td>
      <td align="center"><code>solidity</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=solidity&perline=1" alt="solidity" width="48" height="48"></td>
      <td align="center"><code>bash</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=bash&perline=1" alt="bash" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>powershell</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=powershell&perline=1" alt="powershell" width="48" height="48"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### Frontend (Frameworks, UI & State)

<table>
  <tbody>
    <tr>
      <td align="center"><code>html</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=html&perline=1" alt="html" width="48" height="48"></td>
      <td align="center"><code>css</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=css&perline=1" alt="css" width="48" height="48"></td>
      <td align="center"><code>react</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=react&perline=1" alt="react" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>vue</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=vue&perline=1" alt="vue" width="48" height="48"></td>
      <td align="center"><code>angular</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=angular&perline=1" alt="angular" width="48" height="48"></td>
      <td align="center"><code>svelte</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=svelte&perline=1" alt="svelte" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>nextjs</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=nextjs&perline=1" alt="nextjs" width="48" height="48"></td>
      <td align="center"><code>redux</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=redux&perline=1" alt="redux" width="48" height="48"></td>
      <td align="center"><code>tailwindcss</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=tailwindcss&perline=1" alt="tailwindcss" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>bootstrap</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=bootstrap&perline=1" alt="bootstrap" width="48" height="48"></td>
      <td align="center"><code>sass</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=sass&perline=1" alt="sass" width="48" height="48"></td>
      <td align="center"><code>mobx</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=mobx&perline=1" alt="mobx" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>recoil</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=recoil&perline=1" alt="recoil" width="48" height="48"></td>
      <td align="center"><code>jotai</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=jotai&perline=1" alt="jotai" width="48" height="48"></td>
      <td align="center"><code>materialui</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=materialui&perline=1" alt="materialui" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>antdesign</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=antdesign&perline=1" alt="antdesign" width="48" height="48"></td>
      <td align="center"><code>chakraui</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=chakraui&perline=1" alt="chakraui" width="48" height="48"></td>
      <td align="center"><code>shadcnui</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=shadcnui&perline=1" alt="shadcnui" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>radixui</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=radixui&perline=1" alt="radixui" width="48" height="48"></td>
      <td align="center"><code>headlessui</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=headlessui&perline=1" alt="headlessui" width="48" height="48"></td>
      <td align="center"><code>styledcomponents</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=styledcomponents&perline=1" alt="styledcomponents" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>solidjs</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=solidjs&perline=1" alt="solidjs" width="48" height="48"></td>
      <td align="center"><code>framermotion</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=framermotion&perline=1" alt="framermotion" width="48" height="48"></td>
      <td align="center"><code>storybook</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=storybook&perline=1" alt="storybook" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>threejs</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=threejs&perline=1" alt="threejs" width="48" height="48"></td>
      <td align="center"><code>d3js</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=d3js&perline=1" alt="d3js" width="48" height="48"></td>
      <td align="center"><code>chartjs</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=chartjs&perline=1" alt="chartjs" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>webassembly</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=webassembly&perline=1" alt="webassembly" width="48" height="48"></td>
      <td align="center"><code>pinia</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=pinia&perline=1" alt="pinia" width="48" height="48"></td>
      <td align="center"><code>ngrx</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=ngrx&perline=1" alt="ngrx" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>getx</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=getx&perline=1" alt="getx" width="48" height="48"></td>
      <td align="center"><code>bloc</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=bloc&perline=1" alt="bloc" width="48" height="48"></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### Backend Frameworks

<table>
  <tbody>
    <tr>
      <td align="center"><code>express</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=express&perline=1" alt="express" width="48" height="48"></td>
      <td align="center"><code>nestjs</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=nestjs&perline=1" alt="nestjs" width="48" height="48"></td>
      <td align="center"><code>django</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=django&perline=1" alt="django" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>flask</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=flask&perline=1" alt="flask" width="48" height="48"></td>
      <td align="center"><code>spring</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=spring&perline=1" alt="spring" width="48" height="48"></td>
      <td align="center"><code>laravel</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=laravel&perline=1" alt="laravel" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>graphql</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=graphql&perline=1" alt="graphql" width="48" height="48"></td>
      <td align="center"><code>fastify</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=fastify&perline=1" alt="fastify" width="48" height="48"></td>
      <td align="center"><code>remix</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=remix&perline=1" alt="remix" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>nuxtjs</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=nuxtjs&perline=1" alt="nuxtjs" width="48" height="48"></td>
      <td align="center"><code>astro</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=astro&perline=1" alt="astro" width="48" height="48"></td>
      <td align="center"><code>gatsby</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=gatsby&perline=1" alt="gatsby" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>sveltekit</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=sveltekit&perline=1" alt="sveltekit" width="48" height="48"></td>
      <td align="center"><code>koa</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=koa&perline=1" alt="koa" width="48" height="48"></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### Databases & ORMs

<table>
  <tbody>
    <tr>
      <td align="center"><code>mysql</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=mysql&perline=1" alt="mysql" width="48" height="48"></td>
      <td align="center"><code>postgresql</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=postgresql&perline=1" alt="postgresql" width="48" height="48"></td>
      <td align="center"><code>mongodb</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=mongodb&perline=1" alt="mongodb" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>redis</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=redis&perline=1" alt="redis" width="48" height="48"></td>
      <td align="center"><code>sqlite</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=sqlite&perline=1" alt="sqlite" width="48" height="48"></td>
      <td align="center"><code>mariadb</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=mariadb&perline=1" alt="mariadb" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>supabase</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=supabase&perline=1" alt="supabase" width="48" height="48"></td>
      <td align="center"><code>elasticsearch</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=elasticsearch&perline=1" alt="elasticsearch" width="48" height="48"></td>
      <td align="center"><code>dynamodb</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=dynamodb&perline=1" alt="dynamodb" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>cassandra</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=cassandra&perline=1" alt="cassandra" width="48" height="48"></td>
      <td align="center"><code>prisma</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=prisma&perline=1" alt="prisma" width="48" height="48"></td>
      <td align="center"><code>typeorm</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=typeorm&perline=1" alt="typeorm" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>sequelize</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=sequelize&perline=1" alt="sequelize" width="48" height="48"></td>
      <td align="center"><code>neo4j</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=neo4j&perline=1" alt="neo4j" width="48" height="48"></td>
      <td align="center"><code>influxdb</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=influxdb&perline=1" alt="influxdb" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>hive</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=hive&perline=1" alt="hive" width="48" height="48"></td>
      <td align="center"><code>cockroachdb</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=cockroachdb&perline=1" alt="cockroachdb" width="48" height="48"></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### Mobile & Cross-Platform

<table>
  <tbody>
    <tr>
      <td align="center"><code>flutter</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=flutter&perline=1" alt="flutter" width="48" height="48"></td>
      <td align="center"><code>reactnative</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=reactnative&perline=1" alt="reactnative" width="48" height="48"></td>
      <td align="center"><code>ionic</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=ionic&perline=1" alt="ionic" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>capacitor</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=capacitor&perline=1" alt="capacitor" width="48" height="48"></td>
      <td align="center"><code>nativescript</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=nativescript&perline=1" alt="nativescript" width="48" height="48"></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### DevOps & Cloud

<table>
  <tbody>
    <tr>
      <td align="center"><code>docker</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=docker&perline=1" alt="docker" width="48" height="48"></td>
      <td align="center"><code>kubernetes</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=kubernetes&perline=1" alt="kubernetes" width="48" height="48"></td>
      <td align="center"><code>aws</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=aws&perline=1" alt="aws" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>azure</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=azure&perline=1" alt="azure" width="48" height="48"></td>
      <td align="center"><code>googlecloud</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=googlecloud&perline=1" alt="googlecloud" width="48" height="48"></td>
      <td align="center"><code>firebase</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=firebase&perline=1" alt="firebase" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>nginx</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=nginx&perline=1" alt="nginx" width="48" height="48"></td>
      <td align="center"><code>terraform</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=terraform&perline=1" alt="terraform" width="48" height="48"></td>
      <td align="center"><code>githubactions</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=githubactions&perline=1" alt="githubactions" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>jenkins</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=jenkins&perline=1" alt="jenkins" width="48" height="48"></td>
      <td align="center"><code>ansible</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=ansible&perline=1" alt="ansible" width="48" height="48"></td>
      <td align="center"><code>vercel</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=vercel&perline=1" alt="vercel" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>netlify</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=netlify&perline=1" alt="netlify" width="48" height="48"></td>
      <td align="center"><code>cloudflare</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=cloudflare&perline=1" alt="cloudflare" width="48" height="48"></td>
      <td align="center"><code>heroku</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=heroku&perline=1" alt="heroku" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>digitalocean</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=digitalocean&perline=1" alt="digitalocean" width="48" height="48"></td>
      <td align="center"><code>railway</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=railway&perline=1" alt="railway" width="48" height="48"></td>
      <td align="center"><code>render</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=render&perline=1" alt="render" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>circleci</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=circleci&perline=1" alt="circleci" width="48" height="48"></td>
      <td align="center"><code>prometheus</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=prometheus&perline=1" alt="prometheus" width="48" height="48"></td>
      <td align="center"><code>grafana</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=grafana&perline=1" alt="grafana" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>kibana</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=kibana&perline=1" alt="kibana" width="48" height="48"></td>
      <td align="center"><code>apache</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=apache&perline=1" alt="apache" width="48" height="48"></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### Dev Tools & Version Control

<table>
  <tbody>
    <tr>
      <td align="center"><code>git</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=git&perline=1" alt="git" width="48" height="48"></td>
      <td align="center"><code>github</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=github&perline=1" alt="github" width="48" height="48"></td>
      <td align="center"><code>gitlab</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=gitlab&perline=1" alt="gitlab" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>vscode</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=vscode&perline=1" alt="vscode" width="48" height="48"></td>
      <td align="center"><code>npm</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=npm&perline=1" alt="npm" width="48" height="48"></td>
      <td align="center"><code>vite</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=vite&perline=1" alt="vite" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>webpack</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=webpack&perline=1" alt="webpack" width="48" height="48"></td>
      <td align="center"><code>figma</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=figma&perline=1" alt="figma" width="48" height="48"></td>
      <td align="center"><code>vim</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=vim&perline=1" alt="vim" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>stackoverflow</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=stackoverflow&perline=1" alt="stackoverflow" width="48" height="48"></td>
      <td align="center"><code>linux</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=linux&perline=1" alt="linux" width="48" height="48"></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### Testing & Build Tools

<table>
  <tbody>
    <tr>
      <td align="center"><code>jest</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=jest&perline=1" alt="jest" width="48" height="48"></td>
      <td align="center"><code>eslint</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=eslint&perline=1" alt="eslint" width="48" height="48"></td>
      <td align="center"><code>prettier</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=prettier&perline=1" alt="prettier" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>cypress</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=cypress&perline=1" alt="cypress" width="48" height="48"></td>
      <td align="center"><code>playwright</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=playwright&perline=1" alt="playwright" width="48" height="48"></td>
      <td align="center"><code>mocha</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=mocha&perline=1" alt="mocha" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>vitest</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=vitest&perline=1" alt="vitest" width="48" height="48"></td>
      <td align="center"><code>babel</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=babel&perline=1" alt="babel" width="48" height="48"></td>
      <td align="center"><code>postman</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=postman&perline=1" alt="postman" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>selenium</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=selenium&perline=1" alt="selenium" width="48" height="48"></td>
      <td align="center"><code>puppeteer</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=puppeteer&perline=1" alt="puppeteer" width="48" height="48"></td>
      <td align="center"><code>testinglibrary</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=testinglibrary&perline=1" alt="testinglibrary" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>rollup</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=rollup&perline=1" alt="rollup" width="48" height="48"></td>
      <td align="center"><code>parcel</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=parcel&perline=1" alt="parcel" width="48" height="48"></td>
      <td align="center"><code>esbuild</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=esbuild&perline=1" alt="esbuild" width="48" height="48"></td>
    </tr>
    <tr>
      <td align="center"><code>swagger</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=swagger&perline=1" alt="swagger" width="48" height="48"></td>
      <td align="center"><code>insomnia</code></td>
      <td align="center"><img src="https://charmly.amrelmahdy001-b28.workers.dev/icons?i=insomnia&perline=1" alt="insomnia" width="48" height="48"></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>