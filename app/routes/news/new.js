import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('news');
	},

	actions: {
		saveEntry(news){
			news.save().then(() => {
				this.controller.set('responseMessage', true);
			});
		},

		willTransition() {
			this.controller.get('model').rollbackAttributes();

			this.controller.set('responseMessage', false);
		}
	}
});
