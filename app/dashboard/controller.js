import Ember from 'ember';

export default Ember.Controller.extend({
  toggleMenu() {
    const menu = document.querySelector(`.menu-container`);

    menu.classList.toggle(`slide`);
  },
});
