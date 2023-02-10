import axios from "axios"
import { FETCH_SELECTED_PRODUCT,FETCH_SELECTED_PRODUCT_SUCCESS,FETCH_SELECTED_PRODUCT_FAILURE } from "./Types/ActionTypes"


export const fetchSelectedProduct=()=>{
    return{
        type:FETCH_SELECTED_PRODUCT
    }
}
export const fetchSelectedProductSuccess=product=>{
    return{
        type:FETCH_SELECTED_PRODUCT_SUCCESS,
        payload:product
    }
}
export const fetchSelectedProductFailure=error=>{
    return{
        type:FETCH_SELECTED_PRODUCT_FAILURE,
        payload:error
        
    }
}

export const fetchProduct=(id)=> async (dispatch)=>{
        dispatch(fetchSelectedProduct);
        await axios.get(`http://localhost:8001/products/${id}`).then(response=>{
                dispatch(fetchSelectedProductSuccess(response.data))
        }).catch((err)=>{
            dispatch(fetchSelectedProductFailure(err))
        }) 
    }
    
