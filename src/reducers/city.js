import { SET_CITY }  from './../actions';

export const city = (state = {}, action) => {
    console.log("state",state,"action", action);
    switch(action.type){
        case SET_CITY:
            return action.valor; // copia del estado + action.value si es diferente
        default:
            break;
    }
    return state;
}