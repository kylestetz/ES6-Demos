var gulp = require("gulp");
var babel = require("gulp-babel");
var watch = require("gulp-watch");
var colors = require("colors");

path = "src/**/*.js";

gulp.task("babel", function () {
  console.log("Compiling ".green + "-> " + Date().gray);
  return gulp.src(path)
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
  gulp.watch(path, ["babel"]);
});

gulp.task("default", ["watch", "babel"]);