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
      components: Ember.A([
        {namespace: 'choice', name: 'ui-button'},
        {namespace: 'choice', name: 'ui-form'},
        {namespace: 'choice', name: 'ui-panel'},
        {namespace: 'choice', name: 'ui-dropdown'},
        {namespace: 'choice', name: 'ui-page'},
        {namespace: 'choice-data', name: 'report-card'}
      ]),
      component: params.component
    };
  },

  renderTemplate(_, m) {
    if (isNone(m.component)) {
      return this._super(...arguments);
    }

    const component = m.components.findBy('name', m.component);
    this.render(`${component.namespace}.${component.name}`, { model });
  }
});
