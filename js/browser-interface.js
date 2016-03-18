var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
 // event.preventDefault();
$('#submit').click(function(){
  var user =
  // $('#bikeLoc').val('');
  // $('#bikeColor').val('');
    $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
      console.log(response.public_repos);
    $('#results').append("<h3>The user " + user + " 's repositories: b</h3>");

    response.users.forEach(function(user){
      users.push(new User(user.public_repos, user.description,
        // need to find these json file name things somewhere for github
    });

    // bikes.forEach(function(bike) {
    //   $('#results').append("<li>" + "Manufacturer: " + bikeToDisplay.manufacturer + ", " + "model: " + bikeToDisplay.model + ", " + bikeToDisplay.bikeLocation + ", " + "serial number: " + bikeToDisplay.serial + "</li>")
    // });

  });
  });
});
