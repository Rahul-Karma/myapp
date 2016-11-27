
// services
angular.module('myApp.services').factory('Site',function($resource){
    return $resource('http://localhost:8080/sites/:id',{id:'@id'},{
        update: {
            method: 'PUT'
        }
    });
});