import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('projects-radio-buttons', 'Integration | Component | projects radio buttons', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{projects-radio-buttons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#projects-radio-buttons}}
      template block text
    {{/projects-radio-buttons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
