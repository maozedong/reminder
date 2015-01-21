define([
    'text!js/calendar/calendar.html'
], function (template) {
    'use strict';

    return [function(){
        return {
            template: template,
            scope: {

            },
            controller: function($scope){
                $scope.dates = [];
                var tempDate = null;

                for(var i=0;i<10;i++){
                    tempDate = new Date();
                    tempDate.setDate(tempDate.getDate() - (i-5));
                    $scope.dates.push(tempDate);
                }
            }
        };
    }];
});

