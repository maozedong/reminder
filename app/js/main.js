require.config({

    baseUrl: "/reminder/app/",
    paths: {
        'text' : 'bower_components/requirejs-plugins/lib/text',
        'json' : 'bower_components/requirejs-plugins/src/json',
        'domReady': 'bower_components/requirejs-domready/domReady',
        'angular': 'bower_components/angular/angular'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    },
    deps: ['js/bootstrap']
});