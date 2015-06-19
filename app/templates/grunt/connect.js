module.exports = Config;


function Config(c){
    var isExisted,
        self = this
    ;
    this.options = {
        port: 9100,
        open: true,
        livereload: 31000,
        hostname: '192.168.180.54'
    };

    this.livereload = {
        options: {
            middleware: function(connect) {
                return [
                    connect.static(c.app)
                ];
            }
        }
    }

}