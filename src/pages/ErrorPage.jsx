import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div classNameName="">
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl h-64 md:h-96 mb-12 mx-auto">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
          <div className="text-center">
            <span className="text-xs font-semibold text-blue-500 uppercase">
              Error 404
            </span>
            <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
              Page not found
            </h2>
            <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
              Sorry! We are unable to find the page you are looking for.
            </p>
            <div>
              <Link to="/"
                className="block md:inline-block px-5 py-3 md:mr-3 mb-3 md:mb-0 text-sm bg-blue-500 hover:bg-blue-600 text-white font-semibold border border-blue-500 hover:border-blue-600 rounded transition duration-200"
              >
                Return to homepage
                </Link>
                <Link to="/login"
                className="block md:inline-block px-5 py-3 text-sm font-semibold text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 hover:border-blue-600 rounded transition duration-200"
              >
                Login
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
