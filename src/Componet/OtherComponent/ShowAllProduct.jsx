

const ShowAllProduct = ({proDis ,proName , proPrice , proCate , proImg}) => {
    

  return (

     <div className="w-72 bg-white border rounded-md shadow-sm overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img src={proImg} alt="item" className="w-full h-44 object-cover" />
       
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
          ❤️
        </button>
      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold text-gray-800">₹ {proPrice}</h3>
        <p className="text-sm text-gray-600 truncate">{proName}</p>
        <div className="text-xs text-gray-500 mt-2">
          <div>{proCate}</div>
          <div>{proDis}</div>
        </div>
      </div>
      </div>
  )
}

export default ShowAllProduct
