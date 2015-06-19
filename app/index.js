'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  start: function(){
    this.log('--------------'+chalk.red('job[start]')+'------------------');
  },

  dir: function(){
    this.directory('grunt')
    this.directory('app')
    this.mkdir('app/scripts');
    this.mkdir('app/stylus/src');
    this.mkdir('app/css');
    this.mkdir('app/images');
    this.mkdir('app/jade/src');
    this.mkdir('app/view');
  },


  writing: function(){
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json')
    );
    
    this.fs.copy(
      this.templatePath('Gruntfile.js'),
      this.destinationPath('Gruntfile.js')
    );
  },

  install: function(){
      this.installDependencies({
        skipInstall: this.options['skip-install']
      });
  },

  end: function(){
    this.log('--------------'+chalk.red('job[end]')+'------------------');
  }
});
