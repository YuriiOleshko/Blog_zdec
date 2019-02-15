import {getBase} from '../api/api'

 export function addInfoToBlog(data) {
     return {
         type: 'DOWNLOADED',
         data,
     }
 }

 export const fetchData = () => dispatch => {
     return getBase()
    //  .then(data=> console.log(data))
     .then(data => dispatch(addInfoToBlog(data)))
     .catch(err=> console.log(err))
 }
 

// function createFullBlog(data){
//     let posts = data[0].data;
//     let userName = data[1].data
//     let comments = data[2].data

//     // console.log (posts)
//     // console.log(userName)
//     // console.log(comments)

//     let result = posts.map(el => ({title:el.title, body:el.body, userName: userName.filter(name => name.id === el.userId ? el : null)[0].name, comments: comments.filter((com) => com.postId === el.id).length  }))

//     // console.log(result)

//     return result
// }
