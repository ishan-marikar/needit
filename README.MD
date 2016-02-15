needit
======

A tiny libary that allows you to relatively require anything from the base directory.

## Installation

  npm install needit --save

## Usage

```js
require('needit');
var something = need('lib/something.lib');
something.trololo();
```

## Release History

* 0.1.0 Initial release


**Warning: This module appends a function to the global variable (global.need), so if you're
not fine with that, then you probably shouldn't use this.**
