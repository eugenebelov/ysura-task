import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      this.store.findAll('garage'); //.then(function(parking) { parking.store.find('level') })
  }
});
