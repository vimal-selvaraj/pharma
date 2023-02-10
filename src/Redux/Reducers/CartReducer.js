import { act } from "react-dom/test-utils";
import { ADD_TO_CART, INCREASE, REMOVE } from "../Actions/Types/ActionTypes";

// const fetchAllProducts=async()=>{
//     await axios.get("http://localhost:8001/products").then(res=>{return res.data}).catch(err=>console.log(err));
// }
// fetchAllProducts();
// const allProducts=axios.get("http://localhost:8001/products").then(res=>{return res.data}).catch(err=>console.log(err));
// const temporaryProducts=allProducts;
// let cart=["sds"];
// export const CartReducer=(state=cart,action)=>{
//     switch(action.type){
//         case "ADD_TO_CART":
//             return[...state,action.payload]
//             // const product=temporaryProducts.filter((item)=>{return(item.id===action.payload.id)});
//             // if(product.length>0){
//             //     return[...state,action.payload]
//             // }
//             // else{
//             //     return state
//             // }   
//             default:
//                 return state 
//     }
// }
// let cart=[]
export const cartReducer=(state=[],action)=>{
    if(action.type==ADD_TO_CART){
        let existingItem=state.find((item)=>item.id==action.payload.id)?true:false
        if(existingItem){
           let temporaryCart=state;
           let quantity=temporaryCart.map((item)=>{
           if(item.id===action.payload.id){
            return{...item,qty:item.qty+1}
           }
           return item
           })
           return quantity
        }
            return[...state,action.payload]
    }
    if(action.type==INCREASE){
        let tempCart=state;
        let qty=tempCart.map((item)=>{
            if(item.id===action.payload.id){
                return{
                    ...item,
                    qty:item.qty+1
                }
            }
            return item
           })
           return qty;
    }
    if(action.type=="DECREASE"){
        let tempCart=state;
        let qty=tempCart.map((item)=>{
            if(item.id===action.payload.id){
                return{
                    ...item,qty:item.qty-1
                }
            }
            return item
        })
        return qty
     }
     if(action.type===REMOVE){
        // let tempCart=state;
        let remainingItems=state.filter((element)=>element.id!==action.payload.id);
        return remainingItems;
     }
    return state
}