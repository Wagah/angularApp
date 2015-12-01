'use strict';

describe('Controller: NewmoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('userloginApp'));

  var NewmoviesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewmoviesCtrl = $controller('NewmoviesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewmoviesCtrl.awesomeThings.length).toBe(3);
  });
});
