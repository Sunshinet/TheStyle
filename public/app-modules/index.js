import {templates} from 'templates';

import { homeController } from 'homeController';

import { categoriesController } from 'categoriesController';
import { singlePostController  } from 'singlePostController ';
const router = new Navigo(null, false, '#!');

router
    .on(() => homeController())
    .on({
        '/#/': () => homeController(),
        '/beauty/:mainCategorie': (params) => categoriesController(params),
        '/beauty/:mainCategorie/:id': (params) => singlePostController(params),
      
    })
    .notFound(() => templates.getPage('notFound', {}))
    .resolve();