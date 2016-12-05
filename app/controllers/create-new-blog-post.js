import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createBlogPost: function(e) {
      e.preventDefault();
      var title=this.get('title');
      var text=this.get('content');
      var imgUrl = this.get('imgUrl');

      var promise = Ember.$.ajax({
        type: 'post',
        url: 'http://paper-blog-api.herokuapp.com',
        data: {
          title: title,
          text: text,
          imgUrl: imgUrl
        }
      });

      promise.then((response) => {
        this.transitionToRoute('index');
      }, function(){
        alert('error');
      },function(){

      });

    }
  }
});
