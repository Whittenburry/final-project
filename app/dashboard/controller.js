import Ember from 'ember';

export default Ember.Controller.extend({
  formToggle() {
    const navbarButton = this.document.querySelector(`.dashboard-nav__hamburger`);
    navbarButton.addEventListener(`click`, () => {
      this.slideForm();
    });
  },

  slideForm() {
    const toggle = document.querySelector(`.dashboard-nav__hamburger`);

    toggle.classList.toggle(`slide`);
  },
});
