import React from "react";
import { Navbar } from "../../Components/index";

export const Careers = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="w-full flex justify-center items-center space-x-32">
          <p className="text-4xl text-blue-900 hover:cursor-pointer">Careers</p>
          <a href="/majors">
            <p className="text-4xl text-blue-200 hover:cursor-pointer hover:text-blue-500 transition-all">
              Majors
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Careers;
