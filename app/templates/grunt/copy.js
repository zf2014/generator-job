module.exports = {
    config: {
        dist: {
            files: [{
              expand: true,
              // dot: true,
              cwd: '<%= product.app %>',
              dest: '<%= product.dist %>',
              src: [
                // '*.{ico,png,txt}'
                // ,'images/{,*/}*.webp'
                'images/{,*/}*.{jpg,png,gif}'
                ,'*.{html,ftl}'
                ,'view/{,*/}*.{html,ftl}'
                ,'css/{,*/}*.css'
                ,'scripts/*/{,*/,*/*/}*.js'
              ]
            }]
        }
    }
}