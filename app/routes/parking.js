import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      // this.store.findAll('garage').then(function(parking) {
      //   parking.store.findAll('level').then(function(level) {
      //     level.store.findAll('parking-place').then(function(place) {
      //       place.store.findAll('vehicle')
      //     })
      //   })
      // })

    return Ember.RSVP.hash({
      garage: this.store.findAll('garage')
      // level: this.store.findAll('level'),
      // places: this.store.findAll('parking-place'),
      // vehicle: this.store.findAll('vehicle')
    });
  }
});
