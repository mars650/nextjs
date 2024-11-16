// "use client";
import { Form, Formik, useFormik } from "formik";
import { advancedSchema, basicSchema } from "../schemas";
import Link from "next/link";
import CustomInput from "./Customs/CustomInput";
import CustomDate from "./Customs/CustomDate";
import CustomNumber from "./Customs/customNumber";
import CustomSelect from "./Customs/CustomSelect";
import { useEffect, useState } from "react";
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation'


// import { useRouter } from 'next/router'



// const onSubmit = async (values: any, actions: any) => {
//   // let birth = "01-05-1998";

//   // const [date, setDate] = useState(new Date(birth));
  
//   // alert("sumbint");
//   // alert(values);
//   console.log(values.day);
//   console.log(values.month);
//   console.log(values.year);
//   const birth = values.day +"-"+values.month+"-"+values.year;
//   console.log(new Date(birth).toDateString());
//   console.log(new Date(birth).toLocaleDateString());
//   console.log(new Date(birth).toLocaleString());

//   // console.log("submin");
//   // console.log(values);
//   // console.log(actions);
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   // actions.resetForm();
//   // router.push('/react')
  
// };
const url = "https://secend-pr.shuttleapp.rs/todos";

const BasicForm = () => {
  const router = useRouter();
  const [check, setChek] = useState(false);
  const [check2, setChek2] = useState(false);


  const fetchData = async () => {
  
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
            setChek2(true);
    
    
        }
        return data
       
      });
    }
  
  }
 useEffect(() => {
  fetchData()
}, [])
if(check2 == true){
  router.push('/')

}
  
  const onSubmit = async (values: any, actions: any) => {
    setChek(false);
   
    const birth = values.day +"-"+values.month+"-"+values.year;
    const birth3 = values.year +"-"+values.month+"-"+values.day;
  
    // console.log(birth3);
   
    // console.log(new Date(birth).toLocaleDateString());
    // console.log(new Date(birth).toUTCString());
    // console.log(new Date(birth).toDateString());
    // console.log(new Date(birth).toISOString());
    // console.log(new Date(birth).toISOString());
    let birth2 = new Date(birth).toISOString();
    // console.log(new Date(birth).toJSON());
  
    
    
    const reqponse = await fetch(`${url}/user/sign-up`,{
      method: "POST",
      body: JSON.stringify({
        // body.user_name.clone(),
        //       body.user_password.clone() ,
        //       body.user_email.clone() ,
        //       body.user_type.clone(),
        //       body.user_birthday.clone(),
     
        
        "user_department": parseInt(values.department),
        "user_name": values.username.toString(),
        "user_password": values.password,
        "user_email": values.email,
        "user_type": values.type,
        "user_birthday": birth3,
        
       
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    
     
    })  .then((res) => {
     
      return res.json();
    })
    .then((data) => {
      // console.log(data.message);
      if(data.message == "Created a new user."){
        toast.success("Created.");
        router.push('/accounts/login');
        
      }else if(data.message == "Couldn't create a new user."){
        toast.error("Couldn't create a new user.");
      }else if(data.message == "user name has been used"){
        toast.error("هذا الاسم تم استخدامة");
        setChek(true);
      }

      return data
     
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    
  };

  
  return (
    <Formik initialValues={{ username:"",department:"" ,email:"",day:"",month:"",year:"",password:"",confirmPassword:"",type:"",
    // acceptedTos: false 
    }} validationSchema={basicSchema} onSubmit={onSubmit}>
      {({isSubmitting}) => (
      // {(props) => (
        <Form>
           <CustomInput 
            label="" 
            name="username"
            ype="text"
            placeholder="ادخل الاسم"
          />
          {check ? <p className="input-error text-[#fc8181] text-[0.75rem] text-right mt-1">هذا الاسم تم استخدامة</p> : ""}

          <CustomSelect
                label=""
                name="department"
                placeholder="اختر القسم">
                <option value="">اختر القسم</option>
                <option value="1">قسم ارشاد سياحي </option>
                <option value="2">قسم الدرسات الفندقية</option>
                <option value="3">قسم الدرسات السياحية</option>
              

              </CustomSelect>
          {/* <Field name="date" timezone={DefaultTz} component={DateTimeField} /> */}
          <CustomInput 
            label="" 
            name="email"
            ype="text"
            placeholder="ادخل الايميل"
          />

      
      <div id="date-range-picker flex" date-rangepicker className="flex items-center mt-1">

           <div className="relative flex-1 w-64">
          <CustomNumber
            label=""
            name="day"
            type="number"
            placeholder="اليوم">

          </CustomNumber>
          </div>
          {/* <span className="mx-4 text-gray-500 mt-9">to</span> */}
          <div className="relative flex-1 w-64 m-2">

            <CustomSelect
                label=""
                name="month"
                placeholder="الشهر">
                <option value="">الشهر</option>
                <option value="01">يناير</option>
                <option value="02">فبراير</option>
                <option value="03">مارس</option>
                <option value="04">ابريل</option>
                <option value="05">مايو</option>
                <option value="06">يونيو</option>
                <option value="07">يوليو</option>
                <option value="08">اغسطس</option>
                <option value="09">سبتمبر</option>
                <option value="10">اكتوبر</option>
                <option value="11">نوفمبر</option>
                <option value="12">ديسمبر</option>
                {/* <option value="January">يناير</option>
                <option value="February">فبراير</option>
                <option value="March">مارس</option>
                <option value="April">ابريل</option>
                <option value="May">مايو</option>
                <option value="June">يونيو</option>
                <option value="July">يوليو</option>
                <option value="August">اغسطس</option>
                <option value="September">سبتمبر</option>
                <option value="October">اكتوبر</option>
                <option value="November">نوفمبر</option>
                <option value="December">ديسمبر</option> */}

              </CustomSelect>

          </div>
          <div className="relative flex-1 w-64">

          <CustomNumber
            label=""
            name="year"
            type="number"
            placeholder="السنة">

          </CustomNumber>

          </div>
          
      </div>
      <CustomNumber
            label=""
            name="password"
            type="password"
            placeholder="كلمة المرور">

          </CustomNumber>
          <CustomNumber
            label=""
            name="confirmPassword"
            type="password"
            placeholder="اعادة ادخال كلمة المرور">

          </CustomNumber>
          {/* <input type="checkbox" id="showP" className="float-left my-3 mx-3" />
          <label htmlFor="showP" className="float-left my-3 mx-3">show password</label> */}

          <CustomSelect
                label=""
                name="type"
                placeholder="الجنس">
                <option value="">الجنس</option>
                <option value="male">ذكر</option>
                <option value="female">انثي</option>
              </CustomSelect>
          

        {/* <Field type="text" name="name" placehoder="Name" /> */}

        <button className="button" disabled={isSubmitting} type="submit">ادخل</button>
        <Toaster richColors/>

        </Form>
      )}
      </Formik>
    
  );
  };
  export default BasicForm;