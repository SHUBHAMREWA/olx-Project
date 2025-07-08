
import { useEffect, useState } from "react" ;
import Header from "../Header" ; 
import Cookies from "universal-cookie";
import axios from "axios";
import Showwishlist from "../OtherComponent/ShowProductLiked";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3500/"

const LikedProducts = () => {
 
    let cookie =  new Cookies() 
    let navigate  = useNavigate()
       

    const [likedProducts , setLikedProducts]  = useState([]) ;  

    // console.log(likedProducts)


    useEffect(()=>{
  
        let token = cookie.get("loginToken") ;

        if(!token) navigate("/login")

          axios({
             method : "post" , 
             url : "/get-liked-products" ,
             data : {
               token
             }
          })
          .then((result)=>{

            //  console.log(result.data.success)
            //  console.log(result.data)
       
              if(result.data.success){  
                               
                setLikedProducts(result.data.lproducts)
              }

          })
          .catch((error)=>{
             alert("server error")
          })
          
    } , [])



  return (
    <div>  
          <Header  />
         
          <h1 className="mt-5">My WishList ❤️</h1>   <br />

  <div className="flex flex-wrap gap-2 justify-around">

    {  
        likedProducts && likedProducts.length > 0 && 
        likedProducts.map((el, index)=>{ 
               return <Showwishlist
                key={index + Math.random()}
                proDis={ el.productDescription}
                proName={el.productName}
                proPrice={el.productPrice}
                proCate={el.productcategory}
                proImg={el.productImage}
                 />
        })
    }


  </div>
         

    </div>
  )
}

export default LikedProducts
