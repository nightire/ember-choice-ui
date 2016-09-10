import Component from 'ember-component';
import layout from './template';
import styles from '../styles';

export default Component.extend({
  layout, styles,

  tagName: 'header',

  classNameBindings: ['styles.header'],

  buttonComponent: 'choice/ui-button'
}).reopenClass({ positionalParams: ['title'] });
