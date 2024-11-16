import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {

    const [ field, meta, helpers ] = useField(props.name);
    // console.log(field)
    // console.log(meta)
    return(
        <>
        <label>{label}</label>
        <input {...field} {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
        />
            {meta.touched && meta.error && <div className="error fixed w-[100px]">{meta.error}</div>}
        </>
    );
};
export default CustomInput;
