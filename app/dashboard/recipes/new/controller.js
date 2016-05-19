import Ember from 'ember';

export default Ember.Controller.extend({
  addRecipe(formValues) {
    const recipe = this.store.createRecord(`recipe`, formValues);

    recipe.save().then(() => {
      this.transitionToRoute(`dashboard.recipes.index`);
    });
  },
});
