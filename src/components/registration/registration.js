import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import loginBanner from "../../assests/registrationBanner.svg";
import "./registration.css";
import googleicon from "../../assests/icons8-google-18.svg";
import facebookicon from "../../assests/icons8-facebook-18.svg";
import { registerCust } from "../../api/customers";
import useForm from "../Hooks/useForm";
import { AlertComponent } from "../AlertComponent";
function Registration() {
  const formlogin = () => {
    console.log("Form Submitted VALUES ", values);
  };
  const [alertData, setAlertData] = useState({
    isOpen: false,
    message: { heading: "", message: "" },
    variant: "success",
  });
  const [loading, setLoading] = useState(false);
  const [fNameRef, lNameRef, emailRef, passRef] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const { handleChange, values, errors, handleSubmit } = useForm(formlogin);
  // console.log("Form Values", values);
  console.log("Form Errors", errors);
  async function handleRegister() {
    setLoading(true);
    const data = {
      first_name: fNameRef.current.value,
      last_name: lNameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    await registerCust(data)
      .then((resp) => {
        setLoading(false);
        setAlertData({
          isOpen: true,
          variant: "success",
          message: {
            heading: "Registration Successful.",
          },
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlertData({
          isOpen: true,
          variant: "danger",
          message: {
            heading: "ohh! Something went wrong",
            message: err.response.data.errors,
          },
        });
      });
  }

  return (
    <div className="container-fluid ">
      <div className="row banner">
        <img src={loginBanner} alt="...."></img>
      </div>
      <div className="row heading d-flex justify-content-center">
        Register With Us
      </div>
      <div className="row subheading d-flex justify-content-center">
        and become a part of HOB cult
      </div>
      <div className="row login-via  d-flex justify-content-evenly">
        <button class="btn btn-facebook " type="button">
          <img src={facebookicon} alt="..." />
          Facebook
        </button>
        <button class="btn btn-google" type="button">
          <img src={googleicon} alt="..." />
          Google
        </button>
      </div>
      <div className="row d-flex justify-content-center text-or">OR</div>
      <div className="row d-flex justify-content-center ">
        <form
          className="row d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="row  input-group input-group-lg ">
            <input
              ref={fNameRef}
              type="text"
              class="form-control"
              name="FirstName"
              placeholder="First Name"
              onChange={handleChange}
            />
            {errors.firstName && (
              <small className="text-danger">{errors.firstName}</small>
            )}
          </div>
          <div className="row  input-group input-group-lg">
            <input
              ref={lNameRef}
              type="text"
              class="form-control text-start"
              name="LastName"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <div className="row input-group input-group-lg ">
            <input
              ref={emailRef}
              type="email"
              name="Email"
              class="form-control"
              placeholder=" Email ID "
              onChange={handleChange}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>
          <div className="row  input-group input-group-lg">
            <input
              ref={passRef}
              type="password"
              name="Password"
              class="form-control"
              placeholder="Password"
              onChange={handleChange}
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>
        </form>
      </div>
      <div className="row d-flex justify-content-center text-login">
        Receive Updates in Email
      </div>
      <AlertComponent data={alertData} setData={setAlertData} />
      <div className="row d-flex justify-content-center ">
        <button
          disabled={loading}
          onClick={handleRegister}
          class="btn btn-register"
          type="button"
        >
          {!loading ? "REGISTER" : "Registering..."}
        </button>
      </div>
      <div className="row d-flex justify-content-center text-login">
        Have an Account? LOGIN
      </div>
    </div>
  );
}

export default Registration;
