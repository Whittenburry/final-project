import Ember from 'ember';

export default Ember.Controller.extend({
  addInstruction(parentRecipe, formValues) {
    // Wait to load all the instructions for the current recipe
    parentRecipe.get(`instructions`).then(() => {
      // How many steps exist already? Let's add one to that
      const step = parentRecipe.get(`instructions.length`) + 1;

      // Setup our base instruction
      const instruction = this.store.createRecord(`instruction`, formValues);

      // Setup the relation to our recipe
      instruction.set(`recipe`, parentRecipe);
      // instruction.recipe = parentRecipe;
      // Save our calculated step number
      instruction.set(`step`, step);

      // Wait for save
      return instruction.save();
    }).then(() => {
      this.transitionToRoute(`dashboard.recipes.detail.index`);
    });
  },
});

// The current indegrident doesn't need to know about the last ingredient, just the recipe; no calculations
// needed for edit forms
