'use strict';

module.exports = {
  name: 'ember-choice-ui',
  description: 'install all dependencies through bower',

  normalizeEntityName() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('normalize-css');
  }
}
