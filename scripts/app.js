function ClockCtrl($scope, $timeout) {

	$scope.resetTime = function() {
		$scope.time = new Date();
	};

	var update = function() {
		$scope.resetTime();
		$timeout(update, 1000);
	};

	update();
}
