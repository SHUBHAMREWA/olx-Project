
import { useEffect, useState } from "react";
import Cookies from "universal-cookie"  ;
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from 'axios'

const AddProduct = () => {
 
     let cookie = new Cookies() ;
     let navigate = useNavigate() ; 

     const  [inputVal , setInputVal]  = useState({
         productName  : ''  ,
         productDescription : '' ,
         productPrice : "" ,
         productcategory : "" ,

     })


     useEffect(()=>{
        let token = cookie.get("loginToken") ;

        if(!token){
           window.alert("login first")
            navigate("/login")
        }
          
     } ,[])



     const handleInputVal = (e)=>{
            let input = e.target ;
            let name = input.name ;
            let val ;
            if(input.type == "file"){
                 val = input.files
                 console.log(val)
            }else{
              val = input.value  
            }


            setInputVal((oldData)=>{
                   return {
                        ...oldData, 
                        [name] : val
                   }
            })
     }

//  onSubmit function on Form

    const handleFormData = async(e)=>{

        e.preventDefault() ;

          let form = e.target ;

          let formData = new FormData(form) ;

        let getRes =  await handleApi(formData)  ;

  alert("Product uploaded success ful") ;
        console.log(getRes)

          
          setInputVal({
             productName  : ''  ,
         productDescription : '' ,
         productPrice : "" ,
         productcategory : "" ,
          })

          form.reset() ;

         navigate("/")
         
    }


    // Add product send Data in SERVER through API
    
     const handleApi = async(formData)=>{

         try{
             let response = await axios({ 
                       method : "POST" , 
                       url : "http://localhost:3500/product-details" ,
                       data : formData , 
                     headers: {
                             "Content-Type": "multipart/form-data"
                                  }
             })

             return response ;
         }
         catch(error){
             console.log(error)
         }
        }

  return (
    <div>
        <Header/>
         <div  className="w-full max-h-min  bg-gray-200 flex flex-col items-center " > <br />
            <h1 className="text-3xl self-start">Add your product Here :- </h1>
           
             <form 
             onSubmit={handleFormData}
              className="mt-3 flex flex-col gap-6 w-1/2">

             
                       <div>
                           <label>Product Name</label>
                           <input name="productName" className="p-2 font-mono text-xl rounded-md w-full" type="text"
                             onChange={handleInputVal} value={inputVal.productName}/>
                       </div>


                       <div>
                           <label>Product Description</label>
                           <input name="productDescription" className=" p-2 w-full text-xl rounded-md" type="text" 
                            onChange={handleInputVal} value={inputVal.productDescription}/>
                       </div>


                       <div>
                           <label>Product Price</label>
                           <input name="productPrice" className="p-2 w-full text-xl rounded-md" type="text" 
                            onChange={handleInputVal} value={inputVal.productPrice}/>
                       </div>


                       <div>
                           <label>Product Category</label>
                           <select className="w-full p-2 rounded-md outline-blue-500" 
                           onChange={handleInputVal}
                           name="productcategory" value={inputVal.productcategory} >
                             <option>---Select---</option>
                             <option>Bike</option>
                             <option>car</option>
                             <option>Phone</option>
                             <option>Cloth</option>
                             <option>Laptop</option>
                          </select>
                       </div>


                       <div>
                           <label>Product Images</label>
                           <input name="productImage"  className=" bg-white p-2 w-full rounded-md" type="file" accept="image/*"  multiple  onChange={handleInputVal} />
                       </div>



                       <button className=" rounded-md mb-2 self-start px-3 p-2 bg-blue-500 text-white"> Submit </button>

             </form>

         </div>
    </div>
  )
}

export default AddProduct ;
