import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  date: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  keywords: DS.attr()
});
