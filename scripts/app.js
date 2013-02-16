angular.module("alarmClock", []).
	config(["$routeProvider", function($routeProvider) {
		$routeProvider.otherwise({ templateUrl: "partials/alarm.html", controller: AlarmCtrl });
	}]);
