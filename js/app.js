
angular.module('oliza', ['restangular','ngRoute',
  ])

.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
})

.config(function($routeProvider, RestangularProvider) {

  $routeProvider

  // Each tab has its own nav history stack:



  .when('/', {
 
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
  .otherwise({redirectTo: '/'});

    RestangularProvider.setBaseUrl('https://api.mongolab.com/api/1/databases/oliza/collections');
    RestangularProvider.setDefaultRequestParams({ apiKey: 'Iwy7zOOBBd6lUzN5jBhLNhv68Wv8UfUl' })
    RestangularProvider.setRestangularFields({
      id: '_id.$oid'
    });
   
  });

 

