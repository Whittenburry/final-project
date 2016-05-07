import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  image: attr(),
  ingredients: hasMany('ingredient'),
  instructions: hasMany('instruction'),
});