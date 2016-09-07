import Component from 'ember-form-for/components/form-fields/text-field'
import layout from './template';
import styles from '../styles';
import computed from 'ember-computed';

export default Component.extend({
  layout, styles,

  wrapper: 'middle',
  wrapperClassNames: computed('wrapper', function() {
    const styles = this.get('styles')
    return `${styles.field} ${styles[this.get('wrapper')]}`;
  })
});
