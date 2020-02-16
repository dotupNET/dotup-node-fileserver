const GulpLoader = require('./tools/gulp/gulpLoader');

// Load all gulp files.
const gulpLoader = new GulpLoader();
gulpLoader.loadAllFiles();

gulpLoader.task('project-build', gulpLoader.getProcessSerie(gulpLoader.processNames.build));
gulpLoader.task('project-publish', gulpLoader.getProcessSerie(gulpLoader.processNames.publish));