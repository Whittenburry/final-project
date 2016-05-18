import Ember from 'ember';

export default Ember.Route.extend({
  updateIngredient(ingredient, formValues) {
    ingredient.setProperties(formValues);

    ingredient.save().then(() => {
      this.transitionToRoute(`dashboard.recipes.index`);
    });
  },
});
