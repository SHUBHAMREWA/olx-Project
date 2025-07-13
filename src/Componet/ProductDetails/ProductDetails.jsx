import { useEffect , useState } from "react"
import { useParams  } from "react-router-dom"
import axios from "axios" ; 
import Header from "../Header" ;
import Slider from "react-slick" ;
import SliderImages from "./SliderImages";
import "./slider.css" ;

// slider carousel Style 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ProductDetails = () => {

    const [ product , setProduct ]   = useState({
                   productName: null,
                    productDescription: null,
                    productPrice: null,
                    productcategory: null,
                    productImage: [],
                     addedBy : '' 
    }) ;

    const [showUser , setShowUser]   = useState(false)

     let {id} = useParams() ;

   const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 ,
        autoplay: true ,

  };
      
     useEffect( ()=>{
                    axios({
                    method : "get" , 
                    url : `http://localhost:3500/product/${id}` 
                    })
                    .then((result)=>{
                        console.log(result)
                         setProduct(result.data.data)
                        
                    })
                    .catch((error)=>{
                        console.log(error)
                        
                      console.log("product not found")
                       setProduct({
                    productName: '',
                    productDescription: '',
                    productPrice: '',
                    productcategory: '',
                    productImage: [],                     
                        addedBy : '' 
              })
                    })
     } , [])
     

  return (
      <div>
        <Header/>
   <div className="max-w-4xl mx-auto my-10 p-4 bg-white shadow-lg rounded-xl border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Product Image */}
        <div className="slider-container p-3 ">  
        <Slider  {...settings}>      

        {

         product &&  product.productImage.length > 0 &&
              product.productImage.map((el ,index)=>{ 
                 return <SliderImages key={index} img={el}/>
              })
        }
       
          </Slider>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.productName}</h2>
            <p className="text-sm text-gray-500 mt-1">{product.productcategory}</p>
          </div>

          <p className="text-gray-700 text-md">{product.productDescription}</p>

          <div className="text-3xl font-semibold text-green-600">
            ₹ {product.productPrice}
          </div>

          <button 
          onClick={()=>setShowUser(!showUser)}
           className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
              Show User Datails
          </button>

           { product.addedBy && showUser &&   <div className="mt-5 ">
                        <h1>Name :- {product.addedBy &&product.addedBy.username }   </h1>
                        <h2>contact :- {product.addedBy && product.addedBy.mobile }</h2>
                        <h2>Email :-  {product.addedBy && product.addedBy.email }</h2>
                    </div>
        }

        </div>

      
      </div>
    </div>
    </div>
     
  )
}

export default ProductDetails
