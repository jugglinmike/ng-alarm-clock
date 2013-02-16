"use strict";

describe("ClockCtrl", function() {
	var scope, ctrl;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller(ClockCtrl, { $scope: scope });
	}));

	it("should create a 'time' model", function() {
		expect(scope.time).not.toBeUndefined();
	});

	it("should update the hour, minute, and second of the 'time' model", function() {
		scope.resetTime();
		expect(typeof scope.time.hour).toEqual("string");
		expect(typeof scope.time.minute).toEqual("string");
		expect(typeof scope.time.second).toEqual("string");
	});
});
