
// controller popupService // is coming from user-services
angular.module('myApp.controllers').controller('SiteController',function($scope,$state,$window,Site, $localStorage){
	
	var account = $localStorage.givenowuseraccount;
    $scope.sites=Site.query({accountId : account});

    $scope.deleteSite=function(site){
        if(true){
            site.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('SiteViewController',function($scope,$stateParams,Site, $localStorage){
	if($stateParams.id > 0)
		$scope.site=Site.get({id:$stateParams.id});
	else
		$scope.site=Site.get({id:$localStorage.currentsite});
    //$localStorage.currentsite=$stateParams.id;

}).controller('SiteCreateController',function($scope,$state,$stateParams,Site,$localStorage, $http){

    $scope.site=new Site();
    $scope.site.accountId=$localStorage.givenowuseraccount;
    $scope.site.created = new Date();
    $scope.addSite=function(){
    	
    	$http.get("/api/v1/sitetemplates/"+$scope.site.siteTemplateId).success(function(response){ 
    		console.log(response.content);
    		$scope.site.content = response.content; 
    		$scope.site.stylesheet = response.stylesheet; 
    		$scope.site.header = response.header; 
    		$scope.site.footer = response.footer; 
    		//ajax request to fetch data into $scope.data
    		
    		 console.log('content'+$scope.site.content);
    	        $scope.site.$save(function(){
    	            $state.go('manage/site');
    	        });
    		
    	});

    }

}).controller('SiteEditController',function($scope,$state,$stateParams,Site,$localStorage){

    $scope.updateSite=function(){
        $scope.site.$update(function(){
            $state.go('manage/site');
        });
    };

    $scope.loadSite=function(){
        $scope.site=Site.get({id:$stateParams.id});
        console.log($scope.site);
        $localStorage.currentsite=$stateParams.id;
    };

    $scope.loadSite();
    
}).controller('SiteSettingController',function($scope,$state,$stateParams,Site){

    $scope.updateSiteSetting=function(){
        $scope.site.$update(function(){
            $state.go('manage/site');
        });
    };

    $scope.loadSiteSetting=function(){
        $scope.site=Site.get({id:$stateParams.id});
      //  console.log($scope.site);
    };

    $scope.loadSiteSetting();
    
}).controller('SiteReportController',function($scope,$state,$stateParams,Site){

    $scope.loadSiteReport=function(){
        $scope.site=Site.get({id:$stateParams.id});
       // console.log($scope.site);
    };

    $scope.loadSiteReport();
    
}).filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
}).controller('SiteListCrtl',function($scope, $http, $localStorage){
	$scope.sites = []; //declare an empty array
	$http.get("/api/v1/sites/").success(function(response){ 
		$scope.sites = response;  //ajax request to fetch data into $scope.data
	});
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
}).controller('SitePageListController',function($scope,$state,$stateParams, Site, $localStorage,popupService,Page){
	
	var account = $localStorage.givenowuseraccount;
	$scope.loadSitePages=function(){
        $scope.site=Site.get({id:$stateParams.id});
        console.log($scope.site);
    };

    $scope.loadSitePages();
    
    $scope.deleteSitePage=function(page){
        if(popupService.showPopup('Really delete this?')){
            page.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('SitePageCreateController',function($scope,$state,$stateParams,Page,Site,$localStorage, $http){
	
    $scope.page=new Page();
    $scope.page.siteId=$localStorage.currentsite;
    $scope.page.created = new Date();
    $scope.addSitePage=function(){
    	$http.get("/api/v1/pagetemplates/"+$scope.page.pageTemplateId).success(function(response){ 
    		console.log(response.content);
    		$scope.page.pageTemplateHtml = response.content; 
    		$scope.page.pageTemplateStyle = response.stylesheet; 
    		//ajax request to fetch data into $scope.data
    		
    		 console.log('content'+$scope.page.pageTemplateHtml);
    	        $scope.page.$save(function(){
    	            $state.go('manage/site');
    	        });
    		
    	});
    	
    }

}).controller('SitePageEditController',function($scope,$state,$stateParams,Site,$localStorage,Page,$window){

     $scope.editSitePage=function(){
        $scope.page.$update(function(){
            $state.go('manage/site');
        });
    };

    $scope.loadSitePage=function(){
    	$scope.site=Site.get({id:$localStorage.currentsite});
    	$scope.page=Page.findPage({id:$stateParams.id,siteid:$localStorage.currentsite});
    	console.log($scope.page);
    };

    $scope.loadSitePage();
    
}).controller('SitePageViewController',function($scope,$stateParams,Page, Site, $sce, $localStorage){
	$scope.page=Page.findPage({id:$stateParams.id,siteid:$localStorage.currentsite});
    /*$scope.pageTemplate.content = $sce.trustAsHtml($scope.pageTemplate.content);*/
    $scope.teste = '<p style=\"text-align: left;\">We need creation of <strong>7 animated banners</strong>.</p>\n\n<p style=\"text-align: left;\">We need to remake to dynamic form. We provide you open source data and technical specifications.</p>\n';  

}).directive('dynamic', function ($compile) {
	  return {
		    restrict: 'A',
		    replace: true,
		    link: function (scope, ele, attrs) {
		      scope.$watch(attrs.dynamic, function(html) {
		        ele.html(html);
		        $compile(ele.contents())(scope);
		      });
		    }
		  };
		});
// routes
angular.module('givenow').config(function($stateProvider,$httpProvider){
    $stateProvider.state('manage/site', {
        url: '/manage/site',
    	views: {
    	    "": {
      	      templateUrl: "templates/sites.html"
      	    },
    	    "sidebar@manage/site" : {
    	      templateUrl: "templates/sidebar/siteSideBar.html"
    	    },
    	    "detail@manage/site":{
    	    	templateUrl: 'templates/detail/site-list.html',
    	        controller:'SiteListController'
    	    }
    	  }
    }).state('newSite',{
        url:'/manage/site/new',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/sites.html"
    	  	    },
    		    "sidebar@newSite" : {
    		      templateUrl: "templates/sidebar/siteSideBar.html"
    		    },
    		    "detail@newSite":{
    		    	templateUrl: 'templates/detail/site/site-add.html',	
    		  	    controller:'SiteCreateController'	
    		    }
    		  }
    }).state('editSite',{
        url:'/manage/site/:id/edit',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/sites.html"
    	  	    },
    		    "sidebar@editSite" : {
    		      templateUrl: "templates/sidebar/site.html"
    		    },
    		    "detail@editSite":{
    		    	templateUrl: 'templates/detail/site/site-edit.html',	
    		  	    controller:'SiteEditController'	
    		    }
    		  }
    }).state('editSitePage',{
        url:'/manage/site/page/:id/edit',
 	   views: {
 		    "": {
 	  	      templateUrl: "templates/sites.html"
 	  	    },
 		    "sidebar@editSitePage" : {
 		      templateUrl: "templates/sidebar/site.html"
 		    },
 		    "detail@editSitePage":{
 		    	templateUrl: 'templates/detail/site/sitepage-edit.html',	
 		  	    controller:'SitePageEditController'	
 		    }
 		  }
    }).state('viewSitePage',{
        url:'/manage/site/page/:id/view',
    	   views: {
 	    "": {
   	      templateUrl: "templates/detail/pagetemplate/pagetemplate-home.html",
   	    },
 	    "maincontent@viewSitePage" : {
 		      templateUrl: "templates/detail/site/sitepage-view.html",
 		      controller:'SitePageViewController'
 		    }
 	  }
     }).state('manageSiteReport',{
        url:'/manage/site/:id/report',
 	   views: {
 		    "": {
 	  	      templateUrl: "templates/sites.html"
 	  	    },
 		    "sidebar@manageSiteReport" : {
 		      templateUrl: "templates/sidebar/site.html"
 		    },
 		    "detail@manageSiteReport":{
 		    	templateUrl: 'templates/detail/site/sitereport.html',	
 		  	    controller:'SiteReportController'	
 		    }
 		  }
 }).state('editSiteSetting',{
     url:'/manage/site/:id/settings',
	   views: {
		    "": {
	  	      templateUrl: "templates/sites.html"
	  	    },
		    "sidebar@editSiteSetting" : {
		      templateUrl: "templates/sidebar/site.html"
		    },
		    "detail@editSiteSetting":{
		    	templateUrl: 'templates/detail/site/sitesetting.html',	
		  	    controller:'SiteSettingController'	
		    }
		  }
}).state('manageSitePages',{
    url:'/manage/site/:id/pages',
	   views: {
		    "": {
	  	      templateUrl: "templates/sites.html"
	  	    },
		    "sidebar@manageSitePages" : {
		      templateUrl: "templates/sidebar/site.html"
		    },
		    "detail@manageSitePages":{
		    	templateUrl: 'templates/detail/site/sitepage-list.html',	
		  	    controller:'SitePageListController'	
		    }
		  }
}).state('newSitePage',{
    url:'/manage/site/:id/pages/new',
	   views: {
		    "": {
	  	      templateUrl: "templates/sites.html"
	  	    },
		    "sidebar@newSitePage" : {
		      templateUrl: "templates/sidebar/site.html"
		    },
		    "detail@newSitePage":{
		    	templateUrl: 'templates/detail/site/sitepage-add.html',	
		  	    controller:'SitePageCreateController'	
		    }
		  }
}).state('viewSite',{
    url:'/site/:id/view',
	   views: {
	    "": {
	    	templateUrl: "templates/detail/site/site-home.html",
	    },
	    "maincontent@viewSite" : {
		      templateUrl: "templates/detail/site/site-view.html",
		      controller:'SiteViewController'
		    }
	  }
}).state('sitePageNav',{
url:'/site/page/:id/view',
   views: {
	   "": {
   	      templateUrl: "templates/detail/site/site-home.html",
   	    },
 	    "maincontent@sitePageNav" : {
 		      templateUrl: "templates/detail/site/sitepage-view.html",
 		      controller:'SitePageViewController'
 		    }
 	  }
});
});
