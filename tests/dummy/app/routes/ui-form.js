import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.resolve({
      foo: {
        checkall: true
      },
      bar: {
        allcheck: false
      }
    });
  }
});
