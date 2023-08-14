import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css' // Сжатие CSS файла
import autoPrefixer from 'gulp-autoprefixer' // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries' // Группировка медиа за

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SCSS',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(app.plugins.replase(/@img\//g, '../img/'))
		.pipe(sass({
			outputStyle: 'expanded'
			//outputStyle: 'compressed'
		}))

		.pipe(groupCssMediaQueries())
		.pipe(autoPrefixer({
			grid: true,
			overrideBrowserslist: ['last 3 versions'],
			cascade: true
		}))
		// Раскомментировать если нужен не сжатый дубль файла стилей
		.pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.css)))
		.pipe(app.plugins.if(app.isBuild, cleanCss()))
		.pipe(rename({
			extname: ".min.css"
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream())
};