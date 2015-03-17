# ES6 Feature Overview

This repo contains simple and practical examples demonstrating many of the new features in ECMAScript 6. These are my notes, hopefully they will be useful to you!

The demos:
[x] Arrows: `simple` and `practical`
[ ] Classes
[ ] `const`
[x] Destructuring: `simple` and `practical`
[ ] For...of loops (related to Generators)
[ ] Generators & `for`...`of` loops
[ ] `let`
[ ] Map
[ ] Objects
[ ] Promise
[ ] Proxy (not implemented in Babel!)
[ ] Reflect
[ ] Set
[x] Spread: `simple`
[x] Template Strings: `simple` and `practical`
[ ] WeakMap
[ ] WeakSet

### How To Use

The source files in `src/` are meant to be read and messed around with. Running them will produce some useful console logs and should provide a simple way for you to play around with & learn the new features.

The ES6 files are in `src/`. The `gulp babel` task uses Babel to transpile the ES6 code down to javascript that can be run in Node. These files are created in the `dist/` folder.

1. Download this repo: `git clone reponame`

2. Install the dependencies: `npm install`

3. Make sure you have `gulp`: `npm install -g gulp`

3. Run `gulp babel`

4. Run any of the files in the `/dist/` folder to see the output: `node dist/arrows/simple.js`

Running `gulp default` or just `gulp` will watch the `src/` folder for changes, transpiling them on save!

### Help me

Now accepting pull requests.