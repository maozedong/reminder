define([
    'text!js/header/header.html',
    'angular'
], function (template) {
    'use strict';

    return [function(){
        return {
            template: template,
            scope: {

            },
            controller: ['$scope', function($scope){

            }]
        };
    }];
});

