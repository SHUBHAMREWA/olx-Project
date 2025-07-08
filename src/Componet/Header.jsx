
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

             
 
              <div className="flex  items-center gap-6 justify-between">

                    <span><Link className="text-cyan-900 uppercase font-bold text-2xl" to="/"> Home </Link> </span> 


{/* search bar */}
                   <div className="flex-grow flex items-center justify-between">

                     <input type="text"
                       value = {search && search}
                       onChange={(e)=> setSearch && setSearch(e.target.value)} 
                       placeholder="Search Your Product"
                       className="flex-grow border-black border-2  p-2 outline-blue-500 border-e-0  rounded-sm m-0" /> 
                    <button  
                     onClick={()=>handleSearch && handleSearch(search && search) }
                    className=" outline-none bg-cyan-900 p-3 text-white text-2xl  border-s-0  " ><FaSearch /></button> </div>
                
                {/* ADD  product Btn */}
                    <Link
                    className="text-white hover:bg-cyan-800 bg-cyan-900 px-3 py-2 rounded-md "
                    to="/add-product"
                    >
                    Add Product
                    </Link>

                    {/* wishlist btn  or faviroure product btn*/} 
                   <Link
                    className="text-white hover:bg-cyan-800 bg-cyan-900 px-3 py-2 rounded-md "
                    to="/liked-product"
                    >
                    Wishlists
                    </Link>


                      <span >      
                   {
                  //    {/* if token found the login button not showing here */}
                         !token  ?
                            <Link className="text-white hover:bg-cyan-800 bg-cyan-900 px-3 py-2 rounded-md" to="/login"> Login </Link>
                            : <button
                             onClick={logOut}
                             className="text-white hover:bg-cyan-800 bg-cyan-900 px-3 py-2 rounded-md" > LogOut </button>
                    }
                  </span>

               </div>

               
             
            </div>
        </div>

    )

}


export default Header;