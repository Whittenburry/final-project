import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

// Only allow guest users in...
export default Ember.Route.extend(UnauthenticatedRouteMixin, {
});
