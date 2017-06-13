(function () {

    angular
        .module('movieApp')
        .controller('MovieListController',MovieListController)
        .controller('MovieViewController',MovieViewController)
        .controller('MovieCreateController',MovieCreateController)
        .controller('MovieEditController',MovieEditController);

    MovieListController.$inject = ['Movie','$window'];
    MovieViewController.$inject = ['$stateParams','Movie'];
    MovieCreateController.$inject = ['$state','Movie','$scope'];
    MovieEditController.$inject = ['$state','$stateParams','Movie','$scope']


    function MovieListController(Movie,$window) {
        var vm = this;
        vm.movies = Movie.query(); //fetch

        vm.deleteMovie = function (movie) {
            movie.$delete(function () {
                $window.location.href = ''; //redirect to home
            });
        }


    };
    
    function MovieViewController($stateParams,Movie) {
        var vm = this;
        vm.movie = Movie.get({id:$stateParams.id});
    }
    
    function MovieCreateController($state,Movie,$scope) {

        $scope.movie = new Movie();
        $scope.addMovie = function () {
            $scope.movie.$save(function () {
                $state.go('movies');
            });
        };
    };
    
    function MovieEditController($state,$stateParams,Movie,$scope) {
      $scope.updateMovie = function () {
          $scope.movie.$update(function () {
              $state.go('movies');
          });
      }


      $scope.loadMovie = function () { // isses a get request to /api/movies/:id to
                                       // to get a movie to update
          $scope.movie = Movie.get({id:$stateParams.id});
          
      };

      $scope.loadMovie(); // load the movie which we get edite on ui

    };
    


})();