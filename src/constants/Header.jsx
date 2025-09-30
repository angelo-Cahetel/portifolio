import React from "react";
import openToWork from "../assets/img/openToWork.svg";
import "../index.css";


function Header() {
  return (
    <header className="h-[200vh] mb-[-100vh] relative">
      <div className="flex w-[100%] min-h-[100vh] p-6 sticky">
        <div className="bg-white rounded-2xl flex flex-col justify-between w-[100%] p-20">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[#0000FF] text-8xl uppercase font-instrument italic font-medium">
                software
              </h1>
              <h1 className="text-[#0000FF] text-8xl uppercase font-instrument italic font-medium">
                developer
              </h1>
            </div>

            <div>
              <img class="circle" src={openToWork} />
            </div>
          </div>

          <div className="flex justify-between items-end">
          <div className="flex gap-7">
            <ul className="text-[18px] text-[#0000ff] hover:px-[5px] hover:bg-[#0000ff] hover:rounded-[20px] hover:text-white"><a className="cursor-pointer font-satoshi" href="App.jsx">About</a></ul>
            <ul className="text-[18px] text-[#0000ff] hover:px-[5px] hover:bg-[#0000ff] hover:rounded-[20px] hover:text-white"><a className="cursor-pointer font-satoshi" href="">Projects</a></ul>
            <ul className="text-[18px] text-[#0000ff] hover:px-[5px] hover:bg-[#0000ff] hover:rounded-[20px] hover:text-white"><a className="cursor-pointer font-satoshi" href="">Contact</a></ul>
          </div>

          <div>
            <h1 className="text-[#0000FF] text-8xl uppercase font-medium font-instrument italic">Angelo</h1>
            <h1 className="text-[#0000FF] text-8xl uppercase font-medium font-instrument italic">Mendes</h1>
          </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
