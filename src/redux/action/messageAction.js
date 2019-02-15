import {getMessenge} from '../api/api'
export const messege = (data) => ({
    type: 'message',

    data,
   
})
export const pushComment = (data) => ({
    type: 'addComment',
    data,
   
})
// export const pushComment = (data) => dispatch => {
//     return dispatch(addComment(data))
// }

export const openMes = (id) => dispatch => {
    return getMessenge(id)
    .then(data => dispatch(messege(data)))
    .catch(err=> console.log(err))
}