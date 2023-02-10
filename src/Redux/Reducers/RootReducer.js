import { combineReducers } from "redux";
import { AllProductsReducers } from "./AllProductsReducer";
import { SelectedProductReducers } from "./SelectedProductReducer";
import { cartReducer } from "./CartReducer";
import { GalleryMenuReducer } from "./GalleryMenuReducer";

export const Reducer=combineReducers({
    allProducts:AllProductsReducers,
    selectedProduct:SelectedProductReducers,
    cart:cartReducer,
    galleryMenu:GalleryMenuReducer
})