(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){



exports.User = function(repoName, description) {
  this.repoName = repoName;
  this.description = description;

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

},{}],2:[function(require,module,exports){
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
        $('#results').append("These are " + user + " repositories: ");

        response.users.forEach(function(info){
          users.push(new User(info.response.full_name, info.response.description));


        users.forEach(function(userInfo){
        $('#results').append("<li>" + "Repository: " + userInfo.full_name + ", " + "Description: " + userInfo.description + "</li>");
        });
      }).fail(function(error){
      $('#results').text(error.responseJSON.message);
      });

      });
  });
});

},{"../js/back-end.js":1}]},{},[2]);
