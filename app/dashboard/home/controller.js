import Ember from 'ember';

export default Ember.Controller.extend({
  recipeResponse(liked, recipe) {
    const response = this.store.createRecord(`response`, {
      liked,
      recipe,
    });
    response.save().then(() => {
      this.show.next();
    });
  },
});
