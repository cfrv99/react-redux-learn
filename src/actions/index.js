export const increment = ()=>{
    return {
        type:"INCREMENT"
    }
}

export const decrement = ()=>{
    return{
        type:"DECREMENT"
    }
}

export const test = (payload)=>{
    return {
        type:"TEST",
        payload: payload
    }
}

export const listAdd = (payload)=>{
    return {
        type:"LISTADD",
        payload:payload
    }
}