import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model){
    this._super(controller, model);

    Ember.run.scheduleOnce('afterRender', function(){
      $("#menu-toggle").click(function(e) {
	        e.preventDefault();
	        $("#wrapper").toggleClass("toggled");
	    });
    });
  }
});
