import { deleteSync } from 'del';
export const reset = cb => {
	app.plugins.if(app.isBuild, deleteSync(app.path.clean))
	app.plugins.if(!app.isBuild, deleteSync([app.path.clean + "/*", app.path.folderClean]))
	cb();
};

export const fontsClean = cb => {
	app.plugins.if(app.isBuild, deleteSync(`${app.path.srcFolder}/scss/config/fonts.scss`))
	app.plugins.if(app.isBuild, deleteSync(`${app.path.build.fonts}`))
	cb();
}
