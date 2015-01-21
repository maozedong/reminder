define([
    'angular',
    'js/header/header.js',
    'js/calendar/calendar.js'
], function (angular, header, calendar) {
    'use strict';

    var app = angular.module('reminder', []);

    app.directive('header', header);
    app.directive('calendar', calendar);
});