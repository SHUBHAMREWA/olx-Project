
import cate from "../jsonFiles/catergories.json"  ; 



const Categories = ({searchByCategory}) => {
  return (
    <div className="p-3">

        <span className="text-lg"> Search By Categories  :-</span>
       {
        cate.length > 0 &&  cate.map((el, index)=>{
              return <button  
              onClick={()=> searchByCategory && searchByCategory(el)}
               key={index+Math.random()} className="px-2 mx-1 text-blue-500  outline outline-1 ">{el}</button>
         })
       }
    </div>
  )
}

export default Categories
