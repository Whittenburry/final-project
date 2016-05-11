import Ember from 'ember';

export default Ember.Controller.extend({
  updateRecipe(recipe, formValues) {
    recipe.setProperties(formValues);

    recipe.save().then(() => {
      this.transitionToRoute(`dashboard.recipes.index`);
    });
  },
});
