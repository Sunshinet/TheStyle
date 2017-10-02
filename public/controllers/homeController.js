import {templates} from 'templates';
import 'bootstrap';
import 'pagination';

  function all(){
     let dbRef = firebase.database().ref('posts').orderByKey();
        dbRef.once('value', (snap) => {
          let f =[]
            snap.forEach(element => {
                 let dbElements = {
                  'author' : element.val().author,
                  'content' : element.val().content,
                  'title': element.val().title,
                  'categorie': element.val().categorie,
                  'mainCategorie': element.val().mainCategorie,
                  'id': element.val().id
                };
              f.push(dbElements);
            })
            console.log(f)
             templates.getPage('home', f);
        })
  }
  

  function getByPage(){
      
  }

let homeControl = {
     all,
     getByPage
}

export { homeControl as homeController }
 