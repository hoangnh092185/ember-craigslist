import Ember from 'ember';

export function postDateFormat(params) {

  var date = new Date(params).toISOString().slice(0, 10);
  return date;
}

export default Ember.Helper.helper(postDateFormat);
