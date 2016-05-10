import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('logout');
  this.route('profile');
  this.route('register');
  this.route('login');
  this.route('dashboard', function() {
    this.route('home', { path: '/home' });
    this.route('recipe-view', { path: '/:recipe' });
    this.route('user-profile');
    this.route('add-new');
  });

  // this.route('home', {
  //   path: '/home'
  // });
  this.route('app-instantiation', { path: '/' });
});

export default Router;
