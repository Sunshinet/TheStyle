import {templates} from 'templates';
const categoriesController = function(params){
    let main = params.mainCategorie;
    let categorie = params.categorie;
    console.log(categorie)
     let dbRef = firebase.database().ref('posts');
        dbRef.once('value', (snap) => {
            let f = []
            // console.log(f)
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
                // f.push();
                
                f.push(dbElements)
            }
              })
             
              var timestamp = new Date();
              console.log(timestamp);
              templates.getPage('categories', f);
          })
    // console.log(dbRef);
    // templates.getPage('some')
    // console.log('stava');
}

export { categoriesController }