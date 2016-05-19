import Ember from 'ember';

export default Ember.Controller.extend({
  resetLikes(user) {
    if (confirm(`You trynna reset? or naw?`)) {
      user.get(`responses`).forEach((response) => {
        response.destroyRecord();
      });
    }
  },
});
