
var showMore = function(key) {
  $("#entry-" + key + " > .bib-entry-more").toggle();
};

$(document).ready(function() {

  // initialize list.js
  var pubList = new List('zth-pubs', {
    page: 2000,
    valueNames: ['bib-entry-summary']
  });

});
