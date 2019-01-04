angular.module("myApp", [])

var app = angular.module("myApp", ["ngRoute", 'firebase']);

app.directive('navbar', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/navbar.html'
    }
});

app.directive('footsie', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/footer.html'
    }
});


app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
        })
        .when("/about", {
            templateUrl: "about.html",
        })
        .when("/topgames", {
            templateUrl: "topgames.html",
        })
        .when("/newgames", {
            templateUrl: "newgames.html",
        })
        .otherwise({
            redirectTo: '/home'
        });
});