
angular.module('givenow.services').factory('MediaDocument',function($resource){
    return $resource('/api/v1/medias/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
});


angular.module('givenow.controllers').controller('MediaListController',function($scope,$state,popupService,$window,MediaDocument, $localStorage){

	var account=$localStorage.givenowuseraccount;
    $scope.medias=MediaDocument.query({accountId:account});

    $scope.deleteMedia=function(mediadocument){
        if(popupService.showPopup('Really delete this media?')){
            mediadocument.$delete(function(){
                $window.location.href='';
            });
        }
    }
    
    $scope.currentaccount = account;

}).controller('MediaViewController',function($scope,$stateParams,MediaDocument){
    $scope.mediadocument=MediaDocument.get({id:$stateParams.id});

}).controller('MediaCreateController',function($scope,$state,$stateParams,MediaDocument){

    $scope.mediadocument=new MediaDocument();

    $scope.addMedia=function(){
        $scope.mediadocument.$save(function(){
            //var file = $scope.file;
            
           // console.log('file is ');
         //  console.dir(file);
        	console.log('Entity Created!');
            $state.go('manage/media');
        });
    	//console.log('Entity Created!');
       // $state.go('manage/media');
    }

}).directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
           var model = $parse(attrs.fileModel);
           var modelSetter = model.assign;
           
           element.bind('change', function(){
              scope.$apply(function(){
                 modelSetter(scope, element[0].files[0]);
              });
           });
        }
     };
  }]).controller('MediaEditController',function($scope,$state,$stateParams,MediaDocument){

    $scope.updateMedia=function(){
        $scope.mediadocument.$update(function(){
        	console.log('Entity Updated!');
            $state.go('manage/media');
        });
    };
    
    $scope.setFile = function(element) {
  	  $scope.currentFile = element.files[0];
  	   var reader = new FileReader();

  	  reader.onload = function(event) {
  	    $scope.image_source = event.target.result
  	    $scope.flag = true;
  	    $scope.$apply()

  	  }
  	  // when the file is read it triggers the onload event above.
  	  reader.readAsDataURL(element.files[0]);
  	}

    $scope.loadMediaDocument=function(){
        $scope.mediadocument=MediaDocument.get({id:$stateParams.id});
        console.log($scope.mediadocument);
    };

    $scope.loadMediaDocument();
}).service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }
}]).filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
}).controller('MediaListCrtl',function($scope, $http){
	$scope.medias = []; //declare an empty array
	$http.get("/api/v1/medias/").success(function(response){ 
		$scope.medias = response;  //ajax request to fetch data into $scope.data
	});
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
}).controller('MediaUploadController',function($scope,$state,$stateParams, $http, MediaDocument, $localStorage){
	$scope.mediadocument=new MediaDocument();
	$scope.medias = []; //declare an empty array
	//console.dir($stateParams.id);
	$scope.mediadocument.created = new Date();
	$scope.mediadocument.accountId = $localStorage.givenowuseraccount;
	$scope.mediadocument.userId = $localStorage.givenowcurrentuser;
    $scope.addMedia=function(){
    	var file = $scope.mediadocument.file;
      //console.dir(file);
       var uploadUrl = "/api/v1/medias/upload/";
       var fd = new FormData();
       fd.append('file', file);
       if($stateParams.id)
       fd.append('mediaid', $stateParams.id);
       fd.append('media', JSON.stringify($scope.mediadocument));
       $http.post(uploadUrl, fd, {
           transformRequest: angular.identity,
           headers: {'Content-Type': undefined}
       })
       .success(function(){
    	   console.log('Entity Created!');
           $state.go('manage/media');
       })
       .error(function(){
    	   console.log('Error!');
       });
    }
    
    $scope.setFile = function(element) {
    	  $scope.currentFile = element.files[0];
    	   var reader = new FileReader();

    	  reader.onload = function(event) {
    	    $scope.image_source = event.target.result
    	    $scope.flag = true;
    	    $scope.$apply()

    	  }
    	  // when the file is read it triggers the onload event above.
    	  reader.readAsDataURL(element.files[0]);
    	}
    
    $scope.loadMediaDocument=function(){
        $scope.mediadocument=MediaDocument.get({id:$stateParams.id});
        console.log($scope.mediadocument);
    };
    
    if($stateParams.id)
    $scope.loadMediaDocument();
    
    
   
}).controller('CategoriesController', function($scope,User){
    $scope.categories = ["CATEGORY_PDF", "CATEGORY_IMAGE", "CATEGORY_DOC", "CATEGORY_EXCEL","CATEGORY_AUDIO","CATEGORY_VIDEO"];
});
// routes
angular.module('givenow').config(function($stateProvider,$httpProvider){
    $stateProvider.state('manage/media', {
        url: '/manage/media',
    	views: {
    	    "": {
      	      templateUrl: "templates/medias.html"
      	    },
    	    "sidebar@manage/media" : {
    	      templateUrl: "templates/sidebar/mediaSideBar.html"
    	    },
    	    "detail@manage/media":{
    	    	templateUrl: 'templates/detail/media/media-list.html',
    	        controller:'MediaListController'
    	    }
    	  }
    }).state('viewMedia',{
       url:'/manage/media/:id/view',
   	   views: {
	    "": {
  	      templateUrl: "templates/medias.html"
  	    },
	    "sidebar@viewMedia" : {
	      templateUrl: "templates/sidebar/mediaSideBar.html"
	    },
	    "detail@viewMedia":{
	    	templateUrl: 'templates/detail/media/media-view.html',	
	  	    controller:'MediaViewController'	
	    }
	  }
    }).state('newMedia',{
        url:'/manage/media/new',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/medias.html"
    	  	    },
    		    "sidebar@newMedia" : {
    		      templateUrl: "templates/sidebar/mediaSideBar.html"
    		    },
    		    "detail@newMedia":{
    		    	templateUrl: 'templates/detail/media/media-add.html',	
    		  	    controller:'MediaUploadController'	
    		    }
    		  }
    }).state('editMedia',{
        url:'/manage/media/:id/edit',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/medias.html"
    	  	    },
    		    "sidebar@editMedia" : {
    		      templateUrl: "templates/sidebar/mediaSideBar.html"
    		    },
    		    "detail@editMedia":{
    		    	templateUrl: 'templates/detail/media/media-edit.html',	
    		  	    controller:'MediaUploadController'	
    		    }
    		  }
    });
});