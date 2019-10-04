<div align="center">
  <img src="header.png" alt="CampGladiator's UI">
  <br>
  <br>
  <p>NPM Packages for Camp Gladiator's Design System.</p>
  <p>
    <a aria-label="npm package" href="https://www.npmjs.com/package/@campgladiator/ui">
      <img alt="npm package" src="https://img.shields.io/npm/v/@campgladiator/ui.svg">
    </a>
    <a aria-label="last commit" href="https://github.com/primer/css/commits/master">
      <img alt="last commit" src="https://img.shields.io/github/last-commit/CampGladiator/cgui.svg">
    </a>
    <a aria-label="lerna badge" href="https://lerna.js.org/">
      <img alt="lerna badge" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg">
    </a>
  </p>
</div>

## Packages
- [```@campgladiator/ui```](https://github.com/CampGladiator/ui/tree/master/packages/ui): library written in Sass including typography, colors, elements, utilities, components, etc;
- [```@campgladiator/components```](https://github.com/CampGladiator/ui/tree/master/packages/components): collection of React components that depends on the above;


## Basic Usage
CGUI can be used in two ways:
1. As a collection of react components
2. As a stripped-down sass library

Using the react component library offers the most benefits. This is always recommended for react apps.

For apps not using react, the Sass library can be used to allow you to access basic styles and create your own components based on the existing style library.

*Note: The Sass library is standalone, but the React components require the Sass library as a dependency.*

**Install the necessary dependencies:**

*React Component Library*
```bash
$ yarn add @campgladiator/ui @campgladiator/components
```

**OR:**

*Standalone Sass Library*
```bash
$ yarn add @campgladiator/ui 
```

The included source files are written in Sass. After installing you can add your project's `node_modules` directory to your Sass [include paths](https://github.com/sass/node-sass#includepaths), then import it like this:

```scss
@import '@campgladiator/ui/main';
```

The component library is meant to be [tree-shakeable](https://webpack.js.org/guides/tree-shaking/), therefore you need to import each component individually:

```js
import { render } from 'react-dom'
import Button from '@campgladiator/components/Button'

render(
  <Button solid primary>cool, it works</Button>,
  document.getElementById('app')
)
```
