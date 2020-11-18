let sourceFolder = "client";
// let projectFolder = require("path").basename(__dirname);

let pathObject = {
  build: { // прописываем пути для собранных файлов
    html: "./dist",
    css: "./dist",
    scripts: "./dist",
    // img: projectFolder + "./dist/img/",
    // fonts: projectFolder + "./dist/fonts/",
  },
  src: { // прописываем пути для исходных файлов
    html: sourceFolder + "/*.html",
    css: sourceFolder + "/less/main.less",
    scripts: sourceFolder + "/index.js",
    // img: sourceFolder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    // fonts: sourceFolder + "/fonts/*.ttf",
  },
  watch: { // прописываем пути для отслеживаемых файлов
    html: sourceFolder + "/**/*.html",
    css: sourceFolder + "/less/**/*.less",
    scripts: sourceFolder + "/**/*.js",
    // img: sourceFolder + "/img/**/*.{jpg,png,svg,gif,ico,webp}", 
    // fonts: sourceFolder + "/fonts/*.ttf",
  },
}

const { series, parallel, src, dest } = require("gulp");

const gulp = require("gulp"),
  // svgmin = require("gulp-svgmin"),
  // svgstore = require("gulp-svgstore"),
  // inject = require("gulp-inject"),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream'),
  webpackConfig = require('./webpack.config.js'),
  less = require("gulp-less"),
  clean = require('gulp-clean'),
  uglify = require("gulp-uglify-es").default,
  autoprefixer = require("gulp-autoprefixer"),
  browserSync = require("browser-sync").create(),
  rename = require("gulp-rename");

gulp.task("less", function () {
  return src(pathObject.src.css)
    .pipe(less())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(dest(pathObject.build.css));
});

gulp.task("html", function () {
  return gulp.src(pathObject.src.html).pipe(gulp.dest(pathObject.build.html));
});

gulp.task("js", function () {
  return gulp.src(pathObject.src.scripts)
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest(pathObject.build.scripts))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(pathObject.build.scripts));
});

gulp.task("clean", function () {
  return gulp.src('./dist', { read: false })
    .pipe(clean());
});

gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  gulp.watch(pathObject.watch.css).on("change", series("less"));
  gulp.watch(pathObject.watch.scripts).on("change", series("js"));
  gulp.watch(pathObject.watch.html).on("change", series("html"));

  gulp.watch("./dist/main.css").on("change", browserSync.reload);
  gulp.watch("./dist/index.js").on("change", browserSync.reload);
  gulp.watch("./dist/index.html").on("change", browserSync.reload);
});

gulp.task("build", series("clean", /*"svgstore", */"less", "html", "js"));

gulp.task("default", series(/*"svgstore", */parallel("html", "less", "js"), "serve"));
