import Ember from 'ember';

export default Ember.Route.extend({
  model({
    ingredient_id,
  }) {
    return this.store.findRecord(`ingredient`, ingredient_id);
  },
});
