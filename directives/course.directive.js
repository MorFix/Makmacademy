angular.module('makmacademy')
	.directive('mkCourse', function() {
		return {
			restrict: 'E',
			template: '<md-button mk-background="primary-700" ng-click="toggle()" ng-class="{toggled: toggled}"\
														layout-align="start center" layout="row" flex>\
					<i class="mdi mdi-chevron-right"></i>\
					<span>{{::course.name}}</span>\
			</md-button>\
			<md-list ng-show="toggled" class="lessons">\
				<md-list-item ng-repeat="lesson in course.lessons | orderBy:\'name\'" class="item" \
				              ui-sref="{{course.name + \'-\' + lesson.name}}">\
					{{::getName(lesson)}}\
				</md-list-item>\
			</md-list>',
			scope: {
				course: '='
			},
			link: function ($scope, elem, attrs, ctrls, $transclude) {
				$scope.toggle = function () {
					$scope.toggled = !$scope.toggled;
				};
				$scope.getName = function (lesson) {
					var arr = lesson.url.split("/");
					return arr[arr.length - 1].split('.')[0];
				};
			}
		};
	});