import { FETCH_GALLERY_MENU, FETCH_GALLERY_MENU_FAILURE, FETCH_GALLERY_MENU_SUCCESS } from "../Actions/Types/ActionTypes";

const initialState=[{loading:true,menu:[],error:null}];

export const GalleryMenuReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case FETCH_GALLERY_MENU:
            return{
                ...state,
                loading:true
            }
            case FETCH_GALLERY_MENU_SUCCESS:
                return{
                    ...state,
                    menu:payload,
                    loading:false,
                    error:null
                }
                case FETCH_GALLERY_MENU_FAILURE:
                    return{
                        ...state,
                        menu:[],
                        error:payload,
                        loading:false
                    }
            default:
                return state
    }
}
