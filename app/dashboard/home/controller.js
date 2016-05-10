import Ember from 'ember';

export default Ember.Controller.extend({
  makeResponse(liked, recipe) {
    const response = this.store.createRecord(`response`, {liked, recipe});
    response.save().then(() => {
      this.show.Next();
    });
  }
});
