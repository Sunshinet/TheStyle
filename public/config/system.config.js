SystemJS.config({
    'transpiler': 'plugin-babel',
    'map': {
        // SystemJS files\\
    'plugin-babel': '../node-modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': '../node-modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // App files\\
        'index': '../app-modules/index.js',
        'templates': '../app-modules/templates.js',
        'homeController': '../controllers/homeController.js',
        'categoriesController': '../controllers/categoriesController.js',
        'singlePostController ': '../controllers/singlePostController.js',
        // Libraries\\
        'jquery': '../node-modules/jquery/dist/jquery.js',
        // Routing:
        'navigo': '../node-modules/navigo/lib/navigo.min.js',

        // HTML:
        'handlebars': '../node-modules/handlebars/dist/handlebars.js',

        // Popup messages
        'toastr': '../node-modules/toastr/toastr.js',

        // UI stuffs (autocomplete, calendar etc.)
        'jqueryUi': '../node-modules/jquery-ui-dist/jquery-ui.js',
        'bootstrap': 'node-modules/bootstrap/dist/js/bootstrap.min.js',
        'pagination': '../node_modules/paginationjs/dist/pagination.js',
    },
});

// SystemJS.import('index');
