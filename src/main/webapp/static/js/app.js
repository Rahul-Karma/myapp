'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */

/*angular.module('formApp', []);

var App = angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'formApp', 'ngResource', 'myapp.controllers','myapp.services'
  ]);
 App.config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'static/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'static/js/directives/header/header.js',
                    'static/js/directives/header/header-notification/header-notification.js',
                    'static/js/directives/sidebar/sidebar.js',
                    'static/js/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["static/bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "static/bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['static/bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['static/bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['static/bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['static/bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['static/bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'static/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'static/js/controller/main.js',
              'static/js/directives/timeline/timeline.js',
              'static/js/directives/notifications/notifications.js',
              'static/js/directives/chat/chat.js',
              'static/js/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'static/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'static/pages/blank.html',
        url:'/blank'
    })
      .state('login',{
        templateUrl:'static/pages/login.html',
        url:'/login'
    })
      .state('dashboard.chart',{
        templateUrl:'static/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'static/bower_components/angular-chart.js/dist/angular-chart.min.js',
                'static/bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['static/js/controller/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'static/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'static/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'static/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'static/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'static/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'static/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'static/ui-elements/grid.html',
       url:'/grid'
   })
         .state('dashboard.site',{
       templateUrl:'static/ui-elements/siteform.html',
       url:'/site'
   })
  }]);

    
*/

var App = angular.module('helloApp',['ngResource']);