import { ADD_TO_CART, FETCH_ALL_PRODUCTS, FETCH_ALL_PRODUCTS_FAILURE, FETCH_ALL_PRODUCTS_SUCCESS } from "../Actions/Types/ActionTypes";

const initialState={
    loading:true,
    allProducts:[],
    error:null
}

export const AllProductsReducers=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_ALL_PRODUCTS:
            return{
                ...state,
                loading:true
            }
            
        case FETCH_ALL_PRODUCTS_SUCCESS:
            return{
                ...state,
                allProducts:action.payload,
                loading:false,
                error:null
            }
            case FETCH_ALL_PRODUCTS_FAILURE:
            return{
                ...state,
               error:action.payload,
               allProducts:[],
                loading:false
            }
    
        default:
            return state;
    }

}
