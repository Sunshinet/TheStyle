import {templates} from 'templates';

import { homeController } from 'homeController';

import { categoriesController } from 'categoriesController';

const router = new Navigo(null, false, '#!');

router
    .on(() => homeController())
    .on({
        '/home': () => homeController(),
        //  '/beauty': () => homeController(),
        '/beauty/:mainCategorie': (params) => categoriesController(params),
        // '/logout': () => logoutController(),
      
    })
    .notFound(() => templates.getPage('notFound', {}))
    .resolve();