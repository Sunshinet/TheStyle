import {templates} from 'templates';
const singlePostController = function(params){

    let c = params.mainCategorie;
    let b = params.id;

    console.log(c);
    console.log(b);
    templates.getPage('singlePost')
}

export { singlePostController }