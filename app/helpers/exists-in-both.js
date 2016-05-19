import Ember from 'ember';
import _ from 'lodash';

export function existsInBoth([user]/*, hash*/) {
  return function(responseIds) {
    const userResponses = user.get(`responseIds`);
    console.log(user.get(`responseIds`));

    return _.intersection(responseIds, userResponses).length >= 1;
  };
}

export default Ember.Helper.helper(existsInBoth);
