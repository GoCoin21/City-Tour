import axios from "axios";

import { PRODUCT_LIST_REQUEST,
        PRODUCT_LIST_SUCCESS,
        PRODUCT_LIST_FAIL,
        PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCCESS,
        PRODUCT_DETAILS_FAIL,
        PRODCUT_CREATE_REVIEW_REQUEST,
        PRODUCT_CREATE_REVIEW_SUCCESS,
        PRODUCT_CREATE_REVIEW_FAIL,
  } from "../Constant/productConstants";
import {logout} from "./userAction";

//PRODUCT LIST
export const listProduct = (keyword="",pageNumber="") => async(dispatch) => {
        try{
           dispatch({type : PRODUCT_LIST_REQUEST})
           const {data} = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`)
           dispatch({type : PRODUCT_LIST_SUCCESS,payload : data})
        }catch(err){
           dispatch({type : PRODUCT_LIST_FAIL, payload : err.response && err.response.data.message ? err.response.data.message : err.message})
        }
}
//SINGLE PRODUCT
export const listProductDetails = (productId) => async (dispatch) => {
        try{
          dispatch({type : PRODUCT_DETAILS_REQUEST});
          const {data} = await axios.get(`/api/products/${productId}`)
          dispatch({type : PRODUCT_DETAILS_SUCCESS,payload : data})
        }catch(err){
          dispatch({type : PRODUCT_DETAILS_FAIL,payload : err.response && err.response.data.message ? err.response.data.message : err.message})
        }
}
//CREATE PRODUCT REVIEW
export const createReview = (productId,review) => async (dispatch,getState) => {
        try{
          dispatch({type : PRODCUT_CREATE_REVIEW_REQUEST})

          const { userLogin : {
                  userInfo
          }} = getState()

          const config = {
                  headers : {
                          "Content-Type" : "application/json",
                          "Authorization" : `Bearer ${userInfo.token}`
                  }
          }

          await axios.post(`/api/products/${productId}/review`,review,config)
          dispatch({type:PRODUCT_CREATE_REVIEW_SUCCESS})
        }catch(err){
          const message = err.response && err.response.data.message ? err.response.data.message : err.message
          if(message === "Not authorized, token failed"){
                  dispatch(logout());
          }
          dispatch({type: PRODUCT_CREATE_REVIEW_FAIL,payload : message})
        }
}
