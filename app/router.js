import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('new');
    this.route('edit', {path: '/:post_id/edit'});
  });
  this.route('news', function() {
    this.route('new');
    this.route('show', {path: '/:news_id/show'});
  });
  this.route('contact');
});

export default Router;
