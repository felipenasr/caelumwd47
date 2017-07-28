// modulos necessarios
// gulp-babel
// gulp-uglify
// gulp-concat
// babel-preset-es2015
// os metodos do gulp: task, src, pipe
// task = tafera;
// exemplo de task('nome da tarefa', func callback)


const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("scripts", function () {
  console.log('rodando task script');
  // gulp.src("src/**/*.js")
  gulp.src(["src/jquery.js", "src/cep.js"])
       .pipe(babel({presets: ["es2015"]}))
       .pipe(uglify())
       .pipe(concat("app.min.js"))
       .pipe(gulp.dest("build"));
});
