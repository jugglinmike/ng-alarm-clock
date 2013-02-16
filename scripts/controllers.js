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

function AlarmCtrl($scope) {
	var newAlarm = $scope.newAlarm = {};
	var alarms = $scope.alarms = [
		{
			title: "Wake up",
			time: new Date(1970, 1, 1, 6, 0, 1),
			repeat: 3
		},
		{
			title: "Other thing",
			time: new Date(1970, 1, 1, 6, 30, 34),
			schedule: ["monday", "wednesday"]
		},
		{
			title: "Pay Rent",
			time: new Date(1970, 1, 1, 17, 15, 20),
			schedule: [25, 26, 27, 28]
		}
	];

	$scope.remove = function(alarm) {
		alarms.splice(alarms.indexOf(alarm), 1);
	};
	$scope.create = function() {
		var parts = newAlarm.time.split(":");
		alarms.push({
			title: newAlarm.title,
			time: new Date(1970, 1, 1, parts[0], parts[1])
		});
		delete newAlarm.title;
		delete newAlarm.time;
	};
}
