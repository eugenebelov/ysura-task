import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('boolen', { defaultValue: false }),
  vehicle: DS.belongsTo('vehicle')
});
