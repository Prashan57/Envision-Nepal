import { createContext, useContext, useEffect, useState } from "react";
import { loginUserApi, postUser } from "../api/user";



export const UserContext= createContext()
export const useUserContext=()=> useContext(UserContext)



export const UserProvider= ({children})=>{
    const[user,setUser]= useState({
        name:"",
        address:"",
        email:"",
        password:"",
        phone:"",
        pan:""
    })

    const [users,setUsers]= useState([])

    const [isLoggedIn,setIsLoggedIn]=useState(false)

    useEffect(()=>{init()},[])


    const init=()=>{
        console.log("Initialize user provider")

        try{
            const userListString= window.localStorage.getItem("users");
            const userString= localStorage.getItem("currentUser")

            if(!!userListString){
                const userArray= JSON.parse(userListString)
                console.log(userArray)
                setUsers(userArray)
            }

            if(!!userString){
                const userObject= JSON.parse(userString)
                console.log(userObject)
                setUser(userObject)
                setIsLoggedIn(true)
            }
        }

        catch(e){
            console.log(e)
        }
    }


    const loginUser= async({
        email,
        password
    })=>{
        if(!password|!email){
            return{
                error:"All fields are required"
            }
        }

        try{
            const userResponse= await loginUserApi({email,password})
            console.log("Userdata from backend:", userResponse);
            localStorage.setItem("currentUser",JSON.stringify({email}))
            localStorage.setItem("accessToken",userResponse.data.accessToken)
            setUser({email})
            setIsLoggedIn(true)
            return{
                success:true
            }
        }

        catch(e){
            return{
                error:e?.response?.data?.message??"Something went wrong"
            }
        }
    }

    const registerUser= async({name,address,email,password,phone,pan})=>{
        try{
            const addedUser= await postUser({name,address,email,password,phone,pan})
            return addedUser
        }
        catch(e){
            return{
                error:e?.response?.data?.message??"Something went wrong"
            }
        }
    }


    return<UserContext.Provider value={{
        user,
        users,
        setUser,
        init,
        isLoggedIn,
        registerUser,
        loginUser,
    }}>
        {children}
    </UserContext.Provider>

}
