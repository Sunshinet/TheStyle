import {templates} from 'templates';
const singlePostController = function(params){

    let c = params.mainCategorie;
    let b = params.id;
    let dbRef = firebase.database().ref('posts');
    dbRef.once('value', (snap) => {
        let f = []
        
        // console.log(f)
          snap.forEach(element => {
            if(element.val().id === b){
               let dbElements = {
                'author' : element.val().author,
                'content' : element.val().content,
                'title': element.val().title,
                'categorie': element.val().categorie,
                'mainCategorie': element.val().mainCategorie,
                'id': element.val().id,
                'comments': element.val().comments
              };
            f.push(dbElements);
        }
          })
         
         console.log(f);
          templates.getPage('singlePost', f);
      })

  
}

export { singlePostController }