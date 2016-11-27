/**
 * Created by Vipin 
 */
// services
angular.module('givenow.services',[]).factory('User',function($resource){
    return $resource('/api/v1/users/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});

// controller
angular.module('givenow.controllers',[]).controller('UserListController',function($scope,$state,popupService,$window,$localStorage,User){

	var account=$localStorage.givenowuseraccount;
	//alert(angular.toJson(account));
	//alert(account.id);
    $scope.users=User.query({account:account});

    $scope.deleteUser=function(user){
        if(popupService.showPopup('Really delete this?')){
        	console.log(user);
            user.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('UserViewController',function($scope,$stateParams,User){
    $scope.user=User.get({id:$stateParams.id});

}).controller('UserCreateController',function($scope,$state,$stateParams,User){

    $scope.user=new User();

    $scope.addUser=function(){
        $scope.user.$save(function(){
            $state.go('manage/user');
        });
    }

}).controller('UserEditController',function($scope,$state,$stateParams,User){

    $scope.updateUser=function(){
        $scope.user.$update(function(){
            $state.go('manage/user');
        });
    };

    $scope.loadUser=function(){
        $scope.user=User.get({id:$stateParams.id});
    };

    $scope.loadUser();
}).controller('RolesController', function($scope,User){
    $scope.roles = ["ROLE_USER", "ROLE_ADMIN"];
});
// routes
angular.module('givenow').config(function($stateProvider,$httpProvider){
    $stateProvider.state('manage/user', {
        url: '/manage/user',
    	views: {
    	    "": {
      	      templateUrl: "templates/admin.html"
      	    },
    	    "sidebar@manage/user" : {
    	      templateUrl: "templates/sidebar/admin.html"
    	    },
    	    "detail@manage/user":{
    	    	templateUrl: 'templates/detail/user/user.html',
    	        controller:'UserListController'
    	    }
    	  }
    }).state('viewUser',{
       url:'/manage/user/:id/view',
   	   views: {
	    "": {
  	      templateUrl: "templates/admin.html"
  	    },
	    "sidebar@viewUser" : {
	      templateUrl: "templates/sidebar/admin.html"
	    },
	    "detail@viewUser":{
	    	templateUrl: 'templates/detail/user/user-view.html',	
	  	    controller:'UserViewController'	
	    }
	  }
    }).state('newUser',{
        url:'/manage/user/new',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/admin.html"
    	  	    },
    		    "sidebar@newUser" : {
    		      templateUrl: "templates/sidebar/admin.html"
    		    },
    		    "detail@newUser":{
    		    	templateUrl: 'templates/detail/user/user-add.html',	
    		  	    controller:'UserCreateController'	
    		    }
    		  }
    }).state('editUser',{
        url:'/manage/user/:id/edit',
    	   views: {
    		    "": {
    	  	      templateUrl: "templates/admin.html"
    	  	    },
    		    "sidebar@editUser" : {
    		      templateUrl: "templates/sidebar/admin.html"
    		    },
    		    "detail@editUser":{
    		    	templateUrl: 'templates/detail/user/user-edit.html',	
    		  	    controller:'UserEditController'	
    		    }
    		  }
    });
});