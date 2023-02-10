import { ADD_TO_CART } from "./Types/ActionTypes"
export const addtoCart=(item)=>{
  return{
    type:ADD_TO_CART,
    action:item
  }
}
