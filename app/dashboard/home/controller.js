import Ember from 'ember';

export default Ember.Controller.extend({
  const response = this.store.createRecord(`response`, {liked, recipe}),
  response.save().then(() => {
    this.show.Next(),
  },
});
