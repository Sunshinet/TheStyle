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
          templates.getPage('singlePost', f).then(()=>{
            let submitBtn = $('button').click(function(){
              let name = $('#authorName').val();
              let commentText = $('#text').val();
            //  TODO validation
              let newPost = {
                'name':name,
                'commentText': commentText
              }
              
         let newPostComment = firebase.database().ref('posts').child(b + '/comments').push().key;
              // console.log(newPostComment);
              let updates={};
              updates['/posts/' + b + '/' + 'comments/'+ newPostComment] = newPost;
              return firebase.database().ref().update(updates);
            })
         
          });
      })

  
}

export { singlePostController }