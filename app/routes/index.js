import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
sortBy: ['price:desc'],
sortedPosts: Ember.computed.sort('model', 'sortBy'),
  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
