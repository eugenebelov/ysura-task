import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  isFree: DS.attr('boolen', { defaultValue: true }),
  vehicle: DS.belongsTo('vehicle')
});
