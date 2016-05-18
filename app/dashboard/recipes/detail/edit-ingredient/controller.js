import Ember from 'ember';

export default Ember.Controller.extend({
  updateIngredient(ingredient, formValues) {
    ingredient.setProperties(formValues);

    ingredient.save().then(() => {
      this.transitionToRoute(`dashboard.recipes.detail.index`);
    });
  },
});
