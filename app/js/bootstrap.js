define([
    'require',
    'angular',
    'js/app'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['reminder']);
    });
});