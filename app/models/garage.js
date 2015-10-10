import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', { defaultValue: 'Vence parking' }),
  levels: DS.hasMany('level')
});
