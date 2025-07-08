
Day -1
---
🛠️ Project Setup
I started by setting up the React project using Vite for fast development.

🎨 Styling
For CSS styling, I used Tailwind CSS:
👉 https://tailwindcss.com/docs/installation

🔀 Routing
For page navigation, I implemented React Router DOM:
👉 https://reactrouter.com/en/main/start/tutorial

🔐 Authentication
For Login and Signup, I used the Axios library to make API calls and handle user authentication:
👉 https://axios-http.com/docs/intro
All API responses are handled properly with loading and error states.


Day -2
---

## 🚀 Product Upload & Display Feature (Frontend)

- 📝 **Form Created** for product input (name, description, price, category, image)
- 📤 **FormData Used** to send data including image to backend via Axios
- ✅ **Successfully Uploaded** data and image to backend
- 🖼️ **Product Displayed on UI** dynamically after upload using `.map()`
- 🎨 **Styled with Tailwind CSS** for card and form layout

---

Day -3 
---

✅ Implemented **Product Search** functionality using React.js  
✅ Handled **input keyword via child component state lifting**  
✅ Filtered product list using `Array.filter()` based on:
   - product name  
   - description  
   - category  
✅ Used `.toLowerCase()` + `.includes()` to make search case-insensitive  
✅ Stored filtered array in state and dynamically rendered search results  

🛠️ Technologies: React.js | State Lifting | Controlled Input | Array.filter()

---

Day - 4 
---

## ❤️ Wishlist Feature - OLX Clone (MERN Stack)

### 📌 What I did today:

- Added **wishlist (Add to Favourite)** feature to the OLX-like app.
- Each product now has a ❤️ like button on the UI.
- When clicked, it sends the product's `ObjectId` and user's auth token to the server using a **POST** request.

### 🧠 Backend Logic:

- The product `ObjectId` is saved in the user's `likedProducts` array in MongoDB.
- Created `/liked-products` API endpoint to **add a liked product**.
- Created `/get-liked-products` POST endpoint to **fetch full details** of all liked products using MongoDB `$in` query.

### 🧩 Frontend Logic:

- Used state lifting to manage liked status.
- Created a separate `Wishlist` component to show liked items.
- http request to send likeProduct details  like this -

-   const LikedProducts = async(id)=>{

        let token = cookie.get("loginToken")   ;    
       
        try{

                     let response = await axios({
                                    method : "POST" ,
                                    url :  "/liked-products" , 
                                    data  : {
                                          token : token , 
                                          productId : id  }
                                  })

         console.log(response) ;
         alert("product added to wishlist") ;

      }
      catch(error){
         alert("not added to wishlist")
      }      
   
}
--
- HTTP Request to fetch data in LikeProduct Componet 

 useEffect(()=>{
  
        let token = cookie.get("loginToken") ;
        
          axios({
                  method : "post" , 
                  url : "/get-liked-products" ,
                  data : { token }
          })
          .then((result)=>{

             console.log(result.data.success)
             console.log(result.data)
       
              if(result.data.success){                                 
                setLikedProducts(result.data.lproducts)
                 }

          })
          .catch((error)=>{
             alert("server error")
          })
          
    } , [])


---


