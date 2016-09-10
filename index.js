'use strict';

module.exports = {
  name: 'ember-choice-ui',
  isDevelopingAddon() { return true },

  options: {
    cssModules: {
      plugins: {
        before: [
          require('postcss-sassy-mixins'),
          require('postcss-import'),
          require('lost'),
          require('postcss-cssnext')({warnForDuplicates: false}),
          require('rucksack-css')({fallbacks: true})
        ],
        after: [
          require('cssnano')({safe: true}),
          require('postcss-browser-reporter')
        ]
      }
    }
  },

  included: function(app, addon) {
    const target = addon || app;

    this._super.included.call(this, target);

    target.import(
      `./bower_components/normalize-css/normalize.css`, { prepend: true }
    );

    target.import('./vendor/register-version.js');
  }
};
