
import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {

    const [ field, meta  ] = useField(props.name);
    // console.log(field)
    // console.log(meta)
    return(
        <>
        <label>{label}</label>
        <select {...field} {...props}
        // {options}
        className={meta.touched && meta.error ? "input-error" : ""}
        />
            {meta.touched && meta.error && <div className="error fixed w-[100px] block ">{meta.error}</div>}
        </>
    );
};
export default CustomSelect;
