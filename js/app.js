var app = angular.module('VerticeApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
        templateUrl : "home.html",
        controller : "dateController",
        controllerAs : "date"
    })
        .when("/Arquitectura", {
        templateUrl : "Arquitectura.html"
    })
        .when("/Bioingenieria", {
        templateUrl : "Bioingenieria.html"
    })
        .when("/Civil", {
        templateUrl : "Civil.html"
    })
        .when("/Industrial", {
        templateUrl : "Industrial.html"
    })
        .when("/Registro", {
        templateUrl : "Registro.html",
        tab : "registro"
    })
        .when("/About", {
        templateUrl : "/About.html"
    });
    $locationProvider.html5Mode(true);
}]);

app.controller('dateController', function() {
    $('#countdown-timer').countdown('2017/3/29 10:10:00', function(event) {
        $(this).html(event.strftime("<span class='timer-day'>%D<span>%!D:Day,Días;</span></span><span class='timer-hour'>%H<span>%!H:Hour,Horas;</span></span><span class='timer-minute'>%M<span>%!M:Minute,Minutos;</span></span><span class='timer-second'>%S<span>%!S:Second,Segundos;</span></span>"));
    });
});

app.controller('navController', function($scope,$route) {
    $scope.$route = $route;
});

app.controller('TabController', function() {
    this.tab = 1;
    this.isSet = function(checkTab) {
        return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
        this.tab = setTab;
        (window).scrollTo(0,0);
    };
});
