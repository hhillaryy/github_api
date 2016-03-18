// var apiKey = require('./../.env').apiKey;
var repoInfo = require('./../js/back-end.js').repoInfo;
// var apiKey = "d1762b6311f1ce21bbf63c4388c9b6579db68048";

$(document).ready(function() {
 // event.preventDefault();
$('#submit').click(function(){
  $('#results').empty();
  var user = $('#userName').val();
  repoInfo(user);
  });
});
