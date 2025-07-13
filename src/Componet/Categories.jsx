
import cate from "../jsonFiles/catergories.json"  ; 
import { useMatch, useNavigate } from "react-router-dom";
import { useResolvedPath } from "react-router-dom";
import { useParams } from "react-router-dom";

const Categories = () => {
    
    let {catName} = useParams() ;

   

    let navigate = useNavigate() ;

  return (
    <div className="shadow-md mt-1 p-3">

        <span className="text-lg"> Search By Categories  :-</span>
       {
        cate.length > 0 &&  cate.map((el, index)=>{


              return <button  
              onClick={()=> navigate("/category/" + el) }
               key={index+Math.random()}

               className = { `${catName == el ? `bg-blue-500 text-white` : null}  px-2 hover:bg-blue-500 transition-colors hover:text-white mx-1 text-blue-500 `} >  {el}</button>
         })
       }
    </div>
  )
}

export default Categories
