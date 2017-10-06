import {templates} from 'templates';
import 'bootstrap';


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
                  'id': element.val().id,
                  'comments': element.val().comments,
                  'tags': element.val().tags
                };
                if(dbElements.title.length > 20){
                  dbElements.size = 'big';
                }
                console.log(dbElements);
              f.push(dbElements);
            })
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
 