import DS from 'ember-data';

export default DS.Model.extend({
  licenseNumber: DS.attr('string'),
  type: DS.attr('string'),
  status: DS.attr('string')
});
