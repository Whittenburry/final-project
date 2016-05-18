import Ember from 'ember';

export default Ember.Controller.extend({
  updateInstruction(instruction, formValues) {
    instruction.setProperties(formValues);

    instruction.save().then(() => {
      this.transitionToRoute(`dashboard.recipes.index`);
    });
  },
});
