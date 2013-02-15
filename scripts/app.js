function Clock($scope, $timeout) {
	$scope.time = {};

	$scope.formatTimePart = function(value) {
		var valueStr = value.toString();
		if (value < 10) {
			valueStr = "0" + valueStr;
		}
		return valueStr;
	};

	$scope.resetTime = function() {
		var now = new Date();
		$scope.time = {
			hour: now.getHours(),
			minute: now.getMinutes(),
			second: now.getSeconds()
		};
		angular.forEach($scope.time, function(value, attr) {
			$scope.time[attr] = $scope.formatTimePart(value);
		});
	};

	var update = function() {
		$scope.resetTime();
		$timeout(update, 1000);
	};

	update();
}
