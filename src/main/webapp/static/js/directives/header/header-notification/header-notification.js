'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('headerNotification',function(){
		return {
        templateUrl:'static/js/directives/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
    	}
	});


