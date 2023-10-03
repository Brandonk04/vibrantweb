import React from "react";
import { Link } from "react-router-dom";
import about from "../assets/about.svg";
function AboutUs() {
  return (
    <div>
      <div className=" w-10/12 m-auto grid sm:-grid-cols-1 md:grid-cols-2 py-8">
        <div className="mb-8">
          <img className="w-full" src={about} alt="about" />
        </div>
        <div className="text">
          <h1 className="text-3xl font-bold ">
            About VibrantWeb Solutions
          </h1>
          <p className="py-4 text-lg">
            
Welcome to VibrantWeb Solutions, where affordability meets excellence in 
web development and social media marketing. With a steadfast commitment to quality, 
we specialize in delivering exceptional digital solutions tailored to meet your unique business needs. 
Our team thrives on turning your ideas into captivating online experiences without compromising on budget. 
At VibrantWeb Solutions, we believe in empowering businesses, particularly small and medium enterprises, 
with the tools they need to shine in the ever-evolving digital landscape. 
Let's embark on a journey of growth and success together.
          </p>

          <h1 className="text-3xl font-bold ">
            About Our Founder Brandon Katjitundu
          </h1>
          <p className="text-lg pb-4 md:hidden lg:block">
          Brandon Katjitundu is a fervent tech and space enthusiast whose love for technology sparked at the age of 16. 
          Growing up without internet access or a laptop, a smartphone in grade 10 unveiled a world of opportunities 
          and kindled a relentless curiosity for software development. 
          Through perseverance and a series of short courses, including the 
          recent web development program by CODE4U, the journey into web development was set in motion.

          Beyond the realm of technology, our founder is a devoted member of the United Youth Charity Association, 
          striving to uplift underprivileged individuals from marginalized communities. 
          The dedication to social progress led to the co-founding of a weekly email newsletter, 
          sharing insights on tech, business news, and personal development in 2021.
          
          Currently pursuing a Bachelor of Human Resources at Namibia University of Science and Technology (NUST), 
          our founder dons multiple hats as the Chief Technology Officer (CTO) and Chief Executive Officer (CEO) of 
          VibrantWeb Solutions. Driving business activities, the focus remains on steering the company towards 
          sustainability and profitability, inspired by a vision to make a lasting impact in the digital landscape.
          </p>
          <p className="text-lg pb-4 md:hidden lg:block">
          In this diverse journey of tech, education, and community, 
          we at VibrantWeb Solutions embrace the spirit of innovation and social responsibility. 
          With our founder's drive and expertise, we're committed to crafting exceptional digital experiences 
          that elevate your vision. Join us in this transformative venture, 
          where passion and grit fuels progress, and together, we shape a vibrant digital future.
          </p>
          <Link to="/about">
            <button className="text-white bg-green-500 rounded-md p-2 hover:bg-green-600">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
