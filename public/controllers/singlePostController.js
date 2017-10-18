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
             $('.sbm').click(function() {
              const name = $('#authorName').val();
              const avatar = $('#avatar').val();
              const commentText = $('#text').val();
              

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
              if (name !== '' && commentText !== '') {
                toastr.success('Done!');
              return firebase.database().ref().update(updates);
              } else {
                toastr.error('name and content are required!');
              }
            });
          
            $('.rpl').click(function(ev) {
              // let t = ev.target;
             let commentId = $(ev.target).next().toggleClass('notHidden');
             
             });

             $('.sbm-replay').click(function(ev) {
               let a =  $(ev.target).parent().parent().find(">:first-child").next();
               const nameReplays = $(ev.target).parent().parent().find(">:first-child").next().val();
              console.log(nameReplays);
              const avatarReplays = $(ev.target).parent().parent().find(">:first-child").next().next().val();
              console.log(avatarReplays);
              const commentTextReplays = $(ev.target).parent().parent().find(">:first-child").next().next().next().val();
              console.log(commentTextReplays);
              const newPostReplay = firebase.database().ref('posts')
              .child(b + '/comments' + $(ev.target).val() + 'replay/')
              .push().key;
              const newReplay = {
                'nameReplay': nameReplays,
                'avatarReplay': avatarReplays,
                'commentTextReplay': commentTextReplays,
              };

              const updates={};
              updates['/posts/' + b +'/'+'comments/' + $(ev.target).val()+'/replay/' + newPostReplay] = newReplay;

              if (nameReplays !== '' && commentTextReplays !== '') {
                toastr.success('Done!');
                 return firebase.database().ref().update(updates);
              } else {
                toastr.error('name and content are required!');
              }
             });
          });
      });
};


export { singlePostController };

