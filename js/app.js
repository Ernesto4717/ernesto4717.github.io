var app = angular.module('VerticeApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
        templateUrl : "home.html"
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
        templateUrl : "Registro.html"
    });
    $locationProvider.html5Mode(true);
}]);

app.controller('dateController', function() {
    var fecha = new Date();
    var fechaCongreso = new Date("April 26, 2017 00:13:00");
    var diferencia=(fechaCongreso-fecha)/1000
        this.dias=Math.floor(diferencia/86400)
        diferencia=diferencia-(86400*this.dias)
        this.horas=Math.floor(diferencia/3600)
        diferencia=diferencia-(3600*this.horas)
        this.minutos=Math.floor(diferencia/60)
    console.log("Tiempo restante: " + this.dias +":" + this.horas + ":" + this.minutos);
});

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
