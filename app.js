'use strict';

angular.module('makmacademy',['ngMaterial', 'ui.router'])
	.config(function($stateProvider, $mdThemingProvider, COURSES) {
		Object.keys(COURSES)
			.forEach(function (course) {
				COURSES[course]
					.forEach(function (lesson) {
						$stateProvider.state(course + '-' + lesson.name, {
							templateUrl: lesson.outputPath,
							url: lesson.url
						});
					});
			});
			$mdThemingProvider.theme('default')
				.primaryPalette('blue')
				.accentPalette('amber')
				.dark();
	});