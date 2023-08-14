import gulpReplace from 'gulp-replace';// Поиск и замена
import gulpPlumber from 'gulp-plumber';// Обработка ошибок
import gulpNotify from 'gulp-notify';  // Сообщения (подсказки)
import browsersync from 'browser-sync';// Локальный сервер
import never from 'gulp-newer';			// Проверка обновления
import ifPlugin from 'gulp-if' // Условное ветление

export const plugins = {
	replase: gulpReplace,
	plumber: gulpPlumber,
	notify: gulpNotify,
	never: never,
	browserSync: browsersync,
	if: ifPlugin
}