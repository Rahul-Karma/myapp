/**
 * New node file
 */
// declare the main module so we would be using this all over place
(function () {
    'use strict';
    angular.module('givenow', ['ui.bootstrap', 'ui.router', 'ngCookies','pascalprecht.translate','ngResource','givenow.controllers','givenow.services','angularUtils.directives.dirPagination','ngStorage', 'ngSanitize']);
   
})();