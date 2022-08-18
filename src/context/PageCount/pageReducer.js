
import { PAGE_COUNT_DEC,PAGE_COUNT_INC }from './pageActionType'

const initState = {

    count: 0
}


export const pageCountReducer = (state=  initState,{type,payload})=>{

    switch (type) {
        case PAGE_COUNT_INC :
            
        return {...state, count: state.count +20};
            
        case PAGE_COUNT_DEC :
            
            return {...state, count: state.count -20};
    
        default:
            return state;
    }


}