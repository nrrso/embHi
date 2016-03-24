import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		deleteEntry(param){
			this.sendAction('action', param);
		}
	}
});
