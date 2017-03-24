var app = angular.module('VerticeApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider) {
    $routeProvider
        .when("/",{
        templateUrl : "home.html"
    })
        .when("/Arquitectura",{
        templateUrl : "Arquitectura.html"
    })
        .when("/Bioingenieria",{
        templateUrl : "Bioingenieria.html"
    })
        .when("/Civil",{
        templateUrl : "Civil.html"
    })
        .when("/Industrial",{
        templateUrl : "Industrial.html"
    })
        .when("/Registro",{
        templateUrl : "Registro.html"
    });
    $locationProvider.html5Mode(true);
}]);

app.controller('navController', function($route) {
    this.$route = $route;
});

app.controller('TabController', function() {
    console.log("unexpected here");
    this.tab = 1;
    this.isSet = function(checkTab) {
        return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
        this.tab = setTab;
        (window).scrollTo(0,0);
    };
});
