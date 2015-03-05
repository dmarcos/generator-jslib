# JSLib Generator

Yeoman generator that scaffolds a JS library.

* It creates a directory structure to organize your files

  |-- src (the sources of your library)
  |    |-- main.js (the main file of your library)
  |
  |-- build (all the sources concatenated ready for distribution)
  |    |-- lib-name.js
  |
  |-- test (the code of your tests)
  |
  |-- doc (the API documentation)
  |
  |-- examples (your library examples)


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
  └── examples (your library examples)

* It uses browserify for script concatenation
* It generates bower.json and package.json files for publication and dependedency management

## Getting Started

- Install dependencies: `npm install --global yo bower`
- Install the generator: `npm install --global generator-jslib`
- Create a directory for your new library 'mkdir my-lib; cd my-lib'
- Run `yo jslib` to scaffold your new library
- Run `gulp` to build the library in to the build directory