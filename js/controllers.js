// CONTROLLER

// http://api.openweathermap.org/data/2.5/forecast?q=Melbourne,AU&cnt=2&appid=572e7ceebe3906820d03e3f2ec993834

myApp.controller('mainController',['$scope','$log', '$location','$sce','cityService', function($scope,$log,$location,$sce,cityService){
    $scope.city=cityService.city;
    
    $scope.$watch('city',function(){
        cityService.city = $scope.city;            
    });
    
    $scope.submit = function(){
        $location.path("/forecast");
    }
    
    $scope.mapSrc = $sce.trustAsResourceUrl("//www.google.com/maps/embed/v1/place?q="+$scope.city+"&zoom=10&key=AIzaSyAV32VSmrvgMCTPbQmp0yFRgQu3FSyvOHI");
                                   
    
}]);

myApp.controller('firstController',['$scope','$log', function($scope,$log){
    $scope.name='Yan Hao';
}]);

myApp.controller('secondController',['$scope','$log', function($scope,$log){
    $scope.name='Second';
}]);

myApp.controller('forecastController',['$scope','$log','$routeParams','$sce','cityService','weatherService', function($scope,$log,$routeParams,$sce, cityService, weatherService){
    $scope.city = cityService.city;
    
    // set default days 3
    $scope.days = $routeParams.days || 2;
    
    // call weather service
    $scope.weatherResult = weatherService.GetWeather($scope.city,$scope.days);
    
    $scope.convertToDate = function(dt){
        return new Date(dt*1000);
    }
    
    $scope.convertKToDegree = function(k){
        return Math.round((k-273.15)*10)/10;
    }
    
    $scope.mapSrc = $sce.trustAsResourceUrl("//www.google.com/maps/embed/v1/place?q="+$scope.city+"&zoom=10&key=AIzaSyAV32VSmrvgMCTPbQmp0yFRgQu3FSyvOHI");
    
    
}]);

myApp.controller('faqController',['$scope','$log', function($scope,$log){
    
}]);

myApp.controller('valuesController',['$scope','$log', function($scope,$log){
    
}]);

myApp.controller('contactController',['$scope','$log', function($scope,$log){
    $scope.name='Contact name: yan Hao';
}]);