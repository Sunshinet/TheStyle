import {templates} from 'templates';
const categoriesController = function(params){
    let main = params.mainCategorie
     let dbRef = firebase.database().ref('posts');
        dbRef.once('value', (snap) => {
            let f =[]
              snap.forEach(element => {
                if(element.val().categorie === main){
                   let dbElements = {
                    'author' : element.val().author,
                    'content' : element.val().content,
                    'title': element.val().title,
                    'categorie': element.val().categorie,
                    'mainCategorie': element.val().mainCategorie,
                    'id': element.val().id
                  };
                f.push(dbElements);
            }
              })
              console.log(f);
             templates.getPage('categories', f);
          })
    // console.log(dbRef);
    // templates.getPage('some')
    // console.log('stava');
}

export { categoriesController }