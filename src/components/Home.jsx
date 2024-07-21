import React from "react";
import "../index.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Social from "./Social";
import TextSpan from "./TextSpan";

function Home() {
  const name = "Ranjeet Patel".split("");
  return (
    <>
      <Helmet>
        <title>Ranjeet Patel</title>
      </Helmet>
      <main className="min-w-screen min-h-screen mx-auto overflow-x-hidden z-40 ">
        <div className="hidden md:block ">
          <Social />
        </div>
        <section className=" flex flex-col items-start justify-center p-6 mt-4 md:flex-col md:items-startm md:w-[75%] md:mx-auto md:mt-36  ">
          <div className="items-center justify-center 500 py-12 sm:py-8 pl-0">
            <p className="text-3xl font-space text-gray-400 font-semibold pl-2 md:py-2">
              Hi, my name is
            </p>
            <h2 className=" text-8xl sm:text-9xl tracking-tighter font-space text-slate-400 cursor-pointer  ">
              {name.map((letter, index) => (
                <TextSpan key={index}>{letter}</TextSpan>
              ))}
            </h2>
            <p className=" text-2xl font-space text-gray-400 font-light py-2 w-[100%]  sm:w-[80%] md:w-[60%] text-start md:py-4 ">
              A passionate web developer focused on building interactive and
              responsive web stuffs.
            </p>
            <div className="w-full flex flex-wrap my-4 ">
              <Link
                to="https://drive.google.com/file/d/1oN3nQn4WJP1jGP7rai7gFa1uKCJ1dWGj/view?usp=sharing"
                target="_blank"
              >
                <button className="text-base bg-blue-950 font-Inter text-gray-200 px-3 py-1 rounded-md shadow-md transition-transform hover:translate-x-1 ">
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
