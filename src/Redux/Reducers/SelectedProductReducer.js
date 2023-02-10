import { FETCH_SELECTED_PRODUCT, FETCH_SELECTED_PRODUCT_FAILURE, FETCH_SELECTED_PRODUCT_SUCCESS } from "../Actions/Types/ActionTypes";

const initialState={
    loading:true,
    selectedProduct:{},
    error:null
}
export const SelectedProductReducers=(state=initialState,action)=>{
    switch (action) {
        case FETCH_SELECTED_PRODUCT:
            return{
                ...state,
                loading:true
            }
            
        case FETCH_SELECTED_PRODUCT_SUCCESS:
           
            return{
                ...state,
                selectedProduct:action.payload,
                loading:false,
                error:null
            }
            case FETCH_SELECTED_PRODUCT_FAILURE:
            return{
                ...state,
               error:action.payload,
               selectedProduct:{},
                loading:false
            }
    
        default:
            return state;
    }

}