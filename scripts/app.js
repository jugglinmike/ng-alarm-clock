angular.module("alarmClock", [])
	.factory("clock", function($timeout) {
		var service = {};
		service._handlers = {
			second: [],
			minute: []
		};
		service.on = function(time, handler) {
			var handlers = service._handlers[time];
			if (!handlers || ~handlers.indexOf(handler)) {
				return;
			}
			handlers.push(handler);
		};
		service.off = function(time, handler) {
			var handlers = service._handlers[time];
			var idx;

			if (!handlers) {
				return;
			}

			idx = handlers.indexOf(handler);

			if (idx === -1) {
				return;
			}
			handlers.splice(idx, i);
		};

		service.refreshTime = function() {
			service.time = new Date();
		};
		function trigger(time) {
			var handlers = service._handlers[time];
			var idx, len;

			for (idx = 0, len = handlers.length; idx < len; ++idx) {
				handlers[idx]();
			}
		}

		function tick() {
			var now, timeToLastMinute, closestMinute;
			service.refreshTime();
			now = service.time;
			timeToLastMinute = now % 60000;

			trigger("second");

			if (timeToLastMinute < 1001) {
				closestMinute = now - timeToLastMinute;
				trigger("minute");
				console.log("Minute!", closestMinute);
			}
			$timeout(tick, 1000);
		}
		tick();
		return service;
	})
	.config(["$routeProvider", function($routeProvider) {
		$routeProvider.otherwise({ templateUrl: "partials/alarm.html", controller: AlarmCtrl });
	}]);
