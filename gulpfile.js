var gulp = require("gulp");
var $  = require("gulp-load-plugins")();
var open = require("open");

var app = {
	srcPath:'src/',
	devPath:'build/',
	prdPath:'dist/'
};

gulp.task('lib',function() {
	gulp.src(app.srcPath + "lib/*.*")
	.pipe(gulp.dest(app.devPath + "vendor"))
	.pipe(gulp.dest(app.prdPath + "vendor"))
	.pipe($.connect.reload())
});

// gulp.task('lib',function() {
// 	gulp.src(app.srcPath + "lib/*.swf")
// 	.pipe(gulp.dest(app.devPath + "vendor"))
// 	.pipe(gulp.dest(app.prdPath + "vendor"))
// 	.pipe($.connect.reload())
// });

// gulp.task('lib',function() {
// 	gulp.src(app.srcPath + "lib/*.xap")
// 	.pipe(gulp.dest(app.devPath + "vendor"))
// 	.pipe(gulp.dest(app.prdPath + "vendor"))
// 	.pipe($.connect.reload())
// });

gulp.task('data',function(){
	gulp.src(app.srcPath + 'modules/data/*.json')
	.pipe(gulp.dest(app.devPath + "data"))
	.pipe(gulp.dest(app.prdPath + "data"))
	.pipe($.connect.reload())
});

gulp.task('js', function () {
	gulp.src(app.srcPath + 'modules/**/*.js')
	.pipe($.concat('index.js')) //合并所有js文件
	.pipe(gulp.dest(app.devPath + 'js'))
	//.pipe($.uglify()) // 生产环境压缩js
	.pipe(gulp.dest(app.prdPath + 'js'))
	.pipe($.connect.reload());
});

gulp.task('images', function () {
	gulp.src(app.srcPath + 'images/*.{png,jpg,gif,ico}')
    .pipe($.imagemin({
		optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
		progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
		interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
		multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
	.pipe(gulp.dest(app.devPath + 'images'))
	.pipe(gulp.dest(app.prdPath + 'images'))
	.pipe($.connect.reload());
});


gulp.task('css',function() {
	gulp.src(app.srcPath + "css/*.css")
	.pipe($.concat('all.css'))
	.pipe(gulp.dest(app.devPath + 'css'))
	.pipe($.cssmin())
	.pipe(gulp.dest(app.prdPath + 'css'))
	.pipe($.connect.reload())
});



gulp.task('fonts',function(){
	gulp.src(app.srcPath + 'fonts/**')
	.pipe(gulp.dest(app.devPath + "fonts"))
	.pipe(gulp.dest(app.prdPath + "fonts"))
	.pipe($.connect.reload())
})

gulp.task('html', function () {
	gulp.src(app.srcPath + '**/*.html')
	.pipe(gulp.dest(app.devPath))
	.pipe(gulp.dest(app.prdPath))
	.pipe($.connect.reload());
});

gulp.task('reload-dev',['lib','css','js','html','data','fonts','images'],function() {
   return gulp.src(app.srcPath + '**/*.*')
     .pipe($.connect.reload());//服务器重启和各文件变化
});

gulp.task('watch', function() {
     gulp.watch(app.srcPath + '**/*.*',['reload-dev']);
})
gulp.task('build',['lib','css','js','html','watch','data','fonts','images','reload-dev']);

gulp.task('run',['build'],function(){
	$.connect.server({
		root:[app.devPath],
		livereload:true,
		port:9898
	});
});

gulp.task('default',['run'])