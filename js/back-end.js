


exports.User = function(repoName, repoDescription) {
  this.repoName = repoName;
  this.repoDescription = repoDescription;
};

// exports.repoInfo = function(user) {
//   $.get("https://api.github.com/users/" + user + "/repos?access_token=" + apiKey).then(function(response){
//     console.log(response);
//     var users = [];
//     $('#results').append("These are " + user + " repositories: ")};
//
//     response.users.forEach(function(info){
//       users.push(new User(info.response.full_name, info.response.description));
//
//
//     users.forEach(function(userInfo){
//     $('#results').append("<li>" + "Repository: " + userInfo.full_name + ", " + "Description: " + userInfo.description + "</li>");
//     });
// }).fail(function(error){
//   $('#results').text(error.responseJSON.message);
//   });
//
