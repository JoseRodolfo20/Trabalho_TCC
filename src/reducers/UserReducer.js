export const InitialState = {
    fotoUsuario: '',
    favorites: [],
    appointments:[]
}

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setFotoUsuario':
            return{...state, fotoUsuario: action.payload.fotoUsuario};
        break;
        default:
            return state;
    }
}