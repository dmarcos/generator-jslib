'use strict';
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
  },

  prompting: function () {
    var done = this.async();

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
      // }, {
      // type: 'checkbox',
      // name: 'features',
      // message: 'What more would you like?',
      // choices: [{
      //   name: 'package.json',
      //   value: 'includeSass',
      //   checked: true
      // }, {
      //   name: 'bower.json',
      //   value: 'includeBootstrap',
      //   checked: true
      // }]
    }];

    this.prompt(prompts, function (answers) {
      // var features = answers.features;

      // var hasFeature = function (feat) {
      //   return features.indexOf(feat) !== -1;
      // };

      // // manually deal with the response, get back and store the results.
      // // we change a bit this way of doing to automatically do this in the self.prompt() method.
      // this.includeNpm = hasFeature('includeNpm');
      // this.includeBootstrap = hasFeature('includeBootstrap');
      // this.includeModernizr = hasFeature('includeModernizr');

      done();
    }.bind(this));
  },

  writing: {
    gulpfile: function () {
      this.template('gulpfile.js');
    },

    packageJSON: function () {
      this.template('_package.json', 'package.json');
    },

    git: function () {
      this.copy('gitignore', '.gitignore');
    },

    readme: function () {
      this.template('README.md', 'README.md');
    },

    bower: function () {
      this.copy('bowerrc', '.bowerrc');
      this.template('_bower.json', 'bower.json');
    },

    jshint: function () {
      this.copy('jshintrc', '.jshintrc');
    },

    editorConfig: function () {
      this.copy('editorconfig', '.editorconfig');
    },

    app: function () {
      this.mkdir('src');
      this.mkdir('build');
      this.mkdir('test');
      this.mkdir('doc');
      this.mkdir('examples');
      this.copy('example.html', 'examples/index.html');
      this.copy('main.js', 'src/main.js');
    }
  },

  install: function () {
    this.installDependencies();
  },

  end: function() {
    var endMessage = chalk.blue.bgWhite.bold(' A new JS library is born. Great power comes with great responsibility ');
    this.log(endMessage);
  }

});
