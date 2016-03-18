
var apiKey = "d1762b6311f1ce21bbf63c4388c9b6579db68048";

exports.repoInfo = function(user) {
  $.get("https://api.github.com/users/" + user + "/repos?access_token=" + apiKey).then(function(response){
    console.log(response);
    $('#results').append("These are " + user + " repositories: ");

    response.users.forEach(function(info){
      $('#results').append("<li>" + "Repository: " + response.full_name + ", " + "Description: " + response.description + "</li>");
    });
}).fail(function(error){
  $('#results').text(error.responseJSON.message);
  });
};
