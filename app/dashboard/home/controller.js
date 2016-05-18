import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  belongsToCurrentUser(users) {
    const loggedinUser = this.get(`session.data.authenticated.user.id`);

    return !users.any((current) => {
      return current.get(`id`) === loggedinUser;
    });
  },

  makeResponse(liked, recipe) {
    const response = this.store.createRecord(`response`, { liked, recipe });

    response.save();
  },
});
