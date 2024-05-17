import React from "react";
import banner from "../../assets/PageBanner.png";
import PageHeader from "../../components/PageHeader";
import { ArrowRightOutlined } from "@ant-design/icons";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import InputField from "../../components/InputField";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });

  const notify = () => toast.success("Form Submitted");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Form data");
    console.log({ formData });
    setFormData({
      name: "",
      number: "",
      email: "",
    });
    notify();
  };

  return (
    <>
      <PageHeader imgSrc={banner} />
      <div className="container mx-auto my-[5rem] px-5">
        <SectionHeading head="Have a question? Let's connect" />

        <div className="contact-form border-2 w-full md:w-[80%] mx-auto p-4 md:p-9 shadow-lg	my-10">
          <form onSubmit={handleFormSubmit}>
            <InputField
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChangeHandler={handleChange}
              label="Enter your name"
              required
            />
            <InputField
              type="number"
              id="number"
              name="number"
              label="Enter your number"
              value={formData.number}
              onChangeHandler={handleChange}
              required
            />
            <InputField
              type="email"
              id="email"
              name="email"
              label="Enter your email"
              value={formData.email}
              onChangeHandler={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full text-center bg-[#9FFB7E] text-black p-2 md:p-4 mt-1 md:mt-10 text-base md:text-xl"
            >
              Send Inquiry <ArrowRightOutlined />
            </button>
          </form>
          <ToastContainer autoClose={1500}/>
        </div>
      </div>
    </>
  );
}

export default Contact;
