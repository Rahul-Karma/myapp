var givenow =angular.module('givenow');

//add the configuration for changing the language

givenow.config(function ($translateProvider) {
    $translateProvider.useUrlLoader('/resources/message/bundle');
    $translateProvider.useStorage('UrlLanguageStorage');
    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');
});

givenow.factory('UrlLanguageStorage', ['$location',UrlLanguageStorage ]);

function UrlLanguageStorage ($location) {
    return {
        put: function (name, value) {
        },
        get: function (name) {
            return $location.search()['lang']
        }
    };
}

givenow.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
        	 if (this.pageYOffset > 0 && this.pageYOffset < 55) {
        		 var offset = 50 - this.pageYOffset;
        		 offset += "px";
        		 angular.element( document.querySelector( '#sidebar-wrapper' ) ).css('top',offset);
        	 }
        	 else if (this.pageYOffset > 55){
        		 angular.element( document.querySelector( '#sidebar-wrapper' ) ).css('top',0);
        	 }
        	 else if(this.pageYOffset == 0){
        		 angular.element( document.querySelector( '#sidebar-wrapper' ) ).css('top','auto')
        	 }
            scope.$apply();
        });
    };
});

angular.module('givenow').service('filteredListService', function () {

    this.searched = function (valLists, toSearch) {
        return _.filter(valLists,

        function (i) {
            /* Search Text in all 3 fields */
            return searchUtil(i, toSearch);
        });
    };

    this.paged = function (valLists, pageSize) {
        retVal = [];
        for (var i = 0; i < valLists.length; i++) {
            if (i % pageSize === 0) {
                retVal[Math.floor(i / pageSize)] = [valLists[i]];
            } else {
                retVal[Math.floor(i / pageSize)].push(valLists[i]);
            }
        }
        return retVal;
    };

});

//Inject Custom Service Created by us and Global service $filter. This is one way of specifying dependency Injection
angular.module('givenow').controller('TableCtrl', function ($scope, $filter, filteredListService) {

    $scope.pageSize = 4;
    $scope.allItems = getDummyData();
    $scope.reverse = false;

    $scope.resetAll = function () {
        $scope.filteredList = $scope.allItems;
        $scope.newEmpId = '';
        $scope.newName = '';
        $scope.newEmail = '';
        $scope.searchText = '';
        $scope.currentPage = 0;
        $scope.Header = ['', '', ''];
    }

    $scope.search = function () {
        $scope.filteredList = filteredListService.searched($scope.allItems, $scope.searchText);

        if ($scope.searchText == '') {
            $scope.filteredList = $scope.allItems;
        }
        $scope.pagination();
    }

    // Calculate Total Number of Pages based on Search Result
    $scope.pagination = function () {
        $scope.ItemsByPage = filteredListService.paged($scope.filteredList, $scope.pageSize);
    };

    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

    $scope.firstPage = function () {
        $scope.currentPage = 0;
    };

    $scope.lastPage = function () {
        $scope.currentPage = $scope.ItemsByPage.length - 1;
    };

    $scope.range = function (input, total) {
        var ret = [];
        if (!total) {
            total = input;
            input = 0;
        }
        for (var i = input; i < total; i++) {
            if (i != 0 && i != total - 1) {
                ret.push(i);
            }
        }
        return ret;
    };

    $scope.sort = function (sortBy) {
        $scope.resetAll();

        $scope.columnToOrder = sortBy;

        //$Filter - Standard Service
        $scope.filteredList = $filter('orderBy')($scope.filteredList, $scope.columnToOrder, $scope.reverse);

        if ($scope.reverse) iconName = 'glyphicon glyphicon-chevron-up';
        else iconName = 'glyphicon glyphicon-chevron-down';

        if (sortBy === 'EmpId') {
            $scope.Header[0] = iconName;
        } else if (sortBy === 'name') {
            $scope.Header[1] = iconName;
        } else {
            $scope.Header[2] = iconName;
        }

        $scope.reverse = !$scope.reverse;

        $scope.pagination();
    };

    //By Default sort ny Name
    $scope.sort('name');

}).controller('DatepickerDemoCtrl', function ($scope) {
	  $scope.today = function() {
		    $scope.dt = new Date();
		  };
		  $scope.today();

	
		  // Disable weekend selection
		  $scope.disabled = function(date, mode) {
		    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		  };

		  $scope.toggleMin = function() {
		    $scope.minDate = $scope.minDate ? null : new Date();
		  };
		  $scope.toggleMin();
		  $scope.maxDate = new Date(2020, 5, 22);

		  $scope.open = function($event) {
		    $scope.status.opened = true;
		    console.log(self.opened);
		  };

		  $scope.setDate = function(year, month, day) {
		    $scope.dt = new Date(year, month, day);
		  };

		  $scope.dateOptions = {
		    formatYear: 'yy',
		    startingDay: 1
		  };

		  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		  $scope.format = $scope.formats[0];

		  $scope.status = {
		    opened: false
		  };

		  var tomorrow = new Date();
		  tomorrow.setDate(tomorrow.getDate() + 1);
		  var afterTomorrow = new Date();
		  afterTomorrow.setDate(tomorrow.getDate() + 2);
		  $scope.events =
		    [
		      {
		        date: tomorrow,
		        status: 'full'
		      },
		      {
		        date: afterTomorrow,
		        status: 'partially'
		      }
		    ];

		  $scope.getDayClass = function(date, mode) {
		    if (mode === 'day') {
		      var dayToCheck = new Date(date).setHours(0,0,0,0);

		      for (var i=0;i<$scope.events.length;i++){
		        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

		        if (dayToCheck === currentDay) {
		          return $scope.events[i].status;
		        }
		      }
		    }

		    return '';
		  };
		});

