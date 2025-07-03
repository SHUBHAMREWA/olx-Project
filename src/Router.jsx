
import Home from "./Componet/Home"
import Login from "./Componet/Login";
import Signup from "./Componet/Signup";

const routes = [
     
    {
        path : "/", 
        element : <Home/>
    } 
    ,

    {
         path : "/login" , 
         element :  <Login/>
    }  
    , 
    {
        path : "/signup" ,
        element : <Signup/>
    }

]

export default routes ;