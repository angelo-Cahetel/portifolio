import React from "react";
import openToWork from "../assets/img/openToWork.svg";
import "../index.css";

function Header() {
  return (
    <header className="h-[200vh] mb-[-100vh] relative">
      <div className="flex w-full min-h-screen p-6 sticky">
        <div className="bg-white rounded-2xl flex flex-col justify-between w-full px-8 py-6 lg:p-20">
          <div className="flex justify-between gap-2">
            <div>
              <h1 className="text-[#0000FF] text-4xl lg:text-8xl sm:text-4xl md:text-6xl uppercase font-instrument italic font-medium">
                software
              </h1>
              <h1 className="text-[#0000FF] text-4xl lg:text-8xl sm:text-4xl md:text-6xl uppercase font-instrument italic font-medium">
                developer
              </h1>
            </div>

            <div>
              <img class="circle" src={openToWork} />
            </div>
          </div>

          <div className="flex justify-between items-end">
          <div className="lg:flex gap-7">
            <ul className="text-[16px] lg:text-2xl text-[#0000ff] hover:px-[5px] hover:bg-[#0000ff] hover:rounded-[20px] hover:text-white"><a className="cursor-pointer font-satoshi" href="App.jsx">About</a></ul>
            <ul className="text-[16px] lg:text-2xl text-[#0000ff] hover:px-[5px] hover:bg-[#0000ff] hover:rounded-[20px] hover:text-white"><a className="cursor-pointer font-satoshi" href="">Projects</a></ul>
            <ul className="text-[16px] lg:text-2xl text-[#0000ff] hover:px-[5px] hover:bg-[#0000ff] hover:rounded-[20px] hover:text-white"><a className="cursor-pointer font-satoshi" href="">Contact</a></ul>
          </div>

          <div>
            <h1 className="text-[#0000FF] text-4xl lg:text-8xl uppercase font-medium font-instrument italic">Angelo</h1>
            <h1 className="text-[#0000FF] text-4xl lg:text-8xl uppercase font-medium font-instrument italic">Mendes</h1>
          </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
