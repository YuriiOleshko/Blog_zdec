export default function message(state={},action){
  
        switch (action.type) {
            case "message":
            console.log(action.data)
            return {...action.data.data};
            case "addComment":
        //     console.log(state.comments,)
            let com =[...state.comments,  action.data]
                console.log(com)
            return {...state, comments: com}
                default:
                return state;
        }
    
}