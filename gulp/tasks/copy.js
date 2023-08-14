export const copy = () => {
	return app.gulp.src(app.path.src.files)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'copy',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(app.gulp.dest(app.path.build.files))
};