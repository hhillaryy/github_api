(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
