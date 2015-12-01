'use strict';

angular.module('myMovieAppApp')
  .controller('OurblogsCtrl', function ($scope, $http) {
    var url = "http://jsonplaceholder.typicode.com/posts/1/comments";
   	$http.get(url).success(function(response){
   		$scope.blogs = response;
   	})
   		.error(function(err){
   			console.log("Unbeliveable" + err)
   		});
  });
