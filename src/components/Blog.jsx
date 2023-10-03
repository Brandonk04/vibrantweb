import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { news } from "./localDatabase";
function Blog() {
  return (
    <div className="bg-gray-100">
      <div className="w-10/12 m-auto py-8">
        <h1 className="text-center font-bold py-4 text-xl uppercase">
          Stay Informed In 5 Minutes
        </h1>
        <p className="text-center text-lg pb-4">
        Revolox is a business and technology news and personal development email newsletter
        that delivers a daily or weekly email to subscribers with the latest news 
        and updates from the tech industry, as well as personal development tips and resources.
        </p>
        <div className="">
          <div className="grid max-sm:grid-cols-1 md:grid-cols-3 gap-y-28">
            {news.map((x) => (
              <div className="bg-white rounded-md p-2 m-2 " key={x._id}>
                <img src={x.image} className="" alt="news-image" />

                <div className="py-2">
                  <h1 className="text-xl font-bold py-4">{x.headline}</h1>
                  <div className="">
                    <p className="text-lg ">{x.newsDetails.slice(0, 70)}...</p>
                    <div className="flex items-center">
                      <Link to="/blog-detail" className=" text-green-500">
                        Read More
                      </Link>
                      <BsArrowRightShort
                        size={20}
                        className="ml-4 text-green-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
