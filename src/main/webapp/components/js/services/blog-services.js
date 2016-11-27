
angular.module('givenow.services').factory('Blog',function($resource){
    return $resource('/api/v1/blogs/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
});


angular.module('givenow.controllers').controller('BlogListController',function($scope,$state,popupService,$window,Blog, $localStorage){
	
	var accountId=$localStorage.givenowuseraccount;
    $scope.blogs=Blog.query({accountId:accountId});
    
    $scope.deleteBlog=function(blog){
        if(popupService.showPopup('Really delete this blog?')){
            blog.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('BlogViewController',function($scope,$stateParams,Blog){
    $scope.blog=Blog.get({id:$stateParams.id});

}).controller('BlogIdCtrl',function($scope,$stateParams){
	$scope.blogId = $stateParams.id;

}).controller('BlogCreateController',function($scope,$state,$stateParams,Blog, $localStorage){

    $scope.blog=new Blog();
    $scope.blog.created = new Date();
    $scope.blog.userId = $localStorage.givenowcurrentuser;
    $scope.blog.accountId = $localStorage.givenowuseraccount;
    $scope.addBlog=function(){
        $scope.blog.$save(function(){
            $state.go('manage/blog');
        });
    }

}).controller('BlogEditController',function($scope,$state,$stateParams,Blog){

    $scope.updateBlog=function(){
        $scope.blog.$update(function(){
            $state.go('manage/blog');
        });
    };

    $scope.loadBlog=function(){
        $scope.blog=Blog.get({id:$stateParams.id});
    };

    $scope.loadBlog();
    
}).filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
}).controller('BlogListCrtl',function($scope, $http, $localStorage){
	$scope.blogs = []; //declare an empty array
	var accountId=$localStorage.givenowuseraccount;
	$http.get("/api/v1/blogs?accountId="+accountId).success(function(response){ 
		$scope.blogs = response;  //ajax request to fetch data into $scope.data
	});
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
});
// routes
angular.module('givenow').config(function($stateProvider,$httpProvider){
    $stateProvider.state('manage/blog', {
        url: '/manage/blog',
    	views: {
    	    "": {
      	      templateUrl: "templates/blogs.html"
      	    },
    	    "sidebar@manage/blog" : {
    	      templateUrl: "templates/sidebar/blog-sidebar.html",
    	      controller:'BlogIdCtrl'
    	    },
    	    "detail@manage/blog":{
    	    	templateUrl: 'templates/detail/blog/blog-list.html',
    	        controller:'BlogListController'
    	    }
    	  }
    }).state('viewBlog',{
       url:'/manage/blog/:id/view',
   	   views: {
	    "": {
  	      templateUrl: "templates/detail/blog/blog-home.html"
  	    }
	  }
    }).state('newBlog',{
        url:'/manage/blog/new',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/blogs.html"
    	  	    },
    		    "sidebar@newBlog" : {
    		      templateUrl: "templates/sidebar/blog-sidebar.html",
    		      controller:'BlogIdCtrl'
    		    },
    		    "detail@newBlog":{
    		    	templateUrl: 'templates/detail/blog/blog-add.html',	
    		  	    controller:'BlogCreateController'	
    		    }
    		  }
    }).state('editBlog',{
        url:'/manage/blog/:id/edit',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/blogs.html"
    	  	    },
    		    "sidebar@editBlog" : {
    		      templateUrl: "templates/sidebar/blog-sidebar.html",
    		      controller:'BlogIdCtrl'
    		    },
    		    "detail@editBlog":{
    		    	templateUrl: 'templates/detail/blog/blog-edit.html',	
    		  	    controller:'BlogEditController'	
    		    }
    		  }
    }).state('/manage/blog/edit/content?:id',{
        url:'/manage/blog/edit/content?:id',
 	   views: {
 		    "": {
 	  	      templateUrl: "templates/blogs.html"
 	  	    },
 		    "sidebar@/manage/blog/edit/content?:id" : {
 		      templateUrl: "templates/sidebar/blog-sidebar.html",
 		      controller:'BlogIdCtrl'
 		    },
 		    "detail@/manage/blog/edit/content?:id":{
 		    	templateUrl: 'templates/detail/blog/blog-content.html',	
 		  	    controller:'BlogEditController'	
 		    }
 		  }
 }).state('/manage/blog/edit/header?:id',{
     url:'/manage/blog/edit/header?:id',
	   views: {
		    "": {
	  	      templateUrl: "templates/blogs.html"
	  	    },
		    "sidebar@/manage/blog/edit/header?:id" : {
		      templateUrl: "templates/sidebar/blog-sidebar.html",
		      controller:'BlogIdCtrl'
		    },
		    "detail@/manage/blog/edit/header?:id":{
		    	templateUrl: 'templates/detail/blog/blog-header.html',	
		  	    controller:'BlogEditController'	
		    }
		  }
}).state('editBlogFooter',{
    url:'/manage/blog/edit/:id/footer',
	   views: {
		    "": {
	  	      templateUrl: "templates/blogs.html"
	  	    },
		    "sidebar@editBlogFooter" : {
		      templateUrl: "templates/sidebar/blog-sidebar.html",
		      controller:'BlogIdCtrl'
		    },
		    "detail@editBlogFooter":{
		    	templateUrl: 'templates/detail/blog/blog-footer.html',	
		  	    controller:'BlogEditController'	
		    }
		  }
});;
});