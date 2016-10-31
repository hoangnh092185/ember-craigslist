import Ember from 'ember';

export default Ember.Component.extend({
  sortDefinition: ['date:desc'],
  sortedPosts: Ember.computed.sort('post', 'sortDefinition'),

  actions: {
    sortFilter(params){
      params += ":desc"
      this.set('sortDefinition', [params]);
    }
  }
});
