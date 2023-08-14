//получаем имя папки проекта 
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const folderClean = `!./dist/img`;
const srcFolder = `./src`;

export const path = {
	build: {
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		php: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`
	},
	src: {
		scss: `${srcFolder}/scss/*.scss`,
		html: `${srcFolder}/*.html`,
		php: `${srcFolder}/*.php`,
		files: `${srcFolder}/files/**/*.*`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		fonts: `${srcFolder}/fonts/*`
	},
	watch: {
		scss: `${srcFolder}/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		php: `${srcFolder}/**/*.php`,
		files: `${srcFolder}/files/**/*.*`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`
	},
	clean: buildFolder,
	folderClean: folderClean,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
};