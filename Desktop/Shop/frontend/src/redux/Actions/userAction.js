import axios from "axios";
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_RESET,
    USER_UPDATE_PROFILE_FAIL,
    USER_LOGOUT,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_RESET,
    USER_DETAILS_FAIL
} from "../Constant/userConstant.js";
//REGISTER
export const register = (name,email,password) => async(dispatch) => {
    try{
        dispatch({type : USER_REGISTER_REQUEST});

        const config = {
            headers : {
                "Content-Type" : "application/json",
            }
        }

        const {data} = await axios.post(
            `/api/users/register`,{name,email,password},config
        )
        dispatch({type : USER_REGISTER_SUCCESS, payload : data});
        dispatch({type : USER_LOGIN_SUCCESS, payload : data});

        localStorage.setItem("userInfo",JSON.stringify(data));
    }catch(err){
      dispatch({type : USER_REGISTER_FAIL, payload : err.response && err.response.data.message ? err.response.data.message : err.message})
    }
}
// LOGIN
export const login = (email,password) => async(dispatch) => {
    try{
       dispatch({type : USER_LOGIN_REQUEST});

       const config = {
           headers : {
               'Content-Type' : "application/json"
           }
       }
       const {data} = await axios.post(
           `/api/users/login`,
           {email,password},
           config
       )
       dispatch({type : USER_LOGIN_SUCCESS,payload : data})
       localStorage.setItem("userInfo",JSON.stringify(data))
    }catch(err){
      dispatch({type : USER_LOGIN_FAIL,payload : err.response && err.response.data.message ? err.response.data.message : err.message})
    }
}
// logout
export const logout = () => async(dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({type : USER_LOGOUT});
    dispatch({type : USER_DETAILS_RESET});

}
//Update
export const updateUser = (user) => async(dispatch) => {
    try{
       dispatch({type : USER_UPDATE_PROFILE_REQUEST});

     const config = {
         headers : {
             "Content-Type" : "application/json",
             "Authentication" : `Bearer ${user.token}`
         }
     }
     const {data} = await axios.put(`/api/users/profile`,user,config)
     dispatch({type : USER_UPDATE_PROFILE_SUCCESS,payload : data})
     dispatch({type : USER_LOGIN_SUCCESS,payload : data})
     localStorage.setItem("userInfo",JSON.stringify(data))
    }catch(err){
      const message = err.response && err.response.message.body ? err.response.data.message : err.message
      if(message === "Not authorized, token failed"){
          dispatch(logout())
      }
      dispatch({type :USER_UPDATE_PROFILE_FAIL,paylod : message})
    }  
}