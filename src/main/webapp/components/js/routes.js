'use strict';

/**
 * Route configuration for the RDash module.
 */

angular.module('givenow').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
            	views: {
            	    "": {
              	      templateUrl: "templates/dashboard.html"
              	    },
            	    "sidebar@index" : {
            	      templateUrl: "templates/sidebar/dashboardSideBar.html"
            	    },
            	    "detail@index":{
            	    	templateUrl: 'templates/detail/dashboard.html'
            	    }
            	  }

            })
            .state('createsite', {
                url: '/createsite',
            	views: {
            	    "": {
              	      templateUrl: "templates/dashboard.html"
              	    },
            	    "sidebar@createsite" : {
            	      templateUrl: "templates/sidebar/siteSideBar.html"
            	    },
            	    "detail@createsite":{
            	    	templateUrl: 'templates/createsite.html'
            	    }
            	  }
            }).state('events', {
                url: '/events',
            	views: {
            	    "": {
              	      templateUrl: "templates/dashboard.html"
              	    },
            	    "sidebar@events" : {
            	      templateUrl: "templates/sidebar/siteSideBar.html"
            	    },
            	    "detail@events":{
            	    	templateUrl: 'templates/events.html'
            	    }
            	  }
            })
            .state('tables', {
                url: '/tables',
            	views: {
            	    "": {
              	      templateUrl: "templates/dashboard.html"
              	    },
            	    "sidebar@tables" : {
            	      templateUrl: "templates/sidebar/siteSideBar.html"
            	    },
            	    "detail@tables":{
            	    	templateUrl: 'templates/tables.html'
            	    }
            	  }
            }).state('profile', {
                url: '/profile',
            	views: {
            	    "": {
              	      templateUrl: 'templates/profile.html'
              	    },
            	    "sidebar@profile" : {
            	      templateUrl: "templates/sidebar/profile.html"
            	    },
            	    "detail@profile":{
            	    	templateUrl: 'templates/detail/account_setting.html'
            	    }
            	  }
            }).state('profile/account/setting', {
                url: '/profile/account/setting',
            	views: {
            	    "": {
              	      templateUrl: 'templates/profile.html'
              	    },
            	    "sidebar@profile/account/setting" : {
            	      templateUrl: "templates/sidebar/profile.html"
            	    },
            	    "detail@profile/account/setting":{
            	    	templateUrl: 'templates/detail/account_setting.html'
            	    }
            	  }
            }).state('profile/change/email', {
                url: '/profile/change/email',
            	views: {
            	    "": {
              	      templateUrl: 'templates/profile.html'
              	    },
            	    "sidebar@profile/change/email" : {
            	      templateUrl: "templates/sidebar/profile.html"
            	    },
            	    "detail@profile/change/email":{
            	    	templateUrl: 'templates/detail/profile.html'
            	    }
            	  }
            }).state('profile/change/password', {
                url: '/profile/change/password',
            	views: {
            	    "": {
              	      templateUrl: 'templates/profile.html'
              	    },
            	    "sidebar@profile/change/password" : {
            	      templateUrl: "templates/sidebar/profile.html"
            	    },
            	    "detail@profile/change/password":{
            	    	templateUrl: 'templates/detail/profile.html'
            	    }
            	  }
            }).state('profile/close/account', {
                url: '/profile/close/account',
            	views: {
            	    "": {
              	      templateUrl: 'templates/profile.html'
              	    },
            	    "sidebar@profile/close/account" : {
            	      templateUrl: "templates/sidebar/profile.html"
            	    },
            	    "detail@profile/close/account":{
            	    	templateUrl: 'templates/detail/profile.html'
            	    }
            	  }
            }).state('profile/billing/details', {
                url: '/profile/billing/details',
            	views: {
            	    "": {
              	      templateUrl: 'templates/profile.html'
              	    },
            	    "sidebar@profile/billing/details" : {
            	      templateUrl: "templates/sidebar/profile.html"
            	    },
            	    "detail@profile/billing/details":{
            	    	templateUrl: 'templates/detail/profile.html'
            	    }
            	  }
            /*}).state('setup/theme', {
                url: '/setup/theme',
            	views: {
            	    "": {
              	      templateUrl: "templates/siteThemes.html?p=category"
              	    },
            	    "sidebar@setup/theme" : {
            	      templateUrl: "templates/sidebar/themeSideBar.html"
            	    },
            	    "detail@setup/theme":{
            	    	templateUrl: 'templates/detail/sitetheme-list.html'
            	    }
            	  }*/
            }).state('setup/template', {
                url: '/setup/template',
            	views: {
            	    "": {
              	      templateUrl: "templates/setup.html?p=category"
              	    },
            	    "sidebar@setup/template" : {
            	      templateUrl: "templates/sidebar/siteSideBar.html"
            	    },
            	    "detail@setup/template":{
            	    	templateUrl: 'templates/detail/dashboard.html'
            	    }
            	  }
            }).state('setup/page', {
                url: '/setup/page',
            	views: {
            	    "": {
              	      templateUrl: "templates/setup.html?p=category"
              	    },
            	    "sidebar@setup/page" : {
            	      templateUrl: "templates/sidebar/siteSideBar.html"
            	    },
            	    "detail@setup/page":{
            	    	templateUrl: 'templates/detail/dashboard.html'
            	    }
            	  }
            }).state('setup/media', {
                url: '/setup/media',
            	views: {
            	    "": {
              	      templateUrl: "templates/medias.html?p=category"
              	    },
            	    "sidebar@setup/media" : {
            	      templateUrl: "templates/sidebar/mediaSideBar.html"
            	    },
            	    "detail@setup/media":{
            	    	templateUrl: 'templates/detail/media/media-list.html'
            	    }
            	  }
            }).state('setup/category', {
                url: '/setup/category',
            	views: {
            	    "": {
              	      templateUrl: "templates/setup.html?p=category"
              	    },
            	    "sidebar@setup/category" : {
            	      templateUrl: "templates/sidebar/siteSideBar.html"
            	    },
            	    "detail@setup/category":{
            	    	templateUrl: 'templates/detail/category.html'
            	    }
            	  }
            }).state('manage/dashboard', {
                url: '/manage/dashboard',
            	views: {
            	    "": {
              	      templateUrl: "templates/admin.html"
              	    },
            	    "sidebar@manage/dashboard" : {
            	      templateUrl: "templates/sidebar/admin.html"
            	    },
            	    "detail@manage/dashboard":{
            	    	templateUrl: 'templates/detail/dashboard.html'
            	    }
            	  }
            });
    }
]);