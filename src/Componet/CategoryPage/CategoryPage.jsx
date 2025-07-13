import Header from "../Header";
import Cookies from "universal-cookie";
import { useNavigate, Link } from "react-router-dom";
import ShowAllProduct from "../OtherComponent/ShowAllProduct";
import Categories from "../Categories";
import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";


axios.defaults.baseURL = "http://localhost:3500/"

const Home = () => { 

     let {catName}  = useParams() 



  const [CateProduct, setCateProduct] = useState([]) ;
  const [sSroduct , setsSroducts]   = useState("") ;

  const [search, setSearch]         = useState("")  ;
  let cookie = new Cookies();


  // useEffect(() => {
  //   let getToken = cookie.get("loginToken");

  //   if (!getToken) {
  //     navigate("/login");
  //   }
  // }, []);
 



// get all Product when Home page is show HTTP request for all Product
  useEffect(() => {
    axios({
      method: "get",
      url: "/searchbycategory/?catename=" + catName
    })
      .then((data) => {
        setCateProduct(data.data.categoryProducts)
        // console.log("data aa gaya")
      })
      .catch((error) => {
        console.log(error);
      });
  }, [catName]);


  // input keyword search function api request  
  const handleSearch = async(itemSearch) => {

         
    try{ 
         let response = await axios({
            method : "get" , 
            url : "http://localhost:3500/search/?value=" +itemSearch 
         })

         setsSroducts(response.data.products)

    }
    catch(error){
       console.log(error)
    }
      

  };


// add product ot wishlist function  api request

const LikedProducts = async(id)=>{
     let token = cookie.get("loginToken")   ;

     
       
      try{

         let response = await axios({
                     method : "POST" ,
                      url :  "/liked-products" , 
                      data  : {
                           token : token , 
                           productId : id
                      }
         })

         console.log(response) ;
         alert("product added to wishlist") ;

      }
      catch(error){
         alert("not added to wishlist")
      }
      
   
}



  return (
    <div>


      {/* =-------- Header Part Template File -------=*/}
      <Header
        setSearch={setSearch}
        search={search}
        handleSearch={handleSearch}
      />
      <Categories  />
      <br />


{/* ---------------------------------------------------------- */}

      {/* Search Result or Product show */}

      { search &&  sSroduct && sSroduct.length > 0 && <h1 className="mb-1 text-2xl font-semibold "> Search Result
         <button 
         onClick={()=>setSearch("")}
           className="ms-5 rounded-sm bg-gray-500 text-white px-2 text-xl" >Clear search</button> </h1>}
      {  sSroduct && sSroduct.length == 0  &&<h1 className="text-2xl m-2 text-red-500 font-bold">No Search Result Found </h1> }  

      {/* search result show  */}
       <div className="flex flex-wrap gap-2 justify-around ">
      {  search &&  sSroduct && sSroduct.map((el, index)=>{
           return  <ShowAllProduct
                key={index + Math.random()}
                proDis={ el.productDescription}
                proName={el.productName}
                proPrice={el.productPrice}
                proCate={el.productcategory}
                proImg={el.productImage}
                proId = {el._id} 
                LikedProducts = {LikedProducts}  
             
              />
         })
      } 
 <br /> 
 { search &&  sSroduct && sSroduct.length > 0 &&  <div className="h-1 bg-gray-400 my-4 w-[95%] mx-auto rounded-lg"></div>}

      </div>

{/* ---------------------------------------------------------- */}

     
    { !search &&  <h2 className=" text-2xl mt-5 font-semibold mb-4 " >Category Products</h2> }

      {/* all Product show  */}
    {  
     !search &&  
      <div className="flex flex-wrap gap-2 justify-around ">
        {CateProduct &&
          CateProduct.length > 0 &&
          CateProduct.map((el, index) => {
            // console.log(el)
            return (
              <ShowAllProduct
                key={index + Math.random()}
                proDis={ el.productDescription}
                proName={el.productName}
                proPrice={el.productPrice}
                proCate={el.productcategory}
                proImg={el.productImage}
                proId = {el._id} 
                LikedProducts = {LikedProducts}  
             
              />
            );
          })}
      </div>}
    </div>
  );
};

export default Home;
