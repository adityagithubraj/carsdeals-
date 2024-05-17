import React from "react";
import banner from "../../assets/PageBanner.png";
import PageHeader from "../../components/PageHeader";
import InputField from "../../components/InputField";
import { ArrowRightOutlined } from "@ant-design/icons";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";



function Signup() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const notify = () => toast.success("Account Created !!!");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notify();
    console.log("Signup Form Data");
    console.log({ formData });
    setFormData({
      name: "",
      email: "",
      pass: "",
    });
  };

  return (
    <>
      <PageHeader imgSrc={banner} />
      <div className="container mx-auto my-[5rem] px-5">
        <SectionHeading head="Create a new account" />
        <div className="contact-form border-2 w-full md:w-[80%] mx-auto p-4 md:p-9 shadow-lg	my-10">
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              id="name"
              value={formData.name}
              label="Enter your name"
              required
              name="name"
              onChangeHandler={handleChange}
            />
            <InputField
              type="email"
              id="email"
              value={formData.email}
              label="Enter your email"
              required
              name="email"
              onChangeHandler={handleChange}
            />
            <InputField
              type="password"
              id="password"
              value={formData.pass}
              label="Enter your password"
              required
              name="pass"
              onChangeHandler={handleChange}
            />

            <button
              type="submit"
              className="w-full text-center bg-[#9FFB7E] text-black p-2 md:p-4 mt-1 md:mt-10 text-base md:text-xl"
            >
              Sign Up <ArrowRightOutlined />
            </button>
            <p className="text-center my-5">or</p>
            <p
              className="text-center cursor-pointer lg:text-lg"
              onClick={() => navigate("/login")}
            >
              Login to your account{" "}
            </p>
          </form>
          <ToastContainer autoClose={1500} />
        </div>
      </div>
    </>
  );
}

export default Signup;
