import Ember from 'ember';

export default Ember.Controller.extend({
  addInstruction(parentRecipe, formValues) {
    const instruction = this.store.createRecord(`instruction`, formValues);
    instruction.set(`recipe`, parentRecipe);
    // instruction.recipe = parentRecipe;

    instruction.save().then(() => {
      this.transitionToRoute(`dashboard.recipes.detail.index`);
    });
  },
});
