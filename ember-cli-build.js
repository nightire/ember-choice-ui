var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    cssModules: {
      plugins: {
        before: [
          require('postcss-sassy-mixins'),
          require('postcss-import')({path: './app/styles'}),
          require('postcss-cssnext')({warnForDuplicates: false}),
          require('rucksack-css')({fallbacks: true})
        ],
        after: [
          require('cssnano')({safe: true}),
          require('postcss-browser-reporter')
        ]
      }
    }
  });

  app.import(app.bowerDirectory + '/normalize-css/normalize.css', { prepend: true });

  return app.toTree();
};
