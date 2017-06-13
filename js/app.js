(function () {

    angular
        .module('movieApp',['ui.router','ngResource'])
        .config(function ($stateProvider) {
            $stateProvider.state('movies',{ // state for showing all movies
                url:'/movies',
                templateUrl:'../partials/movies.html',
                controller:'MovieListController',
                controllerAs:'vm'
            }).state('viewMovie',{ //state for showing single movie
                url:'/movies/:id/view',
                templateUrl:'../partials/movie-view.html',
                controller:'MovieViewController',
                controllerAs:'vm'
            }).state('newMovie',{ // state for adding new movie
                url:'/movies/new',
                templateUrl:'../partials/movie-add.html',
                controller:'MovieCreateController',

            }).state('editMovie',{ // state for updating the movie
               url:'/movies/:id/edit',
               templateUrl:'../partials/movie-edit.html',
               controller:'MovieEditController',
            });
        }).run(function ($state) {
            $state.go('movies'); // make a transition to movies state whe
    })

})();