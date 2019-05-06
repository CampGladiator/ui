# ```@campgladiator/components```

A component library for CampGladiator's React apps. Depends on [```@campgladiator/ui```](https://github.com/CampGladiator/ui/tree/master/packages/ui).

```bash
$ yarn add @campgladiator/components
```

## Usage
This component library is meant to be [tree-shakeable](https://webpack.js.org/guides/tree-shaking/), therefore you need to import each component individually:

```js
import { render } from 'react-dom'
import Button from '@campgladiator/components/Button'

render(
  <Button solid primary>cool, it works</Button>,
  document.getElementById('app')
)
```
