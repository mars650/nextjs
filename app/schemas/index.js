import * as yup from "yup";

const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; 
const regularEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const basicSchema = yup.object().shape({
    username: yup.string().min(4).required("Required"),
    department:  yup.string().oneOf(["1", "2", "3"],"String").required("Required"),
    email: yup.string().email("Please Enter a valid email").matches(regularEmail, {message: "يرجا ادخال اميل صحيح"}).required("Required"),
    // email: yup.string().matches(mailformat, {message: "Please add email"}).email("Please Enter a valid email").required("Required"),
    day: yup.number().positive().integer().min(1).max(31).required("Required"),
    month:  yup.string().oneOf(["01", "02", "03", "04","05","06","07","08","09","10","11","12"],"String").required("Required"),
    // month:  yup.string().oneOf(["January", "February", "March", "April","May","June","July","August","September","October","November","December"],"String").required("Required"),
    year: yup.number().positive().integer().min(1900).max(2024).required("Required"),
    // password: yup.string().min(8).matches(regularExpression, {message: "Please create a stronger password"}).required("Required"),
    password: yup.string().min(8,"كلمة المرور لا تقل عن 8 ").required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), "null"], "كلمة المرور لا تتطابق").required("Required"),
    type:  yup.string().oneOf(["male", "female"],"String").required("Required"),

});
export const loginSchema = yup.object().shape({
    username: yup.string().min(4).required("Required"),
    password: yup.string().min(8).required("Required"),
    // password: yup.string().min(8).matches(regularExpression, {message: "Please create a stronger password"}).required("Required"),
   
});

export const addingSchema = yup.object().shape({
    course: yup.string().required("Required"),
    // resarch: yup.string().required("Required"),
    dateStart: yup.string().required("Required"),
    dateEnd: yup.string().required("Required"),
    maxNumber: yup.string().required("Required"),
    minNumber: yup.string().required("Required"),
    // maxNumber: yup.number().positive().integer().required("Required"),
    // minNumber: yup.number().positive().integer().required("Required"),
    comment: yup.string().required("Required"),
    // email: yup.string().matches(mailformat, {message: "Please add email"}).email("Please Enter a valid email").required("Required"),
    // age: yup.number().positive().integer().required("Required"),
    // password: yup.string().min(8).matches(regularExpression, {message: "Please create a stronger password"}).required("Required"),
    // confirmPassword: yup.string().oneOf([yup.ref("password"), "null"], "Passwords must match").required("Required"),
});

export const advancedSchema = yup.object().shape({
    subject: yup.string().min(4,"subject must be least 3 characters lonf").required("Required"),
    username: yup.string().min(3,"username must be least 3 characters lonf").required("Required"),
    jobType: yup.string().oneOf(["designer", "developer", "manager", "voloa"],"String").required("Required"),
    textType: yup.string().oneOf(["research", "quiz", "sheet"],"String").required("Required"),
    dateMin: yup.date().required("Required"),
    dateMax: yup.date().required("Required"),
    numberMin: yup.number().positive().integer().required("Required"),
    numberMax: yup.number().positive().integer().required("Required"),
    // acceptedTos: yup.boolean().oneOf([true], "Please accept the terms of service"),

});
