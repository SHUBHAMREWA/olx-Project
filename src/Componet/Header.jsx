
import {Link} from "react-router-dom"

const Header = ()=>{
         
return (

    <div>
       <div className=" p-4 text-lg  shadow-md">
        Sell & Purchase Online In Your City.... 
        <span >  <Link className="text-blue-500 shadow-md" to="/login"> Login </Link> </span> 
           </div>
    </div>
    
)

}


export default Header  ;