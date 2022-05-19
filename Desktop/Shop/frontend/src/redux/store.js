import {createStore,combineReducers,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {loginReducer,userDetails, updateReducer, userRegisterReducer} from "./Reducers/userReducer";
import { orderCreateReducer,orderDetails,orderPayReducer,orderList} from "./Reducers/orderReducer";
import { prodcutDetailsReducer,productListReducer,productReviewReducer } from "./Reducers/productReducer";
import { cartReducer } from "./Reducers/cartReducer";
const reducers = combineReducers({
    userLogin : loginReducer,
    userRegister  : userRegisterReducer,
    cart : cartReducer,
    details : userDetails,
    userUpdate : updateReducer,
    productList : productListReducer,
    productDetails : prodcutDetailsReducer,
    productReviewCreate : productReviewReducer,
    orderCreate : orderCreateReducer,
    orderInfo : orderDetails,
    orderPay : orderPayReducer,
    orderListMy : orderList
})
const cartItemsFromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const userInfoFromLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {};

const initialState = {
    cart : {
        cartItems: cartItemsFromLocalStorage,
        shippingAddress : shippingAddressFromLocalStorage
    },
 
        userLogin : {userInfo : userInfoFromLocalStorage}
   
}

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
)

export default store;