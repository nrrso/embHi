import DS from 'ember-data';
import Ember from 'ember';


export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
	link: DS.attr('string'),
	lastEdited: DS.attr('date'),

	isValidTitle: Ember.computed.notEmpty('title'),
	isDisabled: Ember.computed.not('isValidTitle'),
  excerpt: Ember.computed('content', function() {
  	return this.get('content') ? `${this.get('content').substring(0, 100)}` : 'No Content found. :(';
  })
});
