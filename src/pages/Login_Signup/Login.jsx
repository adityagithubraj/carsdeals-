import React from "react";
import banner from "../../assets/PageBanner.png";
import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import InputField from "../../components/InputField";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";


function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  const navigate = useNavigate();
  const notify = () => toast.success("You Logged In To Your Account !!!");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Login form data");
    console.log(formData);
    setFormData({
      name: "",
      email: "",
    });
    notify();
  };

  return (
    <>
      <PageHeader imgSrc={banner} />
      <div className="container mx-auto my-[5rem] px-5">
        <SectionHeading head="Already have an account! " />
        <div className="contact-form border-2 w-full md:w-[80%] mx-auto p-4 md:p-9 shadow-lg	my-10">
          <form onSubmit={handleFormSubmit}>
            <InputField
              type="text"
              id="name"
              name="name"
              onChangeHandler={handleChange}
              label="Enter your name"
              value={formData.name}
              required
            />
            <InputField
              type="email"
              id="email"
              label="Enter your email"
              name="email"
              value={formData.email}
              onChangeHandler={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full text-center bg-[#9FFB7E] text-black p-2 md:p-4 mt-1 md:mt-10 text-base md:text-xl"
            >
              Log In <ArrowRightOutlined />
            </button>
            <p className="text-center my-5">or</p>

            <p
              className="text-center cursor-pointer lg:text-lg"
              onClick={() => navigate("/signup")}
            >
              Create a new account{" "}
            </p>
          </form>
          <ToastContainer autoClose={1500} />
        </div>
      </div>
      

      
    </>
  );
}

export default Login;
