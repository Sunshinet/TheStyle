import {templates} from 'templates';
const categoriesController = function(params){
    let main = params.mainCategorie;
    let categorie = params.categorie;
    console.log(categorie)
     let dbRef = firebase.database().ref('posts');
        dbRef.once('value', (snap) => {
            let f = []
              snap.forEach(element => {
                if(element.val().categorie === categorie){
                   let dbElements = {
                    'author' : element.val().author,
                    'content' : element.val().content,
                    'title': element.val().title,
                    'categorie': element.val().categorie,
                    'mainCategorie': element.val().mainCategorie,
                    'id': element.val().id
                  };
                  if(dbElements.title.length > 20){
                    dbElements.size = 'big';
                  }
                
                f.push(dbElements);
                
            }
              })
            
              console.log(f);
              templates.getPage('categories', f);
          })
}

export { categoriesController }