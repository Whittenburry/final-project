import Ember from 'ember';

export default Ember.Controller.extend({
  addInstruction(formValues) {
    const instruction = this.store.createRecord(`instruction`, formValues);

    instruction.save().then(() => {
      this.transitionToRoute(`dashboard.recipes.detail.index`)
    });
  },
});
