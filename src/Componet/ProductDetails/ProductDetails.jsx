import { useEffect , useState } from "react"
import { useParams  } from "react-router-dom"
import axios from "axios"; 
import Header from "../Header";

const ProductDetails = () => {

    const [ product , setProduct ]   = useState({
                   productName: null,
                    productDescription: null,
                    productPrice: null,
                    productcategory: null,
                    productImage: null,
    }) ;

     let {id} = useParams() ;
      
     useEffect( ()=>{
                    axios({
                    method : "get" , 
                    url : `http://localhost:3500/product/${id}` 
                    })
                    .then((result)=>{
                         setProduct(result.data.data)
                        
                    })
                    .catch((error)=>{
                        console.log(error)
                        
                      console.log("product not found")
                       setProduct({
                    productName: 'cloth',
                    productDescription: 'new cloth',
                    productPrice: '1299',
                    productcategory: 'cloth',
                    productImage: 'http://res.cloudinary.com/dkc2fkpkp/image/upload/v1751638324/OLX-product/x466dcnfcp1ief7tvwmx.png',
              })
                    })
     } , [])
     

  return (
      <div>
        <Header/>
   <div className="max-w-4xl mx-auto my-10 p-4 bg-white shadow-lg rounded-xl border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Product Image */}
        <div>
          <img
            src={product.productImage}
            alt="Product"
            className="w-full h-[400px] object-cover rounded-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.productName}</h2>
            <p className="text-sm text-gray-500 mt-1">{product.productcategory}</p>
          </div>

          <p className="text-gray-700 text-md">{product.productcategory}</p>

          <div className="text-3xl font-semibold text-green-600">
            ₹ {product.productPrice}
          </div>

          <button className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
    </div>
     
  )
}

export default ProductDetails
