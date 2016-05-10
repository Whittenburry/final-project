import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  newUser(attrs) {
    const tenderer = this.store.createRecord(`endUser`, attrs);

    tenderer.save().then(() => {
      return this.get(`session`).authenticate(`authenticator:application`, attrs.email, attrs.password);
    })
    .catch((reason) => {
      console.log(reason);
      window.alert(`Something went wrong...`);
    });
  },
});
