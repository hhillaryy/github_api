// var apiKey = require('./../.env').apiKey;

var apiKey = "d1762b6311f1ce21bbf63c4388c9b6579db68048";

$(document).ready(function() {
 // event.preventDefault();
$('#submit').click(function(){
  var user = $('#userName').val();
  $('#submit').empty();
  $.get("https://api.github.com/users/" + user + "?access_token=" + apiKey).then(function(response){
    console.log(response);
  $('#results').append("These are " + user + " repositories:" + response.repos_url);
}).fail(function(error){
  $('#results').text(error.responseJSON.message);
  });
  });
});
