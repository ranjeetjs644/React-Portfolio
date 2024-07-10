import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <main className="w-dcreen h-screen mx-auto flex items-center justify-center relative ">
        {/* <h2 className="text-3xl">This is about section</h2> */}
      </main>
    </>
  );
}

export default About;
