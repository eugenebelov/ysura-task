import DS from 'ember-data';

export default DS.Model.extend({
  places: DS.hasMany('parking-place')
});
