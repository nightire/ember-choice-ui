'use strict';

module.exports = {
  name: 'ember-choice-ui',

  isDevelopingAddon() { return true },

  included: function(app, parent) {
    this.options = Object.assign({}, this.options, {
      cssModules: {
        plugins: [
          require('postcss-sassy-mixins'),
          require('postcss-import'),
          require('lost'),
          require('postcss-cssnext')({warnForDuplicates: false}),
          require('rucksack-css')({fallbacks: true}),
          require('cssnano')({safe: true}),
          require('postcss-browser-reporter')
        ],
        virtualModules: {
          'choice-ui/colors': {
            'color-blue': '#1894f2',
            'color-gray': '#919ba2',
            'color-green': '#2ecc71',
            'color-slate': '#4e5b68',
            'color-golden': '#f1c40f',
            'color-purple': '#5940aa',
            'color-silver': '#bdc3c7',
            'color-tomato': '#e74c3c'
          }
        }
      }
    });
    this._super.included.call(this, app);

    const target = parent || app;
    target.import(
      `./bower_components/normalize-css/normalize.css`, { prepend: true }
    );
    target.import('./vendor/register-version.js');
  }
};
