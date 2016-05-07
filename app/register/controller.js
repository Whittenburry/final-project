import Ember from 'ember';

export default Ember.Controller.extend({
  newUser(attrs) {
    const tenderer = this.store.createRecord(`endUser`, attrs);

    tenderer.save().then(() => {
      this.transitionToRoute(`login`);
    })
    .catch((reason) => {
      console.log(reason);
      window.alert(`Something went wrong...`);
    });
  },
});
