import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Ember.Component.extend(RecognizerMixin, {
  recognizers: 'swipe',
  tagName: `header`,
  classNames: ['home-header'],

  hammerOptions: {
    swipe_velocity: 0.5
  },
});
