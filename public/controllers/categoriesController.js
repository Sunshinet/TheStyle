import { templates } from 'templates';
import { searchController } from 'searchController';
const categoriesController = function(params) {
    // let main = params.mainCategorie;
    const categorie = params.categorie;
     const dbRef = firebase.database().ref('posts');
        dbRef.once('value', (snap) => {
           const f = [];
              snap.forEach( (element) => {
                if (element.val().categorie === categorie) {
                   const dbElements = {
                    'author': element.val().author,
                    'content': element.val().content,
                    'title': element.val().title,
                    'categorie': element.val().categorie,
                    'mainCategorie': element.val().mainCategorie,
                    'id': element.val().id,
                  };
                  if (dbElements.title.length > 20) {
                    dbElements.size = 'big';
                  }
                f.push(dbElements);
            }
              });
              templates.getPage('categories', f);
          });
};

export { categoriesController };
