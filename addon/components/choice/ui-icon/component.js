import Component from 'ember-component';
import styles from './styles';
import computed from 'ember-computed';

export default Component.extend({
  styles,

  tagName: 'i',

  iconClassName: computed('name', function() {
    return this.get(`styles.${this.get('name')}`);
  }),

  positionClassName: computed('position', function() {
    return this.get(`styles.${this.get('position')}`);
  }),

  classNameBindings: ['styles.ic', 'iconClassName', 'positionClassName']
}).reopenClass({ positionalParams: ['name', 'position'] });
