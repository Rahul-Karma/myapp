
angular.module('givenow.services').factory('PageTemplate',function($resource){
    return $resource('/api/v1/pagetemplates/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
});


angular.module('givenow.controllers').controller('PageTemplateListController',function($scope,$state,popupService,$window,PageTemplate, $localStorage){
	
	var accountId=$localStorage.givenowuseraccount;
    $scope.pageTemplates=PageTemplate.query({accountId:accountId});
    
    $scope.deletePageTemplate=function(pageTemplate){
        if(popupService.showPopup('Really delete this pageTemplate?')){
            pageTemplate.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('PageTemplateViewController',function($scope,$stateParams,PageTemplate, $sce){
    $scope.pageTemplate=PageTemplate.get({id:$stateParams.id});
    /*$scope.pageTemplate.content = $sce.trustAsHtml($scope.pageTemplate.content);*/
    $scope.teste = '<p style=\"text-align: left;\">We need creation of <strong>7 animated banners</strong>.</p>\n\n<p style=\"text-align: left;\">We need to remake to dynamic form. We provide you open source data and technical specifications.</p>\n';  

}).controller('PageTemplateIdCtrl',function($scope,$stateParams){
	$scope.pageTemplateId = $stateParams.id;

}).controller('PageTemplateCreateController',function($scope,$state,$stateParams,PageTemplate, $localStorage){

    $scope.pageTemplate=new PageTemplate();
    $scope.pageTemplate.created = new Date();
    $scope.pageTemplate.userId = $localStorage.givenowcurrentuser;
   
    $scope.addPageTemplate=function(){
    	$scope.pageTemplate.accountId = $localStorage.givenowuseraccount;
        console.log('content is::');
        console.log($scope.pageTemplate.content);
        $scope.pageTemplate.$save(function(){
            $state.go('manage/pagetemplate');
        });
    }

}).controller('PageTemplateEditController',function($scope,$state,$stateParams,PageTemplate){

    $scope.updatePageTemplate=function(){
        $scope.pageTemplate.$update(function(){
            $state.go('manage/pagetemplate');
        });
    };

    $scope.loadPageTemplate=function(){
        $scope.pageTemplate=PageTemplate.get({id:$stateParams.id});
    };

    $scope.loadPageTemplate();
    
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
}).controller('PageTemplateListCrtl',function($scope, $http, $localStorage){
	$scope.pageTemplates = []; //declare an empty array
	var accountId=$localStorage.givenowuseraccount;
	$http.get("/api/v1/pagetemplates?accountId="+accountId).success(function(response){ 
		$scope.pageTemplates = response;  //ajax request to fetch data into $scope.data
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
    $stateProvider.state('manage/pagetemplate', {
        url: '/manage/pagetemplate',
    	views: {
    	    "": {
      	      templateUrl: "templates/pagetemplates.html"
      	    },
    	    "sidebar@manage/pageTemplate" : {
    	      templateUrl: "templates/sidebar/pagetemplate-sidebar.html",
    	      controller:'PageTemplateIdCtrl'
    	    },
    	    "detail@manage/pagetemplate":{
    	    	templateUrl: 'templates/detail/pagetemplate/pagetemplate-list.html',
    	        controller:'PageTemplateListController'
    	    }
    	  }
    }).state('viewPageTemplate',{
       url:'/manage/pagetemplate/:id/view',
   	   views: {
	    "": {
  	      templateUrl: "templates/detail/pagetemplate/pagetemplate-home.html",
  	    },
	    "maincontent@viewPageTemplate" : {
		      templateUrl: "templates/detail/pagetemplate/pagetemplate-view.html",
		      controller:'PageTemplateViewController'
		    }
	  }
    }).state('newPageTemplate',{
        url:'/manage/pagetemplate/new',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/pagetemplates.html"
    	  	    },
    		    "sidebar@newPageTemplate" : {
    		      templateUrl: "templates/sidebar/pagetemplate-sidebar.html",
    		      controller:'PageTemplateIdCtrl'
    		    },
    		    "detail@newPageTemplate":{
    		    	templateUrl: 'templates/detail/pagetemplate/pagetemplate-add.html',	
    		  	    controller:'PageTemplateCreateController'	
    		    }
    		  }
    }).state('editPageTemplate',{
        url:'/manage/pageTemplate/:id/edit',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/pagetemplates.html"
    	  	    },
    		    "sidebar@editPageTemplate" : {
    		      templateUrl: "templates/sidebar/pagetemplate-sidebar.html",
    		      controller:'PageTemplateIdCtrl'
    		    },
    		    "detail@editPageTemplate":{
    		    	templateUrl: 'templates/detail/pagetemplate/pagetemplate-edit.html',	
    		  	    controller:'PageTemplateEditController'	
    		    }
    		  }
    });
});