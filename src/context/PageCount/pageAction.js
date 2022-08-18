import { PAGE_COUNT_DEC, PAGE_COUNT_INC } from "./pageActionType"



export const getINCPage = () => async(dispatch)=>{

            dispatch({type: PAGE_COUNT_INC})  
            return  

 }
export const getDECPage = () => async(dispatch)=>{

            dispatch({type: PAGE_COUNT_DEC})  
            return  

 }

