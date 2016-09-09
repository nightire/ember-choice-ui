import Component from 'ember-basic-dropdown/components/basic-dropdown/trigger';
import layout from 'ember-basic-dropdown/templates/components/basic-dropdown/trigger';
import styles from '../styles';
import buttonStyles from '../../ui-button/styles';
import computed from 'ember-computed';

export default Component.extend({
  layout, styles,

  iconPositionClassName: computed('iconPosition', function() {
    switch (this.get('iconPosition')) {
    case 'l':
      return this.get('styles.icon-l');
    case 'r':
      return this.get('styles.icon-r');
    case 'lr':
      return `${this.get('styles.icon-l')} ${this.get('styles.icon-r')}`;
    default:
      return ''
    };
  }),
  
  classNames: [buttonStyles.button, buttonStyles.default],
  classNameBindings: ['styles.trigger', 'iconPositionClassName']
}).reopenClass({ positionalParams: ['iconPosition'] });
