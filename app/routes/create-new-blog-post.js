import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var promise = Ember.$.ajax({
      type: 'get',
      url: 'http://paper-blog-api.herokuapp.com'
    });

    promise.then(function(data){
     // console.log(data.data);
    });
  }
});
