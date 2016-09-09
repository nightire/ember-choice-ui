import Component from 'ember-basic-dropdown/components/basic-dropdown';
import layout from './template';
import styles from './styles';
import fallbackIfUndefined from 'ember-basic-dropdown/utils/computed-fallback-if-undefined';

export default Component.extend({
  layout, styles,

  triggerComponent: fallbackIfUndefined('choice/ui-dropdown/trigger'),
});
