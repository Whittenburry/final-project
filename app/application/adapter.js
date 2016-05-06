import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'final-project/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: `https://tender-api.herokuapp.com`,
  namespace: `api`,
  authorizer: `authorizer:application`,
});
