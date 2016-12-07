// SERVICES
myApp.service('cityService',function(){
    
    this.city = "Melbourne";
    
});

myApp.service('weatherService',['$resource',function($resource){
    // this link works: http://api.openweathermap.org/data/2.5/forecast/daily?q=Shanghai&cnt=2&APPID=572e7ceebe3906820d03e3f2ec993834
    
    this.GetWeather = function(city,days){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=572e7ceebe3906820d03e3f2ec993834",{ callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherAPI.get({ q: city, cnt: days });
    
    }
    
}]);