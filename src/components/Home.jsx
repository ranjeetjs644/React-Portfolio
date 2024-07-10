import React from "react";
import Typing from "./Typing";
import "../index.css";
import myImg from "../../public/myImage.jpg";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Social from "./Social";

function Home() {
  return (
    <>
      <Helmet>
        <title>Ranjeet Patel</title>
      </Helmet>
      <main className="min-w-screen min-h-screen mx-auto overflow-x-hidden ">
        <div className="hidden md:block ">
          <Social />
        </div>
        <section className=" pt-8 flex flex-col items-center justify-center md:flex-row-reverse md:w-[75%] md:mx-auto md:mt-36 ">
          <div
            id="left"
            className="w-full py-8 pb-4 pl2 md:w-1/2 flex items-start justify-center md:justify-end   "
          >
            <img
              src={myImg}
              alt=""
              className="w-60 md:w-72 rounded-full shadow-md"
            />
          </div>

          <div
            id="right"
            className="w-full flex flex-col wgap-3 px-8 py-9 md:w-1/2    "
          >
            <p className="text-[16px] text-gray-800">Hi, my name is</p>
            <h2 className="text-5xl font-semibold text-gray-800  ">
              Ranjeet Patel
            </h2>
            <p className=" text-[17px] text-teal-950 font-light py-2 w-[90%]">
              A passionate web developer focused on building interactive and
              responsive web applications
            </p>
            <div className="w-full flex flex-wrap my-4">
              <Link
                to="https://drive.google.com/file/d/1oN3nQn4WJP1jGP7rai7gFa1uKCJ1dWGj/view?usp=sharing"
                target="_blank"
              >
                <button className="text-base bg-teal-800 font-Inter text-gray-200 px-3 py-1 rounded-md shadow-md transition-transform hover:translate-x-1 ">
                  Resume
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
