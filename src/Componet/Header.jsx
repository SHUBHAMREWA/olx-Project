
import { Link } from "react-router-dom"
import Cookies from "universal-cookie";

const Header = () => {

    let cookie = new Cookies();

    let token =  cookie.get("loginToken")

    return (

        <div>
            <div className=" p-4 text-lg  shadow-md"> 
               <Link className="text-blue-500 shadow-md" to="/"> Home </Link>
                Sell & Purchase Online In Your City....
                <span >

                 
                    {
                 //    {/* if token found the login button not showing here */}
                         !token  ?
                            <Link className="text-blue-500 shadow-md" to="/login"> Login </Link>
                            : <button className="outline outline-1 shadow-md px-2 ms-2" > LogOut </button>
                    }

                </span>
            </div>
        </div>

    )

}


export default Header;