import {GET_RANDOM_BREED} from '../actions/actions'

const initialState = {
    dog: '',
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RANDOM_BREED:
            return {
                ...state,
                dog: action.payload
            }
        default:
            return(state);
            
    }
}

export default reducer;