"use client";

import CustomSelect from "@/app/components/Customs/CustomSelectR";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from 'react';
import { toast, Toaster } from "sonner";
import * as yup from "yup";
// import CustomCheckBox from "../../CustomInput";




// interface researc_list{
//   id:	number
//   research_id:	number
//   name: string	 
//   dateOfappointed: string
//   deliveryDate: string	
//   minimumNumberOfGroup: number
//   maximumNumberOfGroup: number
//   discussion: number
//   }

interface researc_list{
  comment: string
  date_ofappointd: string
  delivery_date: string
  discussion: number
  id: number
  idcf: number
  iduf: number
  maximum: number
  minimum: number
  name: string
  status: string
  type_a: string
  }
  
const Fetch = ( { params }: any ) => {
  
  const [resqst, setPhotos] = useState([]);
  const [error, setError] = useState();
  const [check, setChek] = useState(false);
  const handleClick = () => setChek(!check)
  const [tokenstatus, setToken] = useState<Number>();
  const url = "https://secend-pr.shuttleapp.rs/todos";

  // const [check2, setChek2] = useState(false);
  // const handleClick2 = () => setChek2(!check2)
  const [req_states, getStates] = useState<Number>();
  const onSubmit = async (values: any, actions: any) => {

    let auth = localStorage.getItem("Authorization")
    if (auth != null){
  
    const reqponse = await fetch(`${url}/add-event`,{
      method: "POST",
      body: JSON.stringify({
        "type_of_element": Object.keys(params)[0],
        "status_idcf": parseInt(params.research),
        "status_idrf": parseInt(values.couseType),
        "status_iduf": parseInt(values.couseType),
        "status_status": values.statusType
      }),
      
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Authorization': auth
      }
    
     
    })  .then((res) => {
     
      // return res.json();
      return res.status;
    })
    .then((data) => {
      // console.log(data);
    //   toast("Hello Geeks 4", {
    //     position: toast.POSITION.BOTTOM_LEFT,
    // });
    // toast.play({ id: "123" });
      if(data == 200){
        toast.success("تمت اضافتة ");
  
      }
      else if(data == 400){
        toast.error("Error 400");
      }
      else if(data == 500){
        toast.error("Error 500");
      }
      else if(data == 401){
        toast.error("يجب تسجيل الدخول اولا");
      }
      else{
        toast.error("can't Create.");
      }
      return data
     
    }).catch((error) => {
      console.log(error)
    });
  }else{
    toast.error("يجب تسجيل الدخول اولا");
  }
    // await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // actions.resetForm();
  
    
  };
  
  useEffect(() => {

    let auth = localStorage.getItem("Authorization");
  
const fetchData = async () => {
  toast.error("Error 400");
    if (auth != null){
      toast.error("Error 400");
        fetch(`${url}/getEvent`,{
          method: "GET",
        
          headers: {
            'Content-type': 'application/json',
            'Authorization': auth
           
          },
        })
          .then((res) => {
            getStates(res.status);
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            setPhotos(data);
          }).catch((error) => {
            setError(error);
            console.log(error)
         });
    }
  }
  
const fetchDataNormel = async () => {
// if (auth != null){
    fetch(`${url}/getEvent`,{
      method: "GET",
    })
      .then((res) => {
        getStates(res.status);
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setPhotos(data);
      }).catch((error) => {
        setError(error);
        console.log(error)
      });
    // }
  }

if(auth != null){
  const fatching = async () => {
  const reqponse = await fetch(`${url}/user/decode-token`,{
    method: "POST",
    body: JSON.stringify({
      "token": auth
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then((res) => {
    // setToken(res.status);
    
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    // let st = await data;
    // setTokenStatus(data);
    setToken(data);
    return data
  }).catch((error) => {
    console.log(error)
  });
  // console.log(await reqponse);
  let ts = await reqponse;
  if(ts == 200){
    fetchData()
  }else{
    // console.log(reqponse);

    fetchDataNormel()
  }
  }
  fatching();
}else{
  // console.log(3);

  fetchDataNormel()
}
        
}, []);
  const corse_lest: researc_list[] = resqst;
  // console.log(corse_lest);
  
      const t  = true;

  if( req_states == 401){
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1>Error 401</h1>
          </main>
          </div>
    );
  } else if (req_states == 404){
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1>Error 404</h1>
          </main>
          </div>
    );

  }else{

  const isNull = !corse_lest.filter(Boolean).length

  if (isNull){
    if(error){
      return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-base">
          <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <h1 >server error</h1>
         {/* <h1 >{error}</h1> */}
           </main>
        </div>
      )
    }else{
      return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-base">
          <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <h1>تحميل...</h1>
           </main>
        </div>
      )

    }
  }else{
    const advancedSchema = yup.object().shape({
      couseType: yup.string().oneOf(corse_lest.map(op => (op.id.toString() )),"String").required("Required"),
      statusType: yup.string().oneOf(["null", "1"],"String").required("Required"),
  });
    // console.log(check);

    return(
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-base">
        {/* <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start md:text-sm md:text-base text-xs w-1/2"> */}
        <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start md:text-lg text-xs md:w-1/2 md:text-center">

        {/* <div className="w-full  rounded-md h-22  shadow-2xl text-center grid content-center">
        <Formik initialValues={{couseType:"", statusType:"",
      // acceptedTos: false 
      }} validationSchema={advancedSchema} onSubmit={onSubmit}>
        {({isSubmitting}) => (
          <Form className="md md:text-lg text-xs w-full">
            
            <CustomSelect
              // label="اختر المادة"
              label=""
              name="couseType"
              paceholder="Please select a corse">
             
              <option value={""}>اختر المادة</option>
              {corse_lest.map(option => (
                <option value={option.id} key={option.id}>{option.name}</option>
              ))}

            </CustomSelect>
            
            <CustomSelect
              // label="اختر المادة"
              label=""
              name="statusType"
              paceholder="Please select a corse">
             
              <option value={""}>اختر الحالة</option>
              {/* {corse_lest.map(option => ( *
                <option value="1">منتهي</option>
                <option value="0">غير منتهي</option>
              {/* // ))} *

            </CustomSelect>
            {/* <label>"label"</label>
            <select 
              label=""
              name="statusType"
              paceholder="Please select a corse"
              className={meta.touched && meta.error ? "input-error" : ""}
              /> *

            <button className="button inline" disabled={isSubmitting} type="submit">ادخل</button>
            <Toaster richColors/>
            </Form>
            )}
          </Formik>
        </div> */}
        {/* <div className="w-full  rounded-md h-14 border shadow-2xl text-center flex flex-row justify-right items-center"> */}
          {/* <input type="checkbox" id="myCheck" className="checkbox" onChange={e => setChek(e.target.value)}/> */}
          {/* https://stackoverflow.com/questions/56356900/way-to-determine-checkbox-checked-in-react-usestate */}
          {/* <input type="checkbox" id="myCheck" className="checkbox my-auto text-center  mr-4" onClick={handleClick} checked={check}/>
          <label className="text-center mx-auto mr-3" htmlFor="myCheck">اخفاء الابحاث المنتهية</label> */}
          {/* <input type="checkbox" id="myCheck2" className="checkbox my-auto text-center  mr-4" onClick={handleClick2} checked={check2}/>
          <label className="text-center mx-auto mr-3" htmlFor="myCheck2">ترتيب</label> */}
          {/* </div> */}
          {/* {corse_lest.filter((item) =>{ */}
          {corse_lest.filter(
            
            (d) => {if(check == true){ return new Date(d.delivery_date).valueOf() - new Date().valueOf() > 0}
          else{
            return d
          }
          }
            // // return 'f' == "y" ? item : item.research_name.toLowerCase().includes("sd");
            // let d = 2;
            // const defaultDate = new Date().toLocaleDateString();

            // if(item.research_deliveryDate > defaultDate){
            //   // return item.research_name.toLowerCase().includes("n");
            //   return item.research_deliveryDate;
            // }
            // return item.research_name.toLowerCase().includes("");
            // item.filter(d => new Date(d) - new Date() > 0);
          ) 
          // .sort((a, b) => a.research_deliveryDate > b.research_deliveryDate ? 1 : -1)
          // .sort(function(a, b){if(check2 == true){return b.valueOf() - a.valueOf()} else{return b.valueOf() - a.valueOf()}})
          .map((post, index) => {

          return (
          // <div className="layer border rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 px-9 py-8 w-full text-center" key={post.research_id}>
          <div className="layer border relative flax flax-row rounded-md shadow-2xl px-9 w-full " key={post.id}>
          {/* <div className="" key={post.research_id}>  */}
            <span className="text-right">
              <h1>#{index + 1}</h1>
              <h1>#{post.type_a}</h1>
            </span>
            
            {/* <h1 className="float-left bg-green-800 inline w-5 h-5 absolute left-4 top-4 rounded-full ">
              <h2 className="checkRight"></h2></h1> */}
            {!post.status ? "": <h1 className="float-left bg-green-800 inline w-4 h-4 md:w-5 md:h-5 absolute left-4 top-4 rounded-full text-center">&#10003;</h1>}
            <span className="basis-1/4"><h2>اسم البحث :         <div className="underline font-semibold decoration-solid inline">{post.name.toString()}</div></h2></span>  
            
            <span className="basis-1/4"><h2>تاريخ التحديد :     {post.date_ofappointd}</h2></span>  
            <span className="basis-1/4"><h2>تاريخ التسليم  :    {post.delivery_date}</h2></span>  
            <span className="basis-1/4"><h2>اقل عدد للمجموعة :  {post.minimum}</h2></span>  
            <span className="basis-1/4"><h2>اكبر عدد للمجموعة : {post.maximum}</h2></span>  
          </div>
            )
          })}

         </main>
      </div>
    )
  }
}
  
    }
  export default Fetch;

