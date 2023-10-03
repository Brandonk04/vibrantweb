import React from "react";
import { company_brands } from "./localDatabase";
import { RiTeamLine } from "react-icons/ri";
import { LiaIndustrySolid } from "react-icons/lia";
import { GiJugglingClubs } from "react-icons/gi";
import security_image from "../assets/security (2).svg";
import { Link } from "react-router-dom";
function OurClient() {
  return (
    <div className="bg-white w-10/12 m-auto py-10">
      <h1 className="font-bold text-2xl text-center">Our Clients</h1>
      <p className="text-lg text-center">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="brands_images grid md:grid-cols-4 lg:grid-cols-7 gap-4 py-8">
        {company_brands.map((image) => (
          <div className="flex items-center " key={image._id}>
            <img src={image.image} alt="brands" className="w-[60px]" />
          </div>
        ))}
      </div>
      <div className="md:hidden flex items-center flex-wrap justify-between">
        {company_brands.map((image) => (
          <div className="  " key={image._id}>
            <img src={image.image} alt="brands" className="w-[100px]" />
          </div>
        ))}
      </div>
      <h1 className="pt-8 text-center font-bold text-xl md:w-[30%] m-auto">
        Manage your entire community in a single system
      </h1>
      <p className="text-center pb-4">Who is VibrantWeb Solutions suitable for?</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="text-center   boxshadow p-8 rounded-sm">
          <div className="flex justify-center">
            <RiTeamLine className="text-green-500" size={50} />
          </div>
          <h1 className="text-xl font-bold py-4">Non-Profit Organisations</h1>
          <p>
            As part of our socail responsiblility plan we offer NGOs discounted prices on our 
          packages.
          </p>
        </div>
        <div className="text-center boxshadow p-8 rounded-sm">
          <div className="flex justify-center">
            <LiaIndustrySolid className="text-green-500" size={50} color="" />
          </div>
          <h1 className="text-xl font-bold py-4 ">Small-Medium Enterprises</h1>
          <p>
          We empower Small-Medium Enterprises with budget-friendly yet high-quality web development and social 
          media marketing services to drive their online presence and business growth without breaking the bank.
          </p>
        </div>
        <div className="text-center boxshadow p-8 rounded-sm">
          <div className="flex justify-center">
            <GiJugglingClubs className="text-green-500" size={50} />
          </div>
          <h1 className="text-xl font-bold py-4"> Clubs And Groups</h1>
          <p>
          We provide cost-effective web development and social media marketing services 
          tailored to elevate Clubs and Groups, amplifying their online reach and engagement effectively.
          </p>
        </div>
      </div>
      {/* last div */}
      <div className="py-8 grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        <div className="image">
          <img src={security_image} alt="image1" className="w-full" />
        </div>
        <div className="text">
          <h1 className="font-bold text-2xl py-4">
            The Growth Trend of VibrantWeb Solutions - last 2 years.
          </h1>
          <p>
          Embracing a transformative three-year tenure at VibrantWeb Solutions, a
          web development and social media marketing firm, 
          We delved into the art of creating captivating online landscapes. 
          Gaining expertise in crafting remarkable websites and strategic marketing, 
          We am primed to elevate your digital presence and bring your vision to life with finesse.
          </p>
          <Link to="/learn-more">
            <button className="bg-green-500 text-white font-bold   p-2 my-4 rounded focus:outline-none focus:ring hover:bg-green-800 active:bg-blue-400">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurClient;
