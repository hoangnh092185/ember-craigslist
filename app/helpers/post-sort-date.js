import Ember from 'ember';

export function postSortDate(params) {
  params.sort(function(a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a>b ? -1 : a<b ? 1 : 0;
  });
  return params;
}

export default Ember.Helper.helper(postSortDate);
