require('dotenv').config();

const path = require('path');
const generateEnvFile = require('./server/utils/generateEnvFile');
const validateEnvVariables = require('./server/utils/validateEnvVariables');

/**
 * @typedef {Object} FLINT
 * @property {String} templatePath - Path to your templates directory
 * @property {String} scssPath - Path to your scss directory
 * @property {String} publicPath - Path to your public directory
 * @property {String} pluginPath - Path to your plugins directory
 * @property {String} configPath - Path to your config file
 * @property {String} scssEntryPoint - The entry point to your SCSS styles (within the scssPath)
 * @property {String} siteName - The title of your site
 * @property {String} siteUrl - The URL to your site
 */

/**
 * Flint class
 */
exports.Flint = class Flint {
  /**
   * Create a Flint server
   * @param {FLINT} settings
   * @param {boolean} isDeveloping
   */
  constructor(settings, isDeveloping) {
    const appDir = path.dirname(require.main.filename);
    const { templatePath, scssPath, publicPath, configPath, pluginPath } = settings;

    global.FLINT = Object.assign({}, settings, {
      templatePath: path.join(appDir, templatePath || 'templates'),
      scssPath: path.join(appDir, scssPath || 'scss'),
      publicPath: path.join(appDir, publicPath || 'public'),
      configPath: path.join(appDir, configPath || 'config'),
      pluginPath: path.join(appDir, pluginPath || 'plugins'),
      isDeveloping,
      appDir,
    });

    this.port = !isDeveloping && process.env.PORT ? process.env.PORT : 4000;
  }

  startServer(port = this.port) {
    const missingEnvVariables = validateEnvVariables();
    const shouldContinue = generateEnvFile() && missingEnvVariables.length === 0;

    if (shouldContinue) {
      // eslint-disable-next-line global-require
      const { startServer } = require('./server');
      startServer(port);
    }
  }
};

exports.FlintPlugin = require('./server/utils/FlintPlugin');