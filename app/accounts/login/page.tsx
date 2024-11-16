"use client";

import { KeyboardEvent, useState , useEffect, useRef} from "react";


import { useRouter } from 'next/navigation'
// import {
//   toast,
//   ToastContainer
// } from 'react-toastify';
// import ReactDOM from "react-dom/client";
// import App from "./App";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { Toaster, toast } from 'sonner';
import 'react-toastify/dist/ReactToastify.css';
// import  PreLoader  from "../../components/PreLoader";
// import { createBrowserClient } from '@supabase/ssr'
// import useNotesQuery from '@/hooks/useNotesQuery'
// import router from "next/router";

interface Corse_lest{
    massage: string
    token: string;
    
  }
// export default async function Page() {
export default  function Page() {
  const [photos, setPhotos] = useState([]);
  const router = useRouter();
  const [check2, setChek2] = useState(false);

const inputName = useRef<HTMLInputElement>(null);
const inputPassword = useRef<HTMLInputElement>(null);
const url = "https://secend-pr.shuttleapp.rs/todos";
 

 useEffect(() => {
  let auth = localStorage.getItem("Authorization")

  if(auth != null){

    const reqponse = fetch(`${url}/user/decode-token`,{
      method: "POST",
      body: JSON.stringify({
      
        "token": auth
       
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    
     
    })  .then((res) => {
      // localStorage.setItem("state", res.status.toString());
  
      // console.log("request status ")
      // console.log(res.status)
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      if(data == 200){
        // localStorage.setItem("Authorization",data.token);
        // funRout();
        setChek2(true);
         
  
  
      }
      return data
     
    });
  }

 
   
}, [])
if(check2 == true){
  router.push('/')

}
const [errorUsernam, setMessageUser] = useState('');
const [errorPasswrod, setMessagePass] = useState('');

 

   
  
      
    // const onSubmit = async (values: any, actions: any) =>{
    //       // toast('Wrong Credentials')

    //   router.push('/react')
    // }

    const onSubmit = async (values: any, actions: any) =>{


    // const setData = async (values: any, actions: any) =>{
      // alert("sumet");
      setMessagePass("")
      setMessageUser("")


      // await new Promise((resolve) => setTimeout(resolve, 1000));
      if(inputName.current == undefined || inputPassword.current == undefined){
        
      }else{
        // if(inputName.current.value == "" || inputPassword.current.value == " "){
        //   alert("You have add som data. ")
        // }else{
          
          // console.log(inputName.current.value)
          // console.log(inputName.current)
  
          // console.log(inputName.current.value)
          // const password = "admin";
        const reqponse = await fetch(`${url}/user/login`,{
          method: "POST",
          body: JSON.stringify({
            // "id":1,
            "name": inputName.current.value,
            "password": inputPassword.current.value,
            // "email": email,
            // "exp": 1
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        
         
        })  .then((res) => {
          // localStorage.setItem("state", res.status.toString());
      
          // console.log("request status ")
          // console.log(res.status)
          // if(res.status == 200){
          //   toast.success("Created.");
      
          // }
           if(res.status == 400){
            toast.error("Error 400");
          }
          else if(res.status == 500){
            toast.error("Error 500");
          }
          else if(res.status == 401){
            toast.error("Error 401");
          }
          // else{
          //   toast.error("can't Create.");
          // }
          return res.json();
          // return res.status;
        })
        .then((data) => {
          // console.log(data);
          if(data == "message: incorrect_password "){
            // toast.error("incorrect_password.");
            setMessagePass("كلمة المرور خاظئة")
      
          }
          else if(data == "message: incorrect_name"){
            // toast.error("incorrect_name");
            setMessageUser("لا يوجد مستخدم بهذا الاسم")

          }
          if(data.token != undefined){
            // console.log(data.token);
            localStorage.setItem("Authorization",data.token);
            localStorage.setItem("departmentStatus","ture")
            // router.push('/')
            // funRout();
            // router.refresh(); 
            // window.location.reload();
  
          }
          
          return data
          // setPhotos(data);
        }).catch((error) => {
          console.log(error)
        });
       
        // }
       
        // actions.resetForm();
     };
      await new Promise((resolve) => setTimeout(resolve, 500));

        }
        // const onSubmit = async (values: any, actions: any) => {  
        //   await new Promise((resolve) => setTimeout(resolve, 1000));
        //   actions.resetForm();
        // };
        const { values, handleBlur,errors,touched,isSubmitting, handleChange, handleSubmit } = useFormik({
          initialValues: {
            username: "",
            password: "",
          
          },
          validationSchema: loginSchema,
          onSubmit,
          // setData,
        });
        // const ifYou = "If you don't have an account.";
        const ifYou = "اضافة حساب جديد.";
  


  return (
    <div>
      {/* <PreLoader /> */}
      {/* <App /> */}

      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" /> */}
      <form onSubmit={handleSubmit} autoComplete="off" >
      {/* <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black"> */}
      <div className="flex justify-center items-center h-screen bg-[linear-gradient(to_right_top,_#051937,_#112b54,_#1d3e72,_#2a5292,_#3767b3)] from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold font-serif"><i className="fa-solid fa-user"></i>  Login</h1>
          <hr className="mt-3"/>
          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">Username</label>
            <input 
            value={values.username}
            onChange={handleChange}
            type="text" id="username" ref={inputName} autoComplete="off" 
            //className="border w-full text-base px-2 py-1 focuse:outline-none focuse:ring-0 focuse:border-gray-600" 
            placeholder="ادخل الاسم" 
            className={errors.username && touched.username ? "border-2 border-rose-500" : ""}
            />
            <p className="error">{errorUsernam}</p>
            {errors.username && touched.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">Password</label>
            <input 
            value={values.password}
            onChange={handleChange}
            type="password" id="password" ref={inputPassword}
             //className="border w-full text-base px-2 py-1 focuse:outline-none focuse:ring-0 focuse:border-gray-600" 
             placeholder="ادخل كلمة المرور" 
             className={errors.password && touched.password ? "border-2 border-rose-500" : ""}
             />
            <p className="error">{errorPasswrod}</p>

            {errors.password && touched.password && <p className="error">{errors.password}</p>}

          </div>
          <div className="mt-3 flex justify-between items-center">
            {/* <div>
              <input type="checkbox" />
              <label> Remember me</label>
            </div> */}
            {/* <div>
              <a href="" className="text-indigo-800 font-semibold">Forgot password</a>
            </div> */}
          </div>
          <div>
              <a href="/accounts/create-account" className="text-indigo-800 font-semibold items-center text-alinge-center" >{ifYou}</a>
            </div>
          <div className="mt-5">
            <button className="button" disabled={isSubmitting} type="submit" >ادخل</button>
            <Toaster richColors/>
            {/* <button type="submit" onClick={setData} className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Login</button> */}
          </div>
          
        </div>
      </div>
      </form>
    </div>
    
  )
}

// function funRout() {
//   const router = useRouter();

//   router.push('/')
// }

