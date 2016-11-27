
angular.module('givenow.services').factory('SiteTheme',function($resource){
    return $resource('/api/v1/sitethemes/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
});


angular.module('givenow.controllers').controller('SiteThemeListController',function($scope,$state,popupService,$window,SiteTheme, $localStorage){
	
	var accountId=$localStorage.givenowuseraccount;
    $scope.sitethemes=SiteTheme.query({accountId:accountId});
    
    $scope.deleteSiteTheme=function(sitetheme){
        if(popupService.showPopup('Really delete this theme?')){
            sitetheme.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('SiteThemeViewController',function($scope,$stateParams,SiteTheme){
    $scope.sitetheme=SiteTheme.get({id:$stateParams.id});

}).controller('SiteThemeIdCtrl',function($scope,$stateParams){
	$scope.sitethemeId = $stateParams.id;

}).controller('SiteThemeCreateController',function($scope,$state,$stateParams,SiteTheme, $localStorage){

    $scope.sitetheme=new SiteTheme();
    $scope.sitetheme.created = new Date();
    $scope.sitetheme.userId = $localStorage.givenowcurrentuser;
    $scope.sitetheme.accountId = $localStorage.givenowuseraccount;
    $scope.addSiteTheme=function(){
        $scope.sitetheme.$save(function(){
            $state.go('manage/sitetheme');
        });
    }

}).controller('SiteThemeEditController',function($scope,$state,$stateParams,SiteTheme){

    $scope.updateSiteTheme=function(){
        $scope.sitetheme.$update(function(){
            $state.go('manage/sitetheme');
        });
    };

    $scope.loadSiteTheme=function(){
        $scope.sitetheme=SiteTheme.get({id:$stateParams.id});
    };

    $scope.loadSiteTheme();
    
}).controller('SiteThemeSettingCtrl',function($scope,$state,$stateParams,SiteTheme){

    $scope.updateSiteThemeSetting=function(){
        $scope.sitetheme.$update(function(){
            $state.go('manage/sitetheme');
        });
    };

    $scope.loadSiteThemeSetting=function(){
        $scope.sitetheme=SiteTheme.get({id:$stateParams.id});
    };

    $scope.loadSiteThemeSetting();
    
}).controller('SiteThemeLayoutCtrl',function($scope,$state,$stateParams,SiteTheme){

    $scope.updateSiteThemeLayout=function(){
        $scope.sitetheme.$update(function(){
            $state.go('manage/sitetheme');
        });
    };

    $scope.loadSiteThemeLayout=function(){
        $scope.sitetheme=SiteTheme.get({id:$stateParams.id});
    };

    $scope.loadSiteThemeLayout();
    
}).filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
}).controller('SiteThemeListCrtl',function($scope, $http, $localStorage){
	$scope.sitethemes = []; //declare an empty array
	var accountId=$localStorage.givenowuseraccount;
	$http.get("/api/v1/sitethemes?accountId="+accountId).success(function(response){ 
		$scope.sitethemes = response;  //ajax request to fetch data into $scope.data
	});
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
});
// routes
angular.module('givenow').config(function($stateProvider,$httpProvider){
    $stateProvider.state('manage/sitetheme', {
        url: '/manage/sitetheme',
    	views: {
    	    "": {
      	      templateUrl: "templates/siteThemes.html"
      	    },
    	    "sidebar@manage/sitetheme" : {
    	      templateUrl: "templates/sidebar/themeSideBar.html",
    	      controller:'SiteThemeIdCtrl'
    	    },
    	    "detail@manage/sitetheme":{
    	    	templateUrl: 'templates/detail/sitetheme-list.html',
    	        controller:'SiteThemeListCrtl'
    	    }
    	  }
    }).state('viewSiteTheme',{
       url:'/manage/sitetheme/:id/view',
   	   views: {
	    "": {
  	      templateUrl: "templates/siteThemes.html"
  	    },
	    "sidebar@viewSiteTheme" : {
	      templateUrl: "templates/sidebar/themeSideBar.html",
	      controller:'SiteThemeIdCtrl'
	    },
	    "detail@viewSiteTheme":{
	    	templateUrl: 'templates/detail/theme/sitetheme-view.html',	
	  	    controller:'SiteThemeViewController'	
	    }
	  }
    }).state('newSiteTheme',{
        url:'/manage/sitetheme/new',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/siteThemes.html"
    	  	    },
    		    "sidebar@newSiteTheme" : {
    		      templateUrl: "templates/sidebar/themeSideBar.html",
    		      controller:'SiteThemeIdCtrl'
    		    },
    		    "detail@newSiteTheme":{
    		    	templateUrl: 'templates/detail/theme/sitetheme-add.html',	
    		  	    controller:'SiteThemeCreateController'	
    		    }
    		  }
    }).state('editSiteTheme',{
        url:'/manage/sitetheme/:id/edit',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/siteThemes.html"
    	  	    },
    		    "sidebar@editSiteTheme" : {
    		      templateUrl: "templates/sidebar/themeSideBar.html",
    		      controller:'SiteThemeIdCtrl'
    		    },
    		    "detail@editSiteTheme":{
    		    	templateUrl: 'templates/detail/theme/sitetheme-edit.html',	
    		  	    controller:'SiteThemeEditController'	
    		    }
    		  }
    }).state('/manage/sitetheme/setting?:id',{
        url:'/manage/sitetheme/setting?:id',
 	   views: {
 		    "": {
 	  	      templateUrl: "templates/siteThemes.html"
 	  	    },
 		    "sidebar@/manage/sitetheme/setting?:id" : {
 		      templateUrl: "templates/sidebar/themeSideBar.html",
 		      controller:'SiteThemeIdCtrl'
 		    },
 		    "detail@/manage/sitetheme/setting?:id":{
 		    	templateUrl: 'templates/detail/theme/sitetheme-setting.html',	
 		  	    controller:'SiteThemeSettingCtrl'	
 		    }
 		  }
 }).state('/manage/sitetheme/layout?:id',{
     url:'/manage/sitetheme/layout?:id',
	   views: {
		    "": {
	  	      templateUrl: "templates/siteThemes.html"
	  	    },
		    "sidebar@/manage/sitetheme/layout?:id" : {
		      templateUrl: "templates/sidebar/themeSideBar.html",
		      controller:'SiteThemeIdCtrl'
		    },
		    "detail@/manage/sitetheme/layout?:id":{
		    	templateUrl: 'templates/detail/theme/sitetheme-layout.html',	
		  	    controller:'SiteThemeLayoutCtrl'	
		    }
		  }
});
});