import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('app-instantiation', { path: '/' });
  this.route('logout');
  this.route('profile');
  this.route('register');
  this.route('login');
  this.route('dashboard', function() {
    this.route('home', { path: '/home' }, function() {
      this.route('preview', {
        path: '/preview/:recipe_id'
      });
    });
    this.route('recipe-view', { path: '/:recipe' });
    this.route('user-profile');
    this.route('recipe');
    this.route('my-recipes');
    this.route('recipes', function() {
      this.route('new');

      this.route('edit', {
        path: '/:id/edit'
      });

      this.route('detail', {path: '/:id'}, function() {
        this.route('new-ingredient');
        this.route('edit-ingredient');
        this.route('new-instruction');
        this.route('edit-instruction');
      });
    });
  });

  // this.route('home', {
  //   path: '/home'
  // });
});

export default Router;
