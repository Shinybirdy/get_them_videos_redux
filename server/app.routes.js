// console.log("hey from routes/videosRoutes.js");
var express = require('express');
var router = express.Router();
var request = require('request');
var path = require("path");

var token = "";
var email = "";
var videoArray = [];
var addNewVideoObjectToSend;

//authentication - User Sign In

router.post("/signIn", function (req, res) {
  request({
    method: 'POST',
    url: 'https://proofapi.herokuapp.com/sessions',
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json'
    },
    body: "{  \"email\": \"traceyzavadil@gmail.com\",  \"password\": \"patesiate,igneous,Eryops\"}"
    },
      function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);

      var cowboyResponse = JSON.parse(body);

        if (cowboyResponse.hasOwnProperty( 'errors')) {
          res.send(body);
        } else {
        token = cowboyResponse.data.attributes.auth_token;
        console.log(token);
        res.send(body);
        }
      });
});
// User Sign-out
// var request = require('request');
//
// request({
//   method: 'DELETE',
//   url: 'https://proofapi.herokuapp.com/sessions/eFuXWvwaHAFYxb7SbkwhrDu4',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Auth-Token': 'eFuXWvwaHAFYxb7SbkwhrDu4'
//   }}, function (error, response, body) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
// });

// Get a Video
// var request = require('request');
//
// request({
//   method: 'GET',
//   url: 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Auth-Token': 'eFuXWvwaHAFYxb7SbkwhrDu4'
//   }}, function (error, response, body) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
// });

// router.get('/allVideos', function (req, res) {
// request({
//   method: 'GET',
//   url: 'https://proofapi.herokuapp.com/videos?page&per_page',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Auth-Token': token
//   }}, function (error, response, body) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
//   res.send(body);
//   console.log(body);
// });
// });

// Update a video
// var request = require('request');
//
// request({
//   method: 'PATCH',
//   url: 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27',
// }, function (error, response, body) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
// });

// Delete a video
// var request = require('request');
//
// request({
//   method: 'DELETE',
//   url: 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Auth-Token': 'eFuXWvwaHAFYxb7SbkwhrDu4'
//   }}, function (error, response, body) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
// });

// VIDEO VIEWS
// Get a video's views
// var request = require('request');
//
// request({
//   method: 'GET',
//   url: 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27/views',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Auth-Token': 'eFuXWvwaHAFYxb7SbkwhrDu4'
//   }}, function (error, response, body) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
// });

// Create a Video Vote




// //inject directives and services.
// var app = angular.module('fileUpload', ['ngFileUpload']);
//
// app.controller('MyCtrl', ['$scope', 'Upload', function ($scope, Upload) {
//     // upload later on form submit or something similar
//     $scope.submit = function() {
//       if ($scope.form.file.$valid && $scope.file) {
//         $scope.upload($scope.file);
//       }
//     };

// upload video via NG_FILE_UPLOAD on file select or drop
//     $scope.upload = function (file) {
//         Upload.upload({
//             url: 'upload/url',
//             data: {file: file, 'username': $scope.username}
//         }).then(function (resp) {
//             console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
//         }, function (resp) {
//             console.log('Error status: ' + resp.status);
//         }, function (evt) {
//             var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
//             console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
//         });
//     };
//     // for multiple files:
//     $scope.uploadFiles = function (files) {
//       if (files && files.length) {
//         for (var i = 0; i < files.length; i++) {
//           Upload.upload({..., data: {file: files[i]}, ...})...;
//         }
//         // or send them all together for HTML5 browsers:
//         Upload.upload({..., data: {file: files}, ...})...;
//       }
//     }
// }]);
//
module.exports = router;
