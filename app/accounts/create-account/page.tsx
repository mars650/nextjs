"use client";

// import { KeyboardEvent, useState , useEffect, useRef} from "react";
// import ReactDOM from "react-dom/client";
import App from "./App";

interface Corse_lest{
    massage: string
    token: string;
    
  }

// export default async function Page() {
export default  function Page() {
//   const [photos, setPhotos] = useState([]);
// const inputName = useRef<HTMLInputElement>(null);
// const inputPassword = useRef<HTMLInputElement>(null);

  
      
//     const setData = () =>{
//       if(inputName.current == undefined || inputPassword.current == undefined){
        
//       }else{
//         if(inputName.current.value == "" || inputPassword.current.value == " "){
//           alert("You have add som data. ")
//         }else{
          
//           console.log(inputName.current.value)
//           console.log(inputName.current)
  
//           // console.log(inputName.current.value)
//           // const password = "admin";
//         const reqponse = fetch("http://192.168.0.102:8070/user/login",{
//           method: "POST",
//           body: JSON.stringify({
//             // "id":1,
//             "name": inputName.current.value,
//             "password": inputPassword.current.value,
//             // "email": email,
//             // "exp": 1
//           }),
//           headers: {
//             "Content-type": "application/json; charset=UTF-8"
//           }
        
         
//         })  .then((res) => {
//           // localStorage.setItem("state", res.status.toString());
      
//           // console.log("request status ")
//           // console.log(res.status)
//           return res.json();
//         })
//         .then((data) => {
//           console.log(data);
//           if(data.token != undefined){
//             localStorage.setItem("Authorization",data.token);
  
//           }
//           return data
//           // setPhotos(data);
//         });
//         }
//      };
//         }
  


  return (
    // <div className="h-screen flex items-center justify-center w-90">
    <div className="content-center">
      <App />

      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold font-serif"><i className="fa-solid fa-user"></i>  Login</h1>
          <hr className="mt-3"/>
          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">Username</label>
            <input type="text" id="username" ref={inputName} autoComplete="off" className="border w-full text-base px-2 py-1 focuse:outline-none focuse:ring-0 focuse:border-gray-600" placeholder="Enter Username..." />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">Password</label>
            <input type="password" id="password" ref={inputPassword} className="border w-full text-base px-2 py-1 focuse:outline-none focuse:ring-0 focuse:border-gray-600" placeholder="Enter Password..." />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <input type="checkbox" />
              <label> Remember me</label>
            </div>
            <div>
              <a href="" className="text-indigo-800 font-semibold">Forgot password</a>
            </div>
          </div>
          <div className="mt-5">
            <button type="submit" onClick={setData} className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Login</button>
          </div>
          
        </div>
      </div> */}
    </div>
    
  )
}

