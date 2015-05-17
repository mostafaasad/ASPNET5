/// <binding Clean='clean' />

var gulp = require("gulp"),
  rimraf = require("rimraf"),
  fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
  bower: "./bower_components/",
  lib: "./" + project.webroot + "/lib/",
  app: "./" + project.webroot + "/app/",
  srcapp:  "./app/",
};

gulp.task("clean", function (cb) {
    rimraf(paths.lib, cb);
  
});
gulp.task("cleanappp", function (cb) {
    rimraf(paths.app, cb);
});


gulp.task("copy", ["clean"], function () {
  var bower = {
    "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
    "bootstrap-touch-carousel": "bootstrap-touch-carousel/dist/**/*.{js,css}",
    "hammer.js": "hammer.js/hammer*.{js,map}",
    "jquery": "jquery/jquery*.{js,map}",
    "jquery-validation": "jquery-validation/jquery.validate.js",
    "jquery-validation-unobtrusive": "jquery-validation-unobtrusive/jquery.validate.unobtrusive.js",
    "angular": "angular/angular*.{js,map}",
    "angular-route": "angular-route/angular-route*.{js,map}",
    "angular-resource": "angular-resource/angular-resource*.{js,map}"

  }

  for (var destinationDir in bower) {
    gulp.src(paths.bower + bower[destinationDir])
      .pipe(gulp.dest(paths.lib + destinationDir));
  }
});

gulp.task("copyapp",["cleanappp"], function () {
    var app = {
        "controllers": "controllers/booksController.js",
        "services": "services/booksServices*.js",
        "/": "app.js"
    }

    for (var destinationDir in app) {
        gulp.src(paths.srcapp + app[destinationDir])
          .pipe(gulp.dest(paths.app + destinationDir));
    }

});
