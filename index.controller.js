angular.module('makmacademy')
	.controller('indexController', function($scope, COURSES, BUILT_ON) {
		$scope.courses = [];
		var padLeft = function(str, pad, len) {
	    str = str + '';
	    while (str.length < len) {
	        str = pad + str;
	    }
	    return str;
		};

		var formatDate = function(date) {
			return '' + date.getHours() + ':' +
						 padLeft(date.getMinutes(), '0', 2) + ':' +
						 padLeft(date.getSeconds(), '0', 2) + '   ' +
						 (date.getDay() + 1) + '/' + (date.getMonth() + 1) + '/' +
						 (date.getFullYear() + '').substr(2, 2);
		};

		$scope.generatedOn = formatDate(new Date(BUILT_ON.date));
		Object.keys(COURSES)
			.forEach(function (course) {
				$scope.courses.push({
					name: course,
					lessons: COURSES[course]
				});
			})
	});