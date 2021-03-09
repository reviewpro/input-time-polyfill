# time-input-polyfill
Polyfill for time input.
Use this for IE and Safari support or for standardize UI behaviour.

Support dynamically created inputs, so can be used in single page applications.

## Install
`npm install --save time-input-polyfill`

Add to your project:

* **Webpack/Browserify:** `require('time-input-polyfill');`

    or alongside **Babel:** `import 'time-input-polyfill';`

* **Script Tag:** Copy `time-input-polyfill.dist.js` from `node_modules` and
include it anywhere in your HTML.

* This package also supports **AMD**.

## Features

* **Keyboard Shortcuts:** `Esc` will hide the timepicker. `Up/Down` will
increment/decrement the hours/minutes by one.

### Local Development
Run `npm start`

### Build
Run `npm run build`
