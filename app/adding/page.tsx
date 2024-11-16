"use client";

// import { KeyboardEvent, useState , useEffect, useRef} from "react";
// import { useFormik } from "formik";
// import { basicSchema, loginSchema } from "../schemas";
import App from "./App";


// interface Corse_lest{
//     massage: string
//     token: string;
    
//   }
//   const onSubmit = async (values: any, actions: any) => {
  
//     // alert("sumbint");
//     // alert(values);
  
//     // console.log("submin");
//     // console.log(values);
//     // console.log(actions);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     actions.resetForm();
//     // router.push('/react')
    
//   };
// export default async function Page() {
export default  function Page() {

//   const { values, handleBlur,errors,touched,isSubmitting, handleChange, handleSubmit } = useFormik({
//     initialValues: {
//       name: "",
//       password: "",
    
//     },
//     validationSchema: loginSchema,
   
//     onSubmit,
    
//   });
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
    <div>
      
        <App />
    </div>
    
  )
}

