import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.queryRecord('recipe', {
      random: true,
      filter: {
        limit: 1,
      }
    });
  },
});
