import {templates} from 'templates';
import 'jquery';
const singlePostController = function(params){

    let c = params.mainCategorie;
    let b = params.id;
    let dbRef = firebase.database().ref('posts');
    
    dbRef.on('value', (snap) => {
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
                'comments': element.val().comments,
                'tags': element.val().tags
              };
            f.push(dbElements);
        }
          })
         
         console.log(f);
          templates.getPage('singlePost', f).then(()=>{
            let submitBtn = $('button').click(function(){
              console.log('hihi');
            })
         
          });
      })

  
}

export { singlePostController }