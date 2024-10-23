import React from "react";
import Header from "./component_header/header";
import Footer from "./component_footer/footer";
// import Image from "next/image";

export default function page() {
  return (
    <div>
      <Header />
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/download.jpeg')"}}>
      <ul className="container fixed bottom-48  bg-white w-full h-24 py-2 pl-8 items-center ml-4 rounded-lg">
        <li className="text-red-600 font-bold text-2xl flex justify-center">contact us</li>
        <li className="flex justify-center flex items-center">
        <button className="bg-red-600 text-white w-16 h-9 rounded-md font-serif ">contact</button>
        </li>
      </ul>
      </div>
      <Footer />
    </div>
  );
}
