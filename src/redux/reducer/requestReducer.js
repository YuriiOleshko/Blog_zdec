export default function blog (state=[], action) {
    switch (action.type) {
        case 'DOWNLOADED':
        console.log(action.data)
            return [...action.data.data];
        default: 
            return state;
    }
}