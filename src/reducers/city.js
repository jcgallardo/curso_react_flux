import { SET_CITY }  from './../actions';

export const city = (state = {}, action) => {
    switch(action.type){
        case SET_CITY:
            return action.payload; // copia del estado + action.value si es diferente
        default:
            break;
    }
    return state;
}