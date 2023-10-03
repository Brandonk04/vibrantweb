import React from "react";
import hompepage_image from "../assets/homepage.svg";
function Homepage() {
  return (
    <div className="bg-[rgb(245,247,250)]  py-16  md:py-16 lg:py-32 xl:py-64 mt-4 lg:h-[calc(100vh-3.5rem)]">
      <div className="w-10/12 m-auto md:flex justify-between">
        <div className="text">
          <h1 className="md:text-4xl lg:text-6xl font-bold">
          <span className="text-green-500">VibrantWeb Solutions</span>{" "}
            A Web Development & Social Media Marketing Powerhouse{" "}
          </h1>
          <p className="my-8">
          We blend innovation, creativity, and precision to craft vibrant websites that leave a lasting impression.
          Let's infuse your digital presence with energy, color, and success. 
          </p>
          <button className="bg-green-500 text-white rounded p-2">
            Register
          </button>
        </div>
        <div className="image mt-8">
          <img src={hompepage_image} alt="homepage_image" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
