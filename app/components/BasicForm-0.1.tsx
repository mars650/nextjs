// "use client";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import Link from "next/link";
// import { useRouter } from 'next/router'



// const onSubmit = () => {
//   alert("sumbint");
//   console.log("submin");
//   // console.log(values);
//   // console.log(actions);
// };
// const onSubmit = async (values, actions) => {
const onSubmit = async (values: any, actions: any) => {
  
  // alert("sumbint");
  // alert(values);

  // console.log("submin");
  // console.log(values);
  // console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  // router.push('/react')
  
};

const BasicForm = () => {
  // const router = useRouter()

  const { values, handleBlur,errors,touched,isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
   
    onSubmit,
    
  });
    return (
      <form onSubmit={handleSubmit} autoComplete="off" className="h-50 content-center">
        <label htmlFor="name">الاسم </label>
        <input 
        value={values.name}
        onChange={handleChange}
        id="name" type="string" placeholder="Enter your name" 
        className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.email && touched.email && <p className="error">{errors.email}</p>}
        <label htmlFor="email">الايميل</label>
        <input 
        value={values.email}
        onChange={handleChange}
        id="email" type="email" placeholder="Enter your email" 
        className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && <p className="error">{errors.email}</p>}

        <label htmlFor="age">السن</label>
        <input 
        value={values.age}
        onChange={handleChange}
        id="age" type="number" placeholder="Enter your age" 
        className={errors.age && touched.age ? "input-error" : ""}
        
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}

        <label htmlFor="password">كلمة المرور</label>
        <input 
        value={values.password}
        onChange={handleChange}
        id="password" type="password" placeholder="Enter your password" 
        className={errors.password && touched.password ? "input-error" : ""}
        
        />
        {errors.password && touched.password && <p className="error">{errors.password}</p>}

        <label htmlFor="confirmPassword">اعادة ادخال كلمة المرور</label>
        <input 
        value={values.confirmPassword}
        onChange={handleChange}
        id="confirmPassword" type="password" placeholder="Enter your confirm passord" 
        className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
        
        />
        {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        <button className="button" disabled={isSubmitting} type="submit" >ادخل</button>
      </form>
    );
  };
  export default BasicForm;