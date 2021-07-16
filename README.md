# input-time-polyfill
Polyfill for time input.
Use this for IE and Safari support or for standardize UI behaviour.

Support dynamically created inputs, so can be used in single page applications.

Forked from [date-input-polyfill](https://github.com/epavanello/date-input-polyfill). Continuing and fixed as a separate project.

As difference from the other forks, this adds the setters for the fields. More [info](https://github.com/facebook/react/issues/10135#issuecomment-314441175)

## Install
`npm install --save input-time-polyfill`

Add to your project:

* **Webpack/Browserify:** `require('input-time-polyfill');`

    or alongside **Babel:** `import 'input-time-polyfill';`

* **Script Tag:** Copy `input-time-polyfill.dist.js` from `node_modules` and
include it anywhere in your HTML.

* This package also supports **AMD**.

## Features

* **Keyboard Shortcuts:** `Esc` will hide the timepicker. `Up/Down` will
increment/decrement the hours/minutes by one.

### Local Development
Run `npm start`

### Build
Run `npm run build`
