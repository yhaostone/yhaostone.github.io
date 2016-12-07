// DIRECTIVES
myApp.directive("weatherReport",function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace:true,
        scope:{
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        },
        link: function(){
            // do something after linking
            console.log('Linking...');
        }
    }
});
