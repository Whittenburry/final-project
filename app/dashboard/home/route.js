import Ember from 'ember';

export default Ember.Route.extend({
  model() {
<<<<<<< HEAD
    return this.store.findAll(`recipe`, {include: `responses`});
  }
=======
    this.store.queryRecord('recipe', {
      random: true,
      filter: {
        limit: 1,
      }
    });
  },
>>>>>>> 4502028377d472d53d004188c128591c2940fd92
});
