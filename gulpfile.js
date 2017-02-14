var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

//bundle takes "main.jsx" file, transpiles jsx code to plain javascript using "reactify" then stream sources it using "vinyl-source-stream" further creates "main.js" file on the fly in "dist" directory with transpiled js code in it.

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});

// copy takes index.html, bootstrap.min.css and style.css files files and copies them to "dist" folder.

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css","app/style.css"])
        .pipe(gulp.dest("app/dist"));
});

gulp.task("default",["copy"],function(){
   console.log("Gulp completed...");
});
