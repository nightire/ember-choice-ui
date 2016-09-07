import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.resolve({
      checkall: true,
      inversed: false,
      gender: 1,
      title: '巧思问卷标题'
    });
  }
});
