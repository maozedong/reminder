define([
    'require',
    'angular',
    'reminder'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['reminder']);
    });
});