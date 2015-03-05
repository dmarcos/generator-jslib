# JSLib Generator

[Yeoman](http://yeoman.io) generator that scaffolds a JS library.

* It creates a directory structure to organize your files:

```
    ├── src (the sources of your library)
    │   └── main.js (the main file of your library)
    │
    ├── build (all your scripts concatenated ready for distribution)
    │   └── lib-name.js
    │
    ├── test (the code of your tests)
    │
    ├── doc (the API documentation)
    │
    ├── examples (your library examples)
    │
    ├── bower.json (front end dependencies)
    │
    ├── package.json (package publication and build system dependencies)
    │
    ├── .gitignore (files that git omits)
    │
    ├── editorconfig (coding style rules)
    │
    ├── .bowerrc (directory where bower installs dependencies)
    │
    └── .jshintrc (file for jshint to enfore coding style rules)
```

* It uses [browserify](http://browserify.org/) for script concatenation
* It generates bower.json and package.json files for publication and dependedency management
* It uses [gulp](http://gulpjs.com/) as build system

## Getting Started

- Install dependencies: `npm install --global yo bower`
- Install the generator: `npm install --global generator-jslibrary`
- Create a directory for your new library `mkdir my-lib; cd my-lib`
- Run `yo jslibrary` to scaffold your new library
- Run `gulp` to build the library in to the build directory