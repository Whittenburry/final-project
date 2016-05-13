import Ember from 'ember';

export default Ember.LinkComponent.extend({
  _invoke(ev) {
    const toggleParentMenu = this.get(`beforeTransition`);
    toggleParentMenu();

    this._super(ev);
  },
});
