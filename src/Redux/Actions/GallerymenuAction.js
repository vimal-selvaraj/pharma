import axios from "axios";
import { FETCH_GALLERY_MENU, FETCH_GALLERY_MENU_FAILURE, FETCH_GALLERY_MENU_SUCCESS } from "./Types/ActionTypes";

const fetchGalleryMenu = () => {
    return {
        type: FETCH_GALLERY_MENU,
    }
}
const fetchGalleryMenuSuccess = menu => {
    return {
        type: FETCH_GALLERY_MENU_SUCCESS,
        payload: menu
    }
}
const fetchGalleryMenuFailure = err => {
    return {
        type: FETCH_GALLERY_MENU_FAILURE,
        payload: err
    }
}

export const fetchGalleryMenuItems = () => async (dispatch) => {
    dispatch(fetchGalleryMenu);
    await axios.get("http://localhost:8001/menuItems")
    .then((response) => { dispatch(fetchGalleryMenuSuccess(response.data)) })
    .catch((err) => { dispatch(fetchGalleryMenuFailure(err)) })
}