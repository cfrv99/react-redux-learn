const stateListReducer=(state = [],action)=>{
    switch (action.type) {
        case "LISTADD":
            return [action.payload,...state];
    
        default:
            return state;
    }
}

export default stateListReducer;