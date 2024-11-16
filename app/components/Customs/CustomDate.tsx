import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {

    const [ field, meta ] = useField(props.name);
    // console.log(field)
    // console.log(meta)
    return(
        <>
        {/* <label>{label}</label>
        <input {...field} {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
        />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>} */}


             {/* <label htmlFor="date">date</label> */}
        {/* <div id="date-range-picker" date-rangepicker className="flex items-center mt-1"> */}
          {/* <div className="relative"> */}
            {/* <span className="mx-4 text-gray-500 mt-9">to</span> */}

            
            <label>{label}</label>
            <input 
            {...field} {...props}

            />
            {meta.touched && meta.error && <div className="error fixed w-[100px]">{meta.error}</div>}
            {/* </div>  */}
      {/* </div> */}
        </>
    );
};
export default CustomInput;
