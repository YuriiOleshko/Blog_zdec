import axios from 'axios';



export function getBase() {

    axios.get('https://simple-blog-api.crew.red/posts')
    .then(data => console.log(data))
    .catch(err=> console.log(err))

    return axios.get(' https://simple-blog-api.crew.red/posts')
}


export function getMessenge(id) {

        return axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
}

