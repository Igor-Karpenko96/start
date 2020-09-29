module.exports = function(grunt) {
   grunt.initConfig({
      less: {
         development: {
            options: {
               compress: true,
               yuicompress: true,
               optimization: 2
            },
            files: {
               "css/main.css": "less/main.less"
            }
        }
   },
   watch: {
      styles: {
         files: ['less/main.less'],
         tasks: ['less'],
         options: {
            nospawn: true
         }
      }
   }
});
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['watch']);
};