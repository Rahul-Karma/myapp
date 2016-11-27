'use strict';

var givenow = angular.module('givenow');

var translationsEN = {
	    TITLE: 'Hello',
	    FOO: 'This is a paragraph.',
	    BUTTON_LANG_EN: 'English',
	    BUTTON_LANG_PT: 'Portgeese',
	    BUTTON_LANG_ES: 'Spanish',
	    BUTTON_LANG_DE: 'German'
		};
		 
var translationsDE= {
	    TITLE: 'Hallo',
	    FOO: 'Dies ist ein Paragraph.',
	    BUTTON_LANG_EN: 'englisch',
	    BUTTON_LANG_PT: 'Portgeese',
	    BUTTON_LANG_ES: 'Spanish',
	    BUTTON_LANG_DE: 'deutsch'   
		};
var translationsES= {
	    TITLE: 'Hallo',
	    FOO: 'Dies ist ein Paragraph.',
	    BUTTON_LANG_EN: 'englisch',
	    BUTTON_LANG_PT: 'Portgeese',
	    BUTTON_LANG_ES: 'Spanish',
	    BUTTON_LANG_DE: 'deutsch'   
		};
var translationsPT= {
	    TITLE: 'Hallo',
	    FOO: 'Dies ist ein Paragraph.',
	    BUTTON_LANG_EN: 'englisch',
	    BUTTON_LANG_PT: 'Portgeese',
	    BUTTON_LANG_ES: 'Spanish',
	    BUTTON_LANG_DE: 'deutsch'   
		};
//givenow.controller('AlertsCtrl', ['$scope', AlertsCtrl]);
givenow.controller('LanguageController', ['$scope', '$translate', '$location','$localStorage','$sessionStorage','$http', LanguageController]);

function LanguageController($scope, $translate, $location,$localStorage, $sessionStorage,$http) {
    $scope.changeLanguage = function (lang) {
        $translate.use(lang);
        $location.search('lang', lang);
        window.location.href = $location.absUrl();
        window.location.reload();
    };
    // this should set the user account which user belongs too
    $scope.useraccount=function(){
    	$http.get("/api/v1/accounts/current/session/account").success(function(data, status, headers, config){ 
    		$scope.account = data;  //ajax request to fetch data into $scope.account
    		$localStorage.givenowuseraccount=data.id;
    
    	});
    }; 
    $scope.useraccount();
    
    // this should set the current user
    $scope.currentuser=function(){
    	$http.get("/api/v1/users/current/session/user").success(function(data, status, headers, config){ 
    		$scope.user = data;  //ajax request to fetch data into $scope.account
    		$localStorage.givenowcurrentuser=data.id;
    		//console.log($localStorage.givenowcurrentuser);
    
    	});
    }; 
    $scope.currentuser();
    
}

givenow.controller('Ctrl', ['$translate', '$scope', Ctrl]);

function Ctrl ($translate, $scope) {
	 
	  $scope.changeLanguage = function (langKey) {
	    $translate.use(langKey);
	  };
	};

