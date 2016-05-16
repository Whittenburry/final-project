import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  liked: attr('boolean'),
  endUser: belongsTo('end-user'),
  recipe: belongsTo('recipe'),
});
