angular.module('listings').factory('Listings', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('https://git.heroku.com/nameless-peak-90953.git/api/listings/');
      },

      create: function(listing) {
        return $http.post('https://git.heroku.com/nameless-peak-90953.git/api/listings/', listing);
      },

      read: function(id) {
        return $http.get('https://git.heroku.com/nameless-peak-90953.git/api/listings/' + id);
      },

      update: function(id, listing) {
        return $http.put('https://git.heroku.com/nameless-peak-90953.git/api/listings/' + id, listing);
      },

      delete: function(id) {
        return $http.delete('https://git.heroku.com/nameless-peak-90953.git/api/listings/' + id);
      }
    };

    return methods;
  }
]);
