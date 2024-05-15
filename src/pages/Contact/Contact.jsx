import React from "react";
import banner from "../../assets/PageBanner.png";
import PageHeader from "../../components/PageHeader";
import {ArrowRightOutlined} from '@ant-design/icons';
import SectionHeading from "../../components/SectionHeading/SectionHeading";



function Contact() {
  return (
    <>
      <PageHeader imgSrc={banner} />
      <div className="container mx-auto my-[5rem]">
      <SectionHeading
        head="Have a question? Let's connect"
        
      />
        
        <div className="contact-form border-2 w-[80%] mx-auto p-9 shadow-lg	my-10">
          <form>
            <div class="form-control w-full mb-10">
              <input type="text" id="name" required />
              <label className="md:text-[20px] text-[18px]" htmlFor="name">Enter your name</label>
            </div>
            <div class="form-control w-full mb-10">
              <input type="number" id="number" required />
              <label className="md:text-[20px] text-[18px]" htmlFor="number">Enter your number</label>
            </div>
            <div class="form-control w-full mb-10">
              <input type="email" id="name" required />
              <label className="md:text-[20px] text-[18px]" htmlFor="email">Enter your email</label>
            </div>
            <button type="submit" className="w-full text-center bg-[#9FFB7E] text-black p-4 mt-10 text-xl"  >
                Send Inquiry <ArrowRightOutlined />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
