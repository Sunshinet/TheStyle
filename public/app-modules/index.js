import {templates} from 'templates';

import { homeController } from 'homeController';

import { categoriesController } from 'categoriesController';
import { singlePostController  } from 'singlePostController ';

const router = new Navigo(null, false, '#!');

router
    .on(() => homeController.all())
    .on({
        '/#/': () => homeController.all(),
        // '/#/?:pageNumber': () => homeController.getPage(),
        '/beauty/:categorie': (params) => categoriesController(params),
        '/beauty/:mainCategorie/:id': (params) => singlePostController(params),
        '/health/:categorie': (params) => categoriesController(params),
        '/health/:mainCategorie/:id': (params) => singlePostController(params),
        '/features/:categorie': (params) => categoriesController(params),
        '/features/:mainCategorie/:id': (params) => singlePostController(params),
        // '/tech/:categorie': (params) => categoriesController(params),
        // '/tech/:mainCategorie/:id': (params) => singlePostController(params),
      
    })
    .notFound(() => templates.getPage('notFound', {}))
    .resolve();