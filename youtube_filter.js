$().ready(function() {
  $('.comment-text p').each(function(index, comment) {
    var original = $(comment).text();
    
    var filtered = original.replace(/[\w'?]+/g, function() {
      return Math.random() > 0.5 ? "herp" : "derp";
    });
    
    $(comment).text(filtered);
  });
});