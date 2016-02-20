import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashboard/project-preview', 'Integration | Component | dashboard/project preview', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{dashboard/project-preview}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#dashboard/project-preview}}
      template block text
    {{/dashboard/project-preview}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
