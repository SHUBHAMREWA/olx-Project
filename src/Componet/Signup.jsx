
import { Link } from "react-router-dom" ;
import Header from "./Header";
import { useState } from "react";
import { FaEye , FaEyeSlash  } from "react-icons/fa";  
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Signup = () => {

     let location = useNavigate() 

    const [input ,setInput] =  useState({ 
           username : "" , 
           password : ""
    })

    const [showPass , setShowPass] = useState(true)  


     
    const changeValue = (e) => {  
         
        let input  = e.target ;  
        let key = input.name ; 
        let value = input.value ; 

        setInput((oldData)=>{
              return {
                  ...oldData , 
                     [key] : value
              }
        })
         
    }


    const handleApi = async(e)=>{ 

        e.preventDefault() ;


        try{
           const response = await axios({
                      method : "post" , 
                      url    : "http://localhost:3500/signup"  , 
                      data : input  , 
                       headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer your_token_here'
                          }
        })
  
        if(response.data.success){

          let getAction = window.confirm("signup success to login ") ; 
             getAction ? location("/login") :  location("/signup")
        }
        else{
             window.alert(response.data.message)
        }

        }
        catch(error){
            
          console.log(error)
          window.alert(error.message)
           
        }
       

    }

    





  return (
    <div > 
        <Header/>

        <div className="flex flex-col justify-between gap-7 items-center mt-5 ">
        Welcome to SignUp
         <form onSubmit={handleApi}
          className="">


            UserName
            <input className=" ml-2 outline-1 outline-blue-600 p-1  bg-gray-300" type="text"   
            name="username"
            onChange={changeValue}
            value={input.username}
            /> <br />
            <br />


            Password
            <input className="ml-2 outline-1 outline-blue-600 p-1 bg-gray-300"  type={showPass ? "password" : "text"}  
            name="password"
            onChange={changeValue} 
            value={input.password}
            />  
            <br />
            <div className="w-full flex justify-end pe-3 mt-2" ><button  
            type="button"
            onClick={()=>setShowPass(!showPass)}
            >  { showPass ? <FaEye/> : <FaEyeSlash/>} </button></div>

            <br />
          
            <button type="submit" className="border border-blue-500 p-2" >SignUp</button>
            <Link to="/login">Login</Link>
          
         </form>

         </div>
    </div>


  )
}

export default Signup
