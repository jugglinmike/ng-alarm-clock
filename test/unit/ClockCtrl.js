"use strict";

describe("ClockCtrl", function() {
	var scope, ctrl;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller(ClockCtrl, { $scope: scope });
	}));

	it("should create a 'time' model containing a Date", function() {
		expect(angular.isDate(scope.time)).toBe(true);
	});

});
