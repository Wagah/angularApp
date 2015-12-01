'use strict';

describe('Controller: OurblogsCtrl', function () {

  // load the controller's module
  beforeEach(module('userloginApp'));

  var OurblogsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OurblogsCtrl = $controller('OurblogsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OurblogsCtrl.awesomeThings.length).toBe(3);
  });
});
