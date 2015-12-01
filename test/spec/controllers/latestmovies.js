'use strict';

describe('Controller: LatestmoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('myMovieAppApp'));

  var LatestmoviesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LatestmoviesCtrl = $controller('LatestmoviesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LatestmoviesCtrl.awesomeThings.length).toBe(3);
  });
});
