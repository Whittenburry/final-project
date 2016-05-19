import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  model() {
    return this.store.findRecord(`end-user`, this.get(`session.data.authenticated.user.id`));
  },

  afterModel(user) {
    this.set(`currentUser.user`, user);
  },
});
