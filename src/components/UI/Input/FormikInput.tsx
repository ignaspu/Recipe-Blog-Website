const FormikInput = ({ type, name, formik, placeholder }: {type:any, name:any, formik:any, placeholder:any}) => {
  return (
    <div>
      <input
        className="form-control"
        type={type}
        name={name} id={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={placeholder?placeholder:''}
      />
      {
        formik.touched[name] && formik.errors[name] &&
        <p
          style={{ color:"red", fontSize: '0.7rem' }}
        >{formik.errors[name]}</p>
      }
    </div>
  );
}
 
export default FormikInput;