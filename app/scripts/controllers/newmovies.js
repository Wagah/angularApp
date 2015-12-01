'use strict';

/**
 * @ngdoc function
 * @name userloginApp.controller:NewmoviesCtrl
 * @description
 * # NewmoviesCtrl
 * Controller of the userloginApp
 */
angular.module('myMovieAppApp')
  .controller('NewmoviesCtrl', function ($scope,$http) {
var url = "http://127.0.0.1:8082/movies/";
	$http.get(url).success(function(response)
	{
		$scope.movies = response;
	});

});
