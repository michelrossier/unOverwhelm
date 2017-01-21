$('.entry-content > h2').each(function(){
  var $set = $(this).nextUntil("h2");
  $set.wrapAll('<div class="content" />');
});

$('h2').click(function(){
  $(this).next().toggleClass("reveal");
});

var a = chrome.extension.getURL("css.css");
$('<link rel="stylesheet" type="text/css" href="' + a + '" >').appendTo("head");
