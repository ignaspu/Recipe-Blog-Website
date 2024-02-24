import { useContext } from "react";
import UsersContext from "../../../context/UsersContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {

  const navigate = useNavigate();

  const { loggedInUser } = useContext(UsersContext);

  console.log(loggedInUser)

  return (
    <>
    {
      loggedInUser === undefined ?
      navigate('/')
      : null
    }
    </>
  );
}

export default Admin;