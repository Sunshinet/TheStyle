import { templates } from 'templates';

import { homeController } from 'homeController';

import { categoriesController } from 'categoriesController';
import { singlePostController } from 'singlePostController ';
import { searchController } from 'searchController';
const router = new Navigo(null, false, '#!');

router
    .on(() => homeController.all())
    .on({
        '/#/': () => homeController.all(),
        '/search': () => searchController(),
        '/beauty/:categorie': (params) => categoriesController(params),
        '/beauty/:categorie/:id': (params) => singlePostController(params),
        '/health/:categorie': (params) => categoriesController(params),
        '/health/:categorie/:id': (params) => singlePostController(params),
        '/features/:categorie': (params) => categoriesController(params),
        '/features/:categorie/:id': (params) => singlePostController(params),
        '/tech/:categorie': (params) => categoriesController(params),
        '/tech/:mainCategorie/:id': (params) => singlePostController(params),
        '/search': () => searchController(),
    })
    .notFound(() => templates.getPage('notFound', {}))
    .resolve();
