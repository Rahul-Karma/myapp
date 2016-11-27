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
	            	 sidebar: {
	                     templateUrl: "components/templates/sidebar/dashboardSideBar.html"
	                   },
                    body:{
                    	templateUrl: 'templates/dashboard.html'
                    }
                }
            })
            .state('createsite', {
                url: '/createsite',
                views: {
                    sidebar: {
                      templateUrl: "templates/sidebar/siteSideBar.html"
                    },
                    body:{
                    	templateUrl: 'templates/sites.html'
                    }
                  }
            })
            .state('sites', {
                url: '/sites',
                views: {
                    sidebar: {
                      templateUrl: "templates/sidebar/siteSideBar.html"
                    },
                    body:{
                    	templateUrl: 'templates/siteDashboard.html'
                    }
                  }
            })
            .state('tables', {
                url: '/tables',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/dashboardSideBar.html"
                       },
                    body:{
                    	templateUrl: 'templates/tables.html'
                    }
                }
            }).state('profile', {
                url: '/profile',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/profile.html"
                       },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('profile/account/setting', {
                url: '/profile/account/setting',
                views: {
               	 	sidebar: {
               	 	   templateUrl: "templates/sidebar/profile.html"
                   },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('profile/change/email', {
                url: '/profile/change/email',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/profile.html"
                       },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('profile/change/password', {
                url: '/profile/change/password',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/profile.html"
                       },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('profile/close/account', {
                url: '/profile/close/account',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/profile.html"
                       },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('profile/billing/details', {
                url: '/profile/billing/details',
                views: {
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('setup/theme', {
                url: '/setup/theme',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/profile.html"
                       },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('setup/template', {
                url: '/setup/template',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/profile.html"
                       },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('setup/page', {
                url: '/setup/page',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/profile.html"
                       },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('setup/media', {
                url: '/setup/media',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/profile.html"
                       },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('setup/category', {
                url: '/setup/category',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/profile.html"
                       },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('manage/user', {
                url: '/manage/user',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/profile.html"
                       },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            }).state('manage/dashboard', {
                url: '/manage/dashboard',
                views: {
                	 sidebar: {
                         templateUrl: "templates/sidebar/profile.html"
                       },
                    body:{
                    	templateUrl: 'templates/profile.html'
                    }
                }
            });
    }
]);