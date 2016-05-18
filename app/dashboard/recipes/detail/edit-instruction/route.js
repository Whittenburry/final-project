import Ember from 'ember';

export default Ember.Route.extend({
  model({
    instruction_id,
  }) {
    return this.store.findRecord(`instruction`, instruction_id);
  },
});
