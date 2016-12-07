// ROUTE
myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl: 'pages/welcome.html',
        controller: 'mainController'
    })
    
    .when('/main',{
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/values',{
        templateUrl: 'pages/values.html',
        controller: 'valuesController'
    })
    
    .when('/second',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days',{
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
    .when('/faq',{
        templateUrl: 'pages/faq.html',
        controller: 'faqController'
    })
    
    .when('/contact',{
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    })
    
    .when('/404',{
        templateUrl: 'pages/404.html',
    })
    
    .otherwise({
        redirectTo: '/404'
    });
});