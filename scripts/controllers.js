function ClockCtrl($scope, $timeout, clock) {

	// Initialize the current time immediately
	$scope.time = clock.time;

	// Keep the time in sync
	clock.on("second", function() {
		$scope.time = clock.time;
	});
}

function AlarmCtrl($scope, clock) {
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

	$scope.isActive = function(now, alarmTime) {
		return alarmTime.getHours() === now.getHours() &&
			alarmTime.getMinutes() === now.getMinutes();
	};

	$scope.activate = function(alarm) {
		if (!alarm.action) {
			window.alert("!!!", alarm.title, "!!!");
		}
	};

	clock.on("minute", function() {
		angular.forEach(alarms, function(alarm) {
			if ($scope.isActive(clock.time, alarm.time)) {
				$scope.activate(alarm);
			}
		});
	});

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
