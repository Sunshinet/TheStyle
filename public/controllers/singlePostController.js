/* globals toastr */
import { templates } from 'templates';
import 'jquery';
// import { searchController } from 'searchController';
// import { toastr } from 'toastr';
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
          // searchController();
          
             $('.sbm').click(function() {
              
              const name = $('#authorName').val();
              const avatar = $('#avatar').val();
              const commentText = $('#text').val();
              toastr.success(`You did it ${ name }!`);

              const newPostComment = firebase.database().ref('posts')
              .child(b + '/comments')
              .push().key;
               const newPost = {
                'name': name,
                'avatar': avatar,
                'commentText': commentText,
                'key': newPostComment,

              };

              const updates={};
              updates['/posts/' + b +'/'+'comments/'+ newPostComment] = newPost;

              return firebase.database().ref().update(updates)
  
              
            })
            
          }).then(()=>{
            $('.rpl').click(function(ev) {
              // let t = ev.target;
             let commentId = $(ev.target).next().toggleClass('notHidden');
             let p = $(ev.target).val();
             
             });
          });
      });
};


export { singlePostController };

