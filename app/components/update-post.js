import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShow: false,
  actions: {
    updatePostForm() {
      this.set('updateFormShow', true);
    },
    updatePost(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        description: this.get('description'),
        image: this.get('image'),
        keywords: this.get('keywords'),
        price: this.get('price')
      };
      this.set('updateFormShow', false);
      this.sendAction('updatePost', post, params);
    },
    deletePost(post){
      if (confirm("Are you sure you want to delete this post?")){
        this.sendAction('destroyPost', post);
      }
    }
  }
});
