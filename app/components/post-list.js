import Ember from 'ember';

export default Ember.Component.extend({
  sortDefinition: ['date'],
  sortedPosts: Ember.computed.sort('post', 'sortDefinition'),

  actions: {
    sortFilter(params){
      params += ":desc"
      this.set('sortDefinition', [params]);
    }
  }
});
