import React from "react";
import PageHeader from "../../components/PageHeader";
import banner from "../../assets/PageBanner.png";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { useEffect } from "react";

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader imgSrc={banner} />
      <div className="container mx-auto px-5 my-10 md:my-20">
        <SectionHeading
          head="About the Company"
          subtext={
            <>
              <p>
                Established in 1998, Cardeal.com stands as a premier digital
                marketplace and solutions provider within the automotive
                industry. Headquartered in Chicago, our platform bridges the gap
                between car shoppers and sellers, offering a comprehensive array
                of resources and tools. Our mission is to empower consumers with
                the knowledge needed to make informed buying decisions while
                facilitating seamless connections with automotive retailers. In
                response to the rapidly evolving market, Cardeal.com equips
                dealerships and OEMs with cutting-edge technical solutions and
                data-driven intelligence to effectively engage ready-to-buy
                shoppers, optimize inventory turnover, and expand market share.
              </p>
              <br />
              <p>
                In 2018, our acquisition of Dealer Inspire® further solidified
                our commitment to innovation. Dealer Inspire® specializes in
                developing forward-thinking technologies that enhance dealership
                operations, streamline the car buying process, and cultivate
                connected digital experiences that drive sales and service. For
                comprehensive information about our services and offerings,
                please visit www.Cardeal.com.
              </p>
            </>
          }
        />
      </div>
      <div className="container mx-auto px-5 my-10 md:my-20">
        <SectionHeading
          head="Our Roots"
          subtext={
            <>
              <p>
                At Cardeal.com, we pioneered car search, revolutionizing how
                buyers and sellers connect. Our innovative solutions ensure
                seamless matches between individuals and their ideal vehicles.
                Despite our nationwide presence, we uphold a startup ethos,
                prioritizing innovation and employee well-being.
              </p>
              <br />
              <p>
                Recognized for excellence, Cardeal.com boasts an award-winning
                brand and leadership team, comprising the industry's top talent.
                We've earned accolades from prestigious publications like The
                Chicago Tribune, Built in Chicago, Chicago Innovation, and U.S.
                News &amp; World Report, solidifying our reputation as one of the
                best places to work. Passion for innovation and commitment to
                our people remain at the heart of our operations.
              </p>
            </>
          }
        />
      </div>
    </>
  );
}

export default About;
