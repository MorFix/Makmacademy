angular.module('makmacademy')
	.directive('mkResource', function() {
		return{
			restrict: 'E',
			template: '<md-button ng-href="{{href}}" \
														target="_blank" \
														class="md-accent md-icon-button md-raised"\
														aria-label="download" mk-foreground="background-100">\
										<i class="mdi mdi-download "></i>\
										<md-tooltip> Download Required Files</md-tooltip>\
							   </md-button>',
			scope: {
				href: '@'
			}
		}
	});