import Ember from 'ember';

export default Ember.Component.extend({
  newPostForm: false,
  actions: {
    newPostForm() {
      this.set('newPostForm', true);
    },
    savePost() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        date: new Date(),
        image: this.get('image'),
        keywords: this.get('keywords'),
        price: parseInt(this.get('price'))
      };
      this.set('newPostForm', false);
      this.sendAction('savePost', params);
    },
  }
});
