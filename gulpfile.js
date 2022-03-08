const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", () => {
    return gulp.src("src/sass/**/*.scss")
        .pipe(sass().on("error", console.error))
        .pipe(gulp.dest("dist/css"))
});

gulp.task("sass:watch", () => {
    return gulp.watch("src/sass/**/*.scss", gulp.series("sass"));
});