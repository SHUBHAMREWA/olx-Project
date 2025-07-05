
import { Link, useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"; 
import { FaSearch } from "react-icons/fa";

const Header = ({ setSearch , search , handleSearch}) => {

     let navigate = useNavigate() ;
    let cookie = new Cookies();
    let token =  cookie.get("loginToken") ;

    const logOut = ()=>{
        cookie.remove("loginToken")
        navigate("/login")
    }

    return (

        <div>
            <div className=" p-4 text-lg  shadow-md"> 

             
 
              <div className="flex  items-center gap-6 justify-start">

                    <span><Link className="text-blue-500 shadow-md underline underline-offset-4" to="/"> Home </Link> </span> 

                   <div className="flex items-center justify-between">
                     <input type="text"
                       value = {search && search}
                       onChange={(e)=> setSearch && setSearch(e.target.value)} 
                       className="border-black border-2 p-2 outline-blue-500 border-e-0  rounded-sm m-0" /> 
                    <button  
                     onClick={handleSearch && handleSearch }
                    className=" outline-none bg-cyan-900 p-3 text-white text-2xl  border-s-0  " ><FaSearch /></button> </div>


                      <span >      
                   {
                  //    {/* if token found the login button not showing here */}
                         !token  ?
                            <Link className="text-blue-500 shadow-md" to="/login"> Login </Link>
                            : <button
                             onClick={logOut}
                             className="outline outline-1 shadow-md px-2 ms-2" > LogOut </button>
                    }
                  </span>

               </div>

               
             
            </div>
        </div>

    )

}


export default Header;