export const php = () => {
	return app.gulp.src(app.path.src.php)
		// .pipe(app.plugins.plumber(
		// 	app.plugins.notify.onError({
		// 		title: 'PHP',
		// 		message: 'Error: <%= error.message %>'
		// 	})
		// ))
		//.pipe(fileinclude())
		.pipe(app.plugins.replase(/@img\//g, 'img/'))
		//.pipe(app.plugins.if(app.isBuild, gulpWebpHtmlNosvg()))
		// .pipe(gulpVersionNumber({
		// 	'value': '%DT%',
		// 	'append': {
		// 		'key': '_v',
		// 		'cover': 0,
		// 		'to': [
		// 			'css',
		// 			'js',
		// 		],
		// 	},
		// 	'output': {
		// 		'file': 'gulp/version.json'
		// 	}
		// }))
		// .pipe(gulpHtmlmin(
		// 	{
		// 		useShortDoctype: true,
		// 		sortClassName: true,
		// 		collapseWhitespace: app.isBuild,
		// 		removeComments: app.isBuild
		// 	}
		// ))
		.pipe(app.gulp.dest(app.path.build.php))
		.pipe(app.plugins.browserSync.stream())
}