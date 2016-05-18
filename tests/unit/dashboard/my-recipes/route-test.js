import { moduleFor, test } from 'ember-qunit';

moduleFor('route:dashboard/my-recipes', 'Unit | Route | dashboard/my recipes', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
