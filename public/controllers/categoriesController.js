import {templates} from 'templates';
const categoriesController = function(params){
    let main = params.mainCategorie;
    let categorie = params.categorie;
    console.log(categorie)
     let dbRef = firebase.database().ref('posts');
        dbRef.once('value', (snap) => {
          let arr = []
          let cat = [{"categorie":categorie}]
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
               
                arr.push(dbElements)
            }
              })
              arr.push(cat);
              console.log(arr);
             
              templates.getPage('categories', arr);
          })
    // console.log(dbRef);
    // templates.getPage('some')
    // console.log('stava');
}

export { categoriesController }