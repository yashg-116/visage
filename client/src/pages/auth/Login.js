import React from 'react';
import Form from '../../components/shared/Form/Form';
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row" style={{ backgroundColor: "#A5D9E9", color: "black" }}>
          <div className="col-md-8 login-banner">
            <img src="./assets/images/banner1.png" alt="loginImage" />

          </div>
          <div className="col-md-4 form-container" style={{ paddingLeft: "0px", paddingRight: "135px" }}>
            <Form
              formTitle={"Login"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Login;
