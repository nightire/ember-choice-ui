import Component from 'ember-component';
import layout from './template';
import styles from '../styles';
import computed from 'ember-computed';

export default Component.extend({
  layout, styles,

  tagName: 'button',

  colorClassName: computed('color', function() {
    return this.get(`styles.${this.get('color')}`);
  }),
  classNameBindings: ['styles.button', 'colorClassName'],

  icon: 'ic-plus-w'
}).reopenClass({ positionalParams: ['content'] });
