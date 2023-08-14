//Основной модуль
import gulp from 'gulp';
//Импорт путей
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js'
// import { server } from './gulp/tasks/server.js';
// import { images } from './gulp/tasks/images.js';

//Передаем значение в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--ok'),
	isDev: !process.argv.includes('--ok'),
	path: path,
	gulp: gulp,
	plugins: plugins,
};


//Импорт задач 
import { server } from './gulp/tasks/server.js';
import { images } from './gulp/tasks/images.js';
import { html } from './gulp/tasks/html.js';
import { php } from './gulp/tasks/php.js';
import { reset } from './gulp/tasks/reset.js';
import { copy } from './gulp/tasks/copy.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { otfToTtf, ttfToWoff, fontStyle } from './gulp/tasks/fonts.js';
import { fontsClean } from './gulp/tasks/reset.js';

//Наблюдатель за изменнениями в файлах
function watcher() {
	gulp.watch(app.path.watch.files, copy);
	gulp.watch(app.path.watch.html, html);
	gulp.watch(app.path.watch.php, php);
	gulp.watch(app.path.watch.scss, scss);
	gulp.watch(app.path.watch.images, images);
	gulp.watch(app.path.watch.js, js);
}

//Построение сценария выполнение задач
const fonts = gulp.series(fontsClean, otfToTtf, ttfToWoff, fontStyle)
const grouping = gulp.parallel(copy, js, images, html, php, scss, server, watcher)
const dev = gulp.series(reset, fonts, grouping);
const image = gulp.series(reset, images);
const groupBuild = gulp.series(reset, fontsClean, copy, images, fonts)
const groupBuild2 = gulp.parallel(js, html, scss)
const build = gulp.series(groupBuild, groupBuild2)

export { image }
export { fonts }
export { build }

//Выполнение задач по умолчанию
gulp.task('default', dev);