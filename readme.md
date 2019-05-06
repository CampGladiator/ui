<div align="center">
  <img src="header.png" alt="CampGladiator's UI">
  <br>
  <br>
  <p>The implementation of Camp Gladiator's Design System.</p>
  <p>
    <a aria-label="npm package" href="https://www.npmjs.com/package/@campgladiator/ui">
      <img alt="" src="https://img.shields.io/npm/v/@campgladiator/ui.svg">
    </a>
    <a aria-label="last commit" href="https://github.com/primer/css/commits/master">
      <img alt="" src="https://img.shields.io/github/last-commit/CampGladiator/cgui.svg">
    </a>
  </p>
</div>

## Packages
- [```@campgladiator/ui```](https://github.com/CampGladiator/ui/tree/master/packages/ui): library written in Sass including typography, colors, elements, utilities, components, etc;
- [```@campgladiator/components```](https://github.com/CampGladiator/ui/tree/master/packages/components): collection of React components that depends on the above;


## Basic Usage for React apps
Install the necessary dependencies:
```bash
$ yarn add @campgladiator/ui @campgladiator/components
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
