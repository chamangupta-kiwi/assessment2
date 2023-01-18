import React from "react";
import { useField, ErrorMessage } from "formik";

const TextField = ({ label, ...props }) => {
  // console.log(label)
  //console.log(props)
  const [field, meta] = useField(props);
  //  console.log(field)
  //console.log(meta)
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export default TextField;
