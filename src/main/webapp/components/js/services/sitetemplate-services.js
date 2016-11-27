
angular.module('givenow.services').factory('SiteTemplate',function($resource){
    return $resource('/api/v1/sitetemplates/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
});


angular.module('givenow.controllers').controller('SiteTemplateListController',function($scope,$state,popupService,$window,SiteTemplate, $localStorage){
	
	var accountId=$localStorage.givenowuseraccount;
    $scope.siteTemplates=SiteTemplate.query({accountId:accountId});
    
    $scope.deleteSiteTemplate=function(siteTemplate){
        if(popupService.showPopup('Really delete this siteTemplate?')){
            siteTemplate.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('SiteTemplateViewController',function($scope,$stateParams,SiteTemplate, $sce){
    $scope.siteTemplate=SiteTemplate.get({id:$stateParams.id});
    /*$scope.siteTemplate.content = $sce.trustAsHtml($scope.siteTemplate.content);*/
    $scope.teste = '<p style=\"text-align: left;\">We need creation of <strong>7 animated banners</strong>.</p>\n\n<p style=\"text-align: left;\">We need to remake to dynamic form. We provide you open source data and technical specifications.</p>\n';  

}).controller('SiteTemplateIdCtrl',function($scope,$stateParams){
	$scope.siteTemplateId = $stateParams.id;

}).controller('SiteTemplateCreateController',function($scope,$state,$stateParams,SiteTemplate, $localStorage){

    $scope.siteTemplate=new SiteTemplate();
    $scope.siteTemplate.created = new Date();
    $scope.siteTemplate.userId = $localStorage.givenowcurrentuser;
   
    $scope.addSiteTemplate=function(){
    	$scope.siteTemplate.accountId = $localStorage.givenowuseraccount;
        console.log('content is::');
        console.log($scope.siteTemplate.content);
        $scope.siteTemplate.$save(function(){
            $state.go('manage/sitetemplate');
        });
    }

}).controller('SiteTemplateEditController',function($scope,$state,$stateParams,SiteTemplate){

    $scope.updateSiteTemplate=function(){
        $scope.siteTemplate.$update(function(){
            $state.go('manage/sitetemplate');
        });
    };

    $scope.loadSiteTemplate=function(){
        $scope.siteTemplate=SiteTemplate.get({id:$stateParams.id});
    };

    $scope.loadSiteTemplate();
    
}).filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
}).filter('renderHTMLCorrectly', function($sce)
{
	return function(stringToParse)
	{
		return $sce.trustAsHtml(stringToParse);
	}
}).directive('parseStyle', function($interpolate) {
    return function(scope, elem) {
        var exp = $interpolate(elem.html()),
            watchFunc = function () { return exp(scope); };

        scope.$watch(watchFunc, function (html) {
            elem.html(html);
        });
    };
}).controller('SiteTemplateListCrtl',function($scope, $http, $localStorage){
	$scope.siteTemplates = []; //declare an empty array
	var accountId=$localStorage.givenowuseraccount;
	$http.get("/api/v1/sitetemplates?accountId="+accountId).success(function(response){ 
		$scope.siteTemplates = response;  //ajax request to fetch data into $scope.data
	});
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
}).directive('ckEditor', [function () {
    return {
        require: '?ngModel',
        link: function ($scope, elm, attr, ngModel) {

            var ck = CKEDITOR.replace(elm[0]);

            ck.on('pasteState', function () {
                $scope.$apply(function () {
                    ngModel.$setViewValue(ck.getData());
                });
            });

            ngModel.$render = function (value) {
                ck.setData(ngModel.$modelValue);
            };
        }
    };
}]);
// routes
angular.module('givenow').config(function($stateProvider,$httpProvider){
    $stateProvider.state('manage/sitetemplate', {
        url: '/manage/sitetemplate',
    	views: {
    	    "": {
      	      templateUrl: "templates/sitetemplates.html"
      	    },
    	    "sidebar@manage/siteTemplate" : {
    	      templateUrl: "templates/sidebar/sitetemplate-sidebar.html",
    	      controller:'SiteTemplateIdCtrl'
    	    },
    	    "detail@manage/sitetemplate":{
    	    	templateUrl: 'templates/detail/sitetemplate/sitetemplate-list.html',
    	        controller:'SiteTemplateListController'
    	    }
    	  }
    })/*.state('viewSiteTemplate',{
       url:'/manage/sitetemplate/:id/view',
   	   views: {
	    "": {
  	      templateUrl: "templates/detail/sitetemplate/sitetemplate-home.html",
  	    },
	    "maincontent@viewSiteTemplate" : {
		      templateUrl: "templates/detail/sitetemplate/sitetemplate-view.html",
		      controller:'SiteTemplateViewController'
		    }
	  }
    })*/.state('newSiteTemplate',{
        url:'/manage/sitetemplate/new',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/sitetemplates.html"
    	  	    },
    		    "sidebar@newSiteTemplate" : {
    		      templateUrl: "templates/sidebar/sitetemplate-sidebar.html",
    		      controller:'SiteTemplateIdCtrl'
    		    },
    		    "detail@newSiteTemplate":{
    		    	templateUrl: 'templates/detail/sitetemplate/sitetemplate-add.html',	
    		  	    controller:'SiteTemplateCreateController'	
    		    }
    		  }
    }).state('editSiteTemplate',{
        url:'/manage/siteTemplate/:id/edit',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/sitetemplates.html"
    	  	    },
    		    "sidebar@editSiteTemplate" : {
    		      templateUrl: "templates/sidebar/sitetemplate-sidebar.html",
    		      controller:'SiteTemplateIdCtrl'
    		    },
    		    "detail@editSiteTemplate":{
    		    	templateUrl: 'templates/detail/sitetemplate/sitetemplate-edit.html',	
    		  	    controller:'SiteTemplateEditController'	
    		    }
    		  }
    });
});