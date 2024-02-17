import { useContext, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import { Link, useNavigate } from 'react-router-dom';
import UsersContext from "../../../context/UsersContext";
import FormikInput from "../../UI/Input/FormikInput";

const Login = () => {

  const navigate = useNavigate();
  const { users, setLoggedInUser } = useContext(UsersContext);
  const [failedToLogin, setFailedToLogin] = useState(false);

  const formValues = {
    email: '',
    slaptazodis: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Įveskite tinkamą el. pašto adresą')
      .required('Būtina užpildyti lauką')
      .trim(),
    slaptazodis: Yup.string()
      .required('Būtina užpildyti lauką')
      .trim()
  });

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      const loggedInUser = users.find((user: any) => user.email === values.email && bcrypt.compareSync(values.slaptazodis, user.slaptazodis));
      if (loggedInUser === undefined) {
        setFailedToLogin(true);
      }
      else {
        setLoggedInUser(loggedInUser);
        navigate('/');
      }
    }
  });

  return (
    <main className="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}} >
      <form onSubmit={formik.handleSubmit} className="w-50">
      <label htmlFor="email" className="form-label">El. pašto adresas:</label>
        <FormikInput
          type="email"
          name="email"
          formik={formik}
          placeholder="Įveskite el. pašto adresą"
        />
        <label htmlFor="slaptazodis" className="form-label">Slaptažodis:</label>
        <FormikInput
          type="password"
          name="slaptazodis"
          formik={formik}
          placeholder="Įveskite slaptažodį"
        />
        <button type="submit" className="btn btn-outline-primary me-3">Prisijungti</button>
        <Link to="/registracija"><button type="button" className="btn btn-outline-info">Registruotis</button></Link><br/>
      </form>
      {
        failedToLogin && <p style={{fontSize: "0.8rem", color: "red"}}>Vartotojas su tokiu el. paštu ar slaptažodžiu nerastas</p>
      }
    </main>
  );
}

export default Login;