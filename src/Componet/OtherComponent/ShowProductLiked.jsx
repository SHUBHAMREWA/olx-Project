import { FaHeart } from "react-icons/fa";



const Showwishlist = ({proDis ,proName , proPrice , proCate , proImg, proId , LikedProducts}) => {
  return (

     <div className="w-80 bg-white border rounded-md shadow-sm overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img src={proImg && proImg[0]} alt="item" className="w-full h-44 object-cover" />
       
        <button 
        onClick={()=> proId && LikedProducts && LikedProducts(proId)} 
        className="absolute top-2 right-2 bg-black hover:text-white rounded-full p-2 text-red-600 text-lg shadow-sm">
            <FaHeart/> 
        </button>
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

export default Showwishlist
