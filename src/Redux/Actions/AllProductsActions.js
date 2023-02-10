import axios from "axios"
import { ADD_TO_CART, FETCH_ALL_PRODUCTS } from "./Types/ActionTypes"
import { FETCH_ALL_PRODUCTS_SUCCESS } from "./Types/ActionTypes"
import { FETCH_ALL_PRODUCTS_FAILURE } from "./Types/ActionTypes"

export const fetchAllProducts=()=>{
    return{
        type:FETCH_ALL_PRODUCTS
    }
}
export const fetchAllProductsSuccess=products=>{
    return{
        type:FETCH_ALL_PRODUCTS_SUCCESS,
        payload:products
    }
}
export const fetchAllProductsFailure=error=>{
    return{
        type:FETCH_ALL_PRODUCTS_FAILURE,
        payload:error
        
    }
}

export const fetchProducts=()=> async (dispatch)=>{
        dispatch(fetchAllProducts);
        await axios.get("http://localhost:8001/products").then(response=>{
                dispatch(fetchAllProductsSuccess(response.data))
        }).catch((err)=>{
            dispatch(fetchAllProductsFailure(err))
        }) 
    }

