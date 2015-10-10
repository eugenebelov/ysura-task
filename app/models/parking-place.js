import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  isFree: DS.attr('boolean', { defaultValue: true }),
  vehicle: DS.belongsTo('vehicle')
});
