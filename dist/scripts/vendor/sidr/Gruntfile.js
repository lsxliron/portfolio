module.exports=function(e){require("load-grunt-tasks")(e),e.initConfig({pkg:e.file.readJSON("package.json"),clean:{dist:["dist"],cssmin:["dist/stylesheets/jquery.sidr.dark.css","dist/stylesheets/jquery.sidr.light.css"]},copy:{js:{files:[{src:"src/jquery.<%= pkg.name %>.js",dest:"dist/jquery.<%= pkg.name %>.js"}]},cssmin:{files:[{src:"dist/stylesheets/jquery.sidr.light.css",dest:"dist/stylesheets/jquery.sidr.light.min.css"},{src:"dist/stylesheets/jquery.sidr.dark.css",dest:"dist/stylesheets/jquery.sidr.dark.min.css"}]}},uglify:{options:{banner:'/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %> * Copyright (c) 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; Licensed <%= pkg.license %> */\n'},dist:{files:{"dist/jquery.<%= pkg.name %>.min.js":["dist/jquery.<%= pkg.name %>.js"]}}},jshint:{all:["Gruntfile.js","src/**/*.js"],options:{jshintrc:!0}},scsslint:{allFiles:["src/scss/**/*"],options:{bundleExec:!0,config:".scss-lint.yml",colorizeOutput:!0}},watch:{js:{files:["src/jquery.sidr.js"],tasks:"copy:js"},compass:{files:["src/scss/**/*.scss"],tasks:["compass:dev"]}},compass:{options:{sassDir:"src/scss",bundleExec:!0},dev:{options:{sourcemap:!0,cssDir:"dist/stylesheets",outputStyle:"expanded"}},dist:{options:{sourcemap:!1,cssDir:"dist/stylesheets",outputStyle:"expanded",environment:"production"}},distmin:{options:{sourcemap:!1,cssDir:"dist/stylesheets",noLineComments:!0,outputStyle:"compressed",environment:"production"}}},connect:{options:{port:9e3,hostname:"localhost"},dist:{options:{open:"http://localhost:9000/examples/index.html"}}}}),e.registerTask("lint",["jshint","scsslint"]),e.registerTask("qa",["lint"]),e.registerTask("build",["copy:js","compass:distmin","copy:cssmin","clean:cssmin","compass:dist","uglify:dist"]),e.registerTask("serve",["clean:dist","compass:dev","copy:js","connect:dist","watch"]),e.registerTask("default",["clean:dist","qa","build"])};