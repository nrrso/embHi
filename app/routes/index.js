import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		let store = this.store;
		return Ember.RSVP.hash({
			posts: store.findAll('post'),
			news: store.findAll('news')
		});
	},

	setupController: function(controller, models) {
    var posts = models.posts;
    var news = models.news;

    controller.set('posts', posts);
    controller.set('news', news);
  }
});
