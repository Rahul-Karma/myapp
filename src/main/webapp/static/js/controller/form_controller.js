'use strict';

angular.module('formApp').controller('SiteController', ['$scope', 'SiteService', function($scope, SiteService) {
          var self = this;
          self.site={id:null,created: '', name:'',url:'',email:'', description: ''};
          self.users=[];
               
          self.fetchAllSites = function(){
              SiteService.fetchAllSites()
                  .then(
                               function(d) {
                                    self.sites = d;
                               },
                                function(errResponse){
                                    console.error('Error while fetching Currencies');
                                }
                       );
          };
            
          self.createSite = function(site){
              SiteService.create(site)
                      .then(
                      self.fetchAllUsers, 
                              function(errResponse){
                                   console.error('Error while creating User.');
                              } 
                  );
          };
 
         /*self.updateUser = function(user, id){
              UserService.updateUser(user, id)
                      .then(
                              self.fetchAllUsers, 
                              function(errResponse){
                                   console.error('Error while updating User.');
                              } 
                  );
          };
 
         self.deleteUser = function(id){
              UserService.deleteUser(id)
                      .then(
                              self.fetchAllUsers, 
                              function(errResponse){
                                   console.error('Error while deleting User.');
                              } 
                  );
          };*/
 
          self.fetchAllUsers();
 
          self.submit = function() {
              if(self.user.id===null){
                  console.log('Saving New User', self.user);    
                  self.createSite(self.site);
              }/*else{
                  self.updateUser(self.user, self.user.id);
                  console.log('User updated with id ', self.user.id);
              }*/
              self.reset();
          };
               
          /*self.edit = function(id){
              console.log('id to be edited', id);
              for(var i = 0; i < self.users.length; i++){
                  if(self.users[i].id === id) {
                     self.user = angular.copy(self.users[i]);
                     break;
                  }
              }
          };
               
          self.remove = function(id){
              console.log('id to be deleted', id);
              if(self.user.id === id) {//clean form if the user to be deleted is shown there.
                 self.reset();
              }
              self.deleteUser(id);
          };
 */
           
          self.reset = function(){
              self.user={id:null,created: '',name:'',url: '',description:'',email:''};
              $scope.myForm.$setPristine(); //reset Form
          };
 
      }]);