// "use client";
import { Field, Form, Formik, useFormik } from "formik";
// import { addingSchema, advancedSchema, basicSchema } from "../schemas";
import Link from "next/link";
import CustomInput from "./Customs/CustomInput";
import CustomSelect from "./Customs/CustomSelect";
import CustomDate from "./Customs/CustomDate";
import CustomNumber from "./Customs/customNumber";
import { useEffect, useState } from "react";
// import { useRouter } from 'next/router'
import * as yup from "yup";
// import { ToastContainer, toast } from 'react-toastify';
import { Toaster, toast } from 'sonner';
import 'react-toastify/dist/ReactToastify.css';
const url = "https://secend-pr.shuttleapp.rs/todos";

// toast.configure();
const onSubmit = async (values: any, actions: any) => {
  // alert("sumbint")
  // console.log("submit");
  // console.log(values.username);

  let auth = localStorage.getItem("Authorization")
  if (auth != null){
  localStorage.setItem("departmentStatus","false")
const fetchDataAu = async () => {

  const reqponse = await fetch(`${url}/add-research`,{
    method: "POST",
    body: JSON.stringify({
   
      // "id": parseInt('4'),
      "type_of_element": values.elementType,
      "research_idcf": parseInt(values.couseType),
      // "research_idcf": ,
      // "research_iduf": parseInt(values.couseType),
      "research_iduf": 1,
      "name": values.subject,
      "dateOfappointed": values.dateMin,
      "deliveryDate": values.dateMax,
      "minimumNumberOfGroup": parseInt(values.numberMin),
      "maximumNumberOfGroup": parseInt(values.numberMax),
      "discussion": 0,
      "research_comment": values.comment,
     
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
    console.log(data);
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
}
if(auth != null){
  const fatching = async () => {
  const reqponse = fetch(`${url}/user/decode-token`,{
    method: "POST",
    body: JSON.stringify({
      "token": auth
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    // setTokenStatus(true);
    // console.log(data);
    return data
  }).catch((error) => {
    console.log(error)
  });
  let ts = await reqponse;
  if(ts == "200"){
    localStorage.removeItem("department")
    localStorage.setItem("departmentStatus","true")

    await fetchDataAu()
  }
  else{
    toast.error("يجب تسجيل الدخول اولا");
  }
  }
  await fatching();
}else{
  toast.error("يجب تسجيل الدخول اولا");
}

}
};

const BasicForm = () => {
  
  interface Corse_lest{
    corse_id: string
    name: string;
    url: string;
  }
  const [photos, setPhotos] = useState([]);
  const [tokenstatus, setTokenStatus] = useState(false);

  // const [req_states, getStates] = useState<Number>();

  useEffect(() => {

  if (typeof window !== 'undefined') {
    let auth = localStorage.getItem("Authorization")
      if (auth == null){
        fetch(`${url}/corses`,{
          method: "GET",
          credentials: "same-origin",
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setPhotos(data);
          }).catch((error) => {
            console.log(error)
          });
      }else{
    
        //   fetch('https://jsonplaceholder.typicode.com/photos')
          fetch(`${url}/corses`,{
            method: "GET",
            credentials: "same-origin",
            headers: {
              'Content-type': 'application/json',
              'Authorization': auth
              
            },
          })
      
          
            .then((res) => {
            // getStates(res.status);
    
              return res.json();
            })
            .then((data) => {
              setPhotos(data);
            }).catch((error) => {
              console.log(error)
            });
      }
      if(auth != null){
        const fatching = async () => {
        const reqponse = fetch(`${url}/user/decode-token`,{
          method: "POST",
          body: JSON.stringify({
            "token": auth
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })  .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setTokenStatus(true);
          // console.log(data);
          return data
        }).catch((error) => {
          console.log(error)
        });
        fatching();
        
      }
    }
    } 
    
  }, []);
  // toast("Wow so easy!");
  const corse_lest: Corse_lest[] =  photos;
  // console.log(corse_lest.map(op => (op.corse_id)));
   const advancedSchema = yup.object().shape({
    subject: yup.string().min(4,"subject must be least 3 characters lonf").required("Required"),
    comment: yup.string().min(3,"commet must be least 3 characters lonf").required("Required"),
    couseType: yup.string().oneOf(corse_lest.map(op => (op.corse_id.toString() )),"String").required("Required"),
    // jobType: yup.string().oneOf(["designer", "developer", "manager", "voloa"],"String").required("Required"),
    elementType: yup.string().oneOf(["research", "quiz", "sheet","exam"],"String").required("Required"),
    dateMin: yup.date().required("Required"),
    dateMax: yup.date().required("Required"),
    numberMin: yup.number().positive().integer().required("Required"),
    numberMax: yup.number().positive().integer().required("Required"),
    // acceptedTos: yup.boolean().oneOf([true], "Please accept the terms of service"),

});
// const defaultDate = new Date().toLocaleDateString();
// console.log(defaultDate);
// var curr = new Date();
// curr.setDate(curr.getDate() + 1);
// var date = curr.toISOString().substring(0,10);
// console.log(date);
// const today = new Date();
// const numberOfDaysToAdd = 3;
// const date = today.setDate(today.getDate() + numberOfDaysToAdd); 
// const defaultValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd

    return (
      <>
      {tokenstatus ? <h1 className="w-screen/4 bg-red-700 p-1 text-1xl ">يرجي تسجيل الدخول اولا.</h1> : ""}
      
      <Formik initialValues={{ subject:"",comment:"",couseType:"",elementType:"",dateMin:"",dateMax:"",numberMin:"1",numberMax:"3",
      // acceptedTos: false 
      }} validationSchema={advancedSchema} onSubmit={onSubmit}>
        {({isSubmitting}) => (
          <Form>
             <CustomInput 
              label="" 
              name="subject"
              ype="text"
              placeholder="ادخل اسم الموضوع"
            />

            <CustomSelect
              label=""
              name="couseType"
              placeholder="اختر المادة">
              {/* <option value="">Please select a job type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Product</option> */}
              <option value={""}>اختر المادة</option>
              {corse_lest.map(option => (
                <option value={option.corse_id} key={option.corse_id}>{option.name}</option>
                // <option value={option.value}>{option.label}</option>
              ))}

            </CustomSelect>
            {/* <Field name="date" timezone={DefaultTz} component={DateTimeField} /> */}

            <CustomSelect
              label=""
              name="elementType"
              placeholder="اختر النوع">
              <option value="">اختر النوع</option>
              <option value="research">بحث</option>
              <option value="quiz">اختبار</option>
              <option value="sheet">sheet</option>
              <option value="exam">exam</option>
             

            </CustomSelect>
        <div id="date-range-picker"  className="flex items-center mt-1">

             <div className="relative">
            <CustomDate
              label="موعد التحديد"
              name="dateMin"
              type="date"
              // defaultValue={defaultValue}
              placeholder="موعد التحديد">

            </CustomDate>
            </div>
            <span className="mx-4 text-gray-500 mt-9">to</span>

            <div className="relative">

            <CustomDate
              label="موعد التسليم"
              name="dateMax"
              type="date"
              placeholder="موعد التسليم">

            </CustomDate>

            </div>
            </div>
        {/* <div id="date-range-picker" date-rangepicker className="flex items-center mt-1"> */}
        <div id="date-range-picker"  className="flex items-center mt-1">

             <div className="relative">
            <CustomNumber
              label="اقل عدد للمجموعة"
              name="numberMin"
              type="number"
              placeholder="اقل عدد للمجموعة">

            </CustomNumber>
            </div>
            <span className="mx-4 text-gray-500 mt-9">to</span>

            <div className="relative">

            <CustomNumber
              label="اقصي عدد للمجموعة"
              name="numberMax"
              type="number"
              placeholder="اقصي عدد للمجموعة">

            </CustomNumber>

            </div>
            </div>
            <CustomInput 
              label="" 
              name="comment"
              ype="text"
              placeholder="اترك ملحوظة"
            />

          {/* <Field type="text" name="name" placehoder="Name" /> */}

          <button className="button" disabled={isSubmitting} type="submit">ادخل</button>
          {/* <ToastContainer /> */}
          {/* <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
// transition: Bounce,
/> */}
        <Toaster richColors/>

          </Form>
        )}
        </Formik>
        </>
      
    );
  };
  export default BasicForm;
