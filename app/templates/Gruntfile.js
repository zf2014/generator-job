
module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var productConfig = {
        version: '1.0.0',
        app: 'app',
        dist: 'dist',
        // 静态资源目录
        staticRoot: ''
    };

    grunt.initConfig({
        product: productConfig,
        copy: require('./grunt/copy.js').config,
        clean: require('./grunt/clean.js').config,
        uglify: require('./grunt/uglify.js').config,
        stylus: new (require('./grunt/stylus.js'))(productConfig),
        jade: require('./grunt/jade.js').config,
        connect: new (require('./grunt/connect.js'))(productConfig),
        watch: require('./grunt/watch.js').config,
        // useminPrepare: require('./grunt/useminPrepare.js').config,
        // filerev: require('./grunt/filerev.js').config,
        // usemin: new (require('./grunt/usemin.js'))(productConfig),

        // 如果需要合并成精灵图片, 那么根据实际情况, 来指定图片目录
        // 生成的是.styl文件
        // sprite: new (require('./grunt/sprite.js'))(['testSprites']),
    });



    grunt.registerTask('server', [
        'connect:livereload',
        'watch'
    ]);


    grunt.registerTask('build', [
        'clean',
        'useminPrepare',
        // [useminprepare[以下3组命令], 是通过解析动态生成的]
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        
        'copy:dist',
        'filerev',
        'usemin'
    ]);


};