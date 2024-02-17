import { useContext, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import UsersContext from "../../../context/UsersContext";
import FormikInput from "../../UI/Input/FormikInput";

const Register = () => {

  const navigate = useNavigate();
  const { users, setusers, UsersActionTypes, setLoggedInUser } = useContext(UsersContext);
  const [failedToRegister, setFailedToRegister] = useState({
    email: '',
    name: ''
  });

  const formValues = {
    vartotojoVardas: '',
    email: '',
    slaptazodis: '',
    pakartotiSlaptazodi: '',
    amzius: '',
    profilioNuotrauka: ''
  };

  const validationSchema = Yup.object({
    vartotojoVardas: Yup.string()
      .min(5, 'Vartotojo varde mažiausiai 5 simboliai')
      .max(20, 'Vartotojo varde daugiausiai 20  simboliai')
      .required('Būtinai užpildykite lauką')
      .trim(),
    email: Yup.string()
      .email('Įveskite teisingą el. paštą')
      .required('Būtinai užpildykite lauką')
      .trim(),
    slaptazodis: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
        'Slaptažodis turi būti 5-20 simbolių. Privalo būti bent viena raidė ir skaičius'
      )
      .required('Būtinai užpildykite lauką')
      .trim(),
    pakartotiSlaptazodi: Yup.string()
      .oneOf([Yup.ref('slaptazodis')], 'Slaptažodžiai turi sutapti')
      .required('Būtinai užpildykite lauką')
      .trim(),
    amzius: Yup.number()
      .moreThan(13, 'Jūsų amžius privalo būti bent 14 metų')
      .required('Būtinai užpildykite lauką'),
    profilioNuotrauka: Yup.string()
      .url('Privalo būti tinkamas URL adresas')
      .trim()
  });

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {

      if (users.find((user: any) => user.vartotojoVardas === values.vartotojoVardas)) {
        setFailedToRegister(prevState => {
          return {
            ...prevState,
            name: 'Vartotojas su tokiu vardu jau egzistuoja'
          }
        });
      } else {
        setFailedToRegister(prevState => {
          return {
            ...prevState,
            name: ''
          }
        });
      }
      if (users.find((user: any) => user.email === values.email)) {
        setFailedToRegister(prevState => {
          return {
            ...prevState,
            email: 'Vartotojas su tokiu el. paštu jau egzistuoja'
          }
        });
      } else {
        setFailedToRegister(prevState => {
          return {
            ...prevState,
            email: ''
          }
        });
      }

      if (!users.find((user: any) => user.vartotojoVardas === values.vartotojoVardas) && !users.find((user: any) => user.email === values.email)) {
        const workingUser = {
          id: uuid(),
          vartotojoVardas: values.vartotojoVardas,
          email: values.email,
          slaptazodis: bcrypt.hashSync(values.slaptazodis, 8),
          amzius: values.amzius,
          registracijosData: new Date().toISOString().slice(0, 10),
          profilioNuotrauka: values.profilioNuotrauka ? values.profilioNuotrauka : 'https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg',
          likedIds: ''
        };
        setusers({
          type: UsersActionTypes.add,
          data: workingUser
        });
        setLoggedInUser(workingUser);
        navigate('/');
      }
    }
  });

  return (
    <main className="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}} >
      <h1>Registracija</h1>
      <form onSubmit={formik.handleSubmit} className="w-50">
        <FormikInput
          type="text"
          name="vartotojoVardas"
          formik={formik}
          placeholder="Įveskite vartotojo vardą..."
        />
        <FormikInput
          type="email"
          name="email"
          formik={formik}
          placeholder="Įveskite el. paštą..."
        />
        <FormikInput
          type="password"
          name="slaptazodis"
          formik={formik}
          placeholder="Sugalvokite slaptažodį"
        />
        <FormikInput
          type="password"
          name="pakartotiSlaptazodi"
          formik={formik}
          placeholder="Pakartokite slaptažodį"
        />
        <FormikInput
          type="number"
          name="amzius"
          formik={formik}
          placeholder="Įveskite savo amžių..."
        />
        <FormikInput
          type="url"
          name="profilioNuotrauka"
          formik={formik}
          placeholder="Įveskite avataro URL adresą..."
        />
        <button type="submit" className="btn btn-outline-primary mt-3 mb-3 me-3">Registruotis</button>
      </form>
      {
        failedToRegister.name && <p>{failedToRegister.name}</p>
      }
      {
        failedToRegister.email && <p>{failedToRegister.email}</p>
      }
    </main>
  );
}

export default Register;