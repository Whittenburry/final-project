import Ember from 'ember';

export default Ember.Controller.extend({
  belongsToCurrentUser(responses) {
    return responses.get(`length`) === 0;
  },

  makeResponse(liked, recipe) {
    const response = this.store.createRecord(`response`, { liked, recipe });
  },
});
