import Component from 'ember-component';
import styles from './styles';
import computed from 'ember-computed';

export default Component.extend({
  styles,

  tagName: 'i',

  iconClassName: computed('name', function() {
    return this.get(`styles.${this.get('name')}`);
  }),

  classNameBindings: ['styles.ic', 'iconClassName']
}).reopenClass({ positionalParams: ['name'] });
