import Ember from 'ember';

export default Ember.Controller.extend({
  resetLikes(user) {
    if (confirm(`Are you sure you want to reset your taste profile?`)) {
      user.get(`responses`).forEach((response) => {
        response.destroyRecord();
      });
    }
  },
});
