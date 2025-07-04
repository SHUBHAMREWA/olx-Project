
import Header from "./Header";
import Cookies from "universal-cookie";
import { useNavigate , Link } from "react-router-dom";
import ShowAllProduct from "./OtherComponent/ShowAllProduct";
import { useEffect  , useState} from "react";
import axios from "axios" ;


const Home = () => {

  const  [allProduct , setAllProduct] = useState([])
    let cookie = new Cookies() ; 
     let navigate = useNavigate();

     useEffect(()=>{
            let getToken = cookie.get("loginToken")  ;

            if(!getToken){
                     navigate("/login")
            }
     } , [])

     useEffect(()=>{
           
         axios({
               method : "get" , 
               url : "http://localhost:3500/allProducts" 
         })
         .then((data)=>{
         
                 setAllProduct(data.data.products)
         })
         .catch((error)=>{
           console.log(error)
         })


        
     } , [])

  return (
    <div> 
        <Header/>
        Welcome to Home page....
   <br /> 
   <br />
        <Link className="text-blue-500 underline underline-offset-4" to="/add-product">Add Product</Link>

        <h2>My Product</h2> 

        <div className="flex flex-wrap gap-2 justify-around">

    {   allProduct && allProduct.length > 0 &&  
    allProduct.map((el , index)=>{ 
             return <ShowAllProduct key={index+Math.random()} proDis = {el.productDescription} 
                                                         proName = {el.productName} 
                                                         proPrice  = {el.productPrice}
                                                         proCate   = {el.productcategory}
                                                         proImg = {el.productImage}    />  
                                                            })
     }

        </div>

    </div>
  )
}

export default Home ;
