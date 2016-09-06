import Component from 'ember-component';
import layout from './template';
import styles from '../styles';

export default Component.extend({
  layout, styles,

  tagName: 'h4',

  classNameBindings: ['styles.header'],

  content: '面板标题'
}).reopenClass({ positionalParams: ['content'] });
