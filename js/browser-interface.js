// var apiKey = require('./../.env').apiKey;

var User = require('../js/back-end.js').User;
var apiKey = "d1762b6311f1ce21bbf63c4388c9b6579db68048";

$(document).ready(function() {
 // event.preventDefault();
  $('#submit').click(function(){
    $('#results').empty();
    var user = $('#userName').val();
      $.get("https://api.github.com/users/" + user + "/repos?access_token=" + apiKey).then(function(response){
        console.log(response);
        var users = [];
        $('#results').append("<h3>These are " + user + " 's repositories: </h3>");

        response.forEach(function(user){
          users.push(new User(user.full_name, user.description));
          console.log(user);
        });

        users.forEach(function(userInfo){
        $('#results').append("<li>" + "<b>Repository Name:</b> " + userInfo.repoName + ", " + "<b>Description:</b> " + userInfo.repoDescription + "</li>");
        });
      }).fail(function(error){
      $('#results').text(error.responseJSON.message);
      });

      });
  });
