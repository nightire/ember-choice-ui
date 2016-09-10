import Ember from 'ember';
import Route from 'ember-route';
import { isNone } from 'ember-utils';

const model = Ember.Object.create({
  form: Ember.Object.create({
    checkall: true,
    inversed: false,
    gender: 1,
    title: '巧思问卷标题'
  })
});

export default Route.extend({
  queryParams: {
    component: {
      refreshModel: true
    }
  },

  model(params) {
    return {
      components: [
        'ui-button', 'ui-form', 'ui-panel', 'ui-dropdown', 'ui-page'
      ],
      component: params.component
    };
  },

  renderTemplate(controller, { component }) {
    if (isNone(component)) {
      return this._super(...arguments);
    }

    this.render(`choice.${component}`, { model });
  }
});
