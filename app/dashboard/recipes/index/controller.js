import Ember from 'ember';

export default Ember.Controller.extend({
  destroyRecipe(recipe) {
    if (confirm(`You trynna trash or naw?`)) {
      recipe.destroyRecord();
    }
  },
});
