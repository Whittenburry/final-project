import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  notRespondedByCurrentUser(users) {
    const loggedinUser = this.get(`session.data.authenticated.user.id`);

    if (users.get(`length`) === 0) {
      return true;
    }

    if (users.any((current) => current.get(`isPending`))) {
      return false;
    }

    return !users.any((current) => {
      return current.get(`id`) && parseInt(current.get(`id`), 10) === parseInt(loggedinUser, 10);
    });
  },

  makeResponse(liked, recipe, endUser) {
    const response = this.store.createRecord(`response`, { liked, recipe, endUser });

    response.save();
  },
});
