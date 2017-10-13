import { templates } from 'templates';
import 'jquery';
const singlePostController = function(params) {
    const b = params.id;
    const dbRef = firebase.database().ref('posts');
    dbRef.on('value', (snap) => {
        const f = [];
        // console.log(f)
          snap.forEach((element) => {
            if (element.val().id === b) {
               const dbElements = {
                'author': element.val().author,
                'content': element.val().content,
                'title': element.val().title,
                'categorie': element.val().categorie,
                'mainCategorie': element.val().mainCategorie,
                'id': element.val().id,
                'comments': element.val().comments,
                'replay': element.val().replay,
                'tags': element.val().tags,
                'avatar': element.val().avatar,
              };
            f.push(dbElements);
        }
          });
          templates.getPage('singlePost', f).then(()=>{
          
             $('button').click(function() {
              const name = $('#authorName').val();
              const avatar = $('#avatar').val();
              const commentText = $('#text').val();
              const newPost = {
                'name': name,
                'avatar': avatar,
                'commentText': commentText,
              };
            
              const newPostComment = firebase.database().ref('posts')
              .child(b + '/comments')
              .push().key;
              // console.log(newPostComment);
              const updates={};
              updates['/posts/' + b + '/' + 'comments/'+ newPostComment] = newPost;
              return firebase.database().ref().update(updates);
          
            });
          });
      });
};


export { singlePostController };

