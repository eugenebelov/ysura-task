import DS from 'ember-data';

export default DS.Model.extend({
  levels: DS.hasMany('level')
});
