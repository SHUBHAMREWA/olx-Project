import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



  

const ShowAllProduct = ({proDis ,proName , proPrice , proCate , proImg, proId , LikedProducts }) => {

       let navigate = useNavigate()  ;

    const  showProductDetails = async(id)=>{  
                navigate("/product/"+id)  
    }

  return (

     <div 
       className="w-80 relative bg-white border rounded-md shadow-sm overflow-hidden hover:shadow-lg transition"> 

        <button 
        onClick={()=> proId && LikedProducts && LikedProducts(proId)} 
        className="absolute top-2 right-2 bg-black text-white rounded-full p-2 hover:text-red-600 text-lg shadow-sm">
            <FaHeart/> 
        </button>

      <div onClick={()=> showProductDetails(proId)}>

        <img src={proImg &&  proImg[0]} alt="item" className="w-full h-44 object-cover" />
       
       

      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold text-gray-800">₹ {proPrice && proPrice}</h3>
        <p className="text-sm text-gray-600 truncate">{ proName && proName}</p>
        <div className="text-xs text-gray-500 mt-2">
          <div>{proCate && proCate}</div>
          <div>{proDis && proDis}</div>
        </div>
      </div>
      </div>
  )
}

export default ShowAllProduct
