import Ember from 'ember';

export function list(params/*, hash*/) {
  return Ember.A(params);
}

export default Ember.Helper.helper(list);
