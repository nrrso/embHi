import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('news');
	},

	actions: {

    deleteEntry(news) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        news.destroyRecord();
      }
    }
  }
});
