import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import computed from 'ember-computed';

export default Component.extend({
  layout, styles,

  tagName: 'button',

  attributeBindings: ['type'],
  type: 'button',

  size: 'medium',
  sizeClassName: computed('size', function() {
    return this.get(`styles.${this.get('size')}`);
  }),

  color: 'gray',
  colorClassName: computed('color', function() {
    return this.get(`styles.${this.get('color')}`);
  }),

  classNameBindings: ['styles.button', 'sizeClassName', 'colorClassName'],

  content: 'BUTTON'
}).reopenClass({ positionalParams: ['content'] });