var myCtrl = function ($scope) {
    $scope.text = 'this is test';
};

function searchUtil(item, toSearch) {
    /* Search Text in all 3 fields */
    return (item.name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.Email.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.EmpId == toSearch) ? true : false;
}

/*Get Dummy Data for Example*/
function getDummyData() {
    return [{
        EmpId: 2,
        name: 'Jitendra',
        Email: 'jz@gmail.com'
    }, {
        EmpId: 1,
        name: 'Minal',
        Email: 'amz@gmail.com'
    }, {
        EmpId: 3,
        name: 'Rudra',
        Email: 'ruz@gmail.com'
    }, {
        EmpId: 21,
        name: 'Jitendra1',
        Email: 'jz@gmail.com'
    }, {
        EmpId: 11,
        name: 'Minal1',
        Email: 'amz@gmail.com'
    }, {
        EmpId: 31,
        name: 'Rudra1',
        Email: 'ruz@gmail.com'
    }, {
        EmpId: 22,
        name: 'Jitendra2',
        Email: 'jz@gmail.com'
    }, {
        EmpId: 12,
        name: 'Minal2',
        Email: 'amz@gmail.com'
    }, {
        EmpId: 32,
        name: 'Rudra2',
        Email: 'ruz@gmail.com'
    }, {
        EmpId: 23,
        name: 'Jitendra3',
        Email: 'jz@gmail.com'
    }, {
        EmpId: 13,
        name: 'Minal3',
        Email: 'amz@gmail.com'
    }, {
        EmpId: 33,
        name: 'Rudra3',
        Email: 'ruz@gmail.com'
    }];
}

givenow.directive('ckEditor', [function () {
        return {
            require: '?ngModel',
            restrict: 'C',
            link: function(scope, elm, attr, ngModel) {
              var ck = CKEDITOR.replace(elm[0]);
              
              if (!ngModel) return;
        
              ck.on('pasteState', function() {
                scope.$apply(function() {
                  ngModel.$setViewValue(ck.getData());
                    
                });
              });   
        
              ngModel.$render = function(value) {
                ck.setData(ngModel.$viewValue);
              };
            }
        };
}]);






