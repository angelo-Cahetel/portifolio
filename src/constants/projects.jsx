import React from "react";
import Peace from "../assets/img/peace_project.jpg";
import Poliverso from "../assets/img/poliverso.jpg";

function Projects() {
  return (
    <section className="flex w-[100%] min-h-[100vh] p-6 sticky">
      <div className="bg-white rounded-2xl flex flex-col w-[100%] p-20">
        <div className="justify-center">
          <h1 className="text-[#0000FF] text-end text-8xl font-medium font-instrument italic">
            Projects
          </h1>
        </div>
        <div className="flex gap-[45px]">
          {/* peace */}
          <div className="w-91 h-[480px] mt-8 bg-white rounded-[20px] shadow-[15px_15px_15px_0px_rgba(0,0,0,0.25)] outline-[10px] outline-neutral-800">
            <img
              className="w-80 h-56 m-5 rounded-[5px] shadow-[4px_4px_10px_1px_rgba(0,0,0,0.25)]"
              src={Peace}
              alt=""
            />
            <div>
              <h2 className="pl-5 text-4xl text-[#0000ff] font-instrument italic">
                peace
              </h2>
              <div className="mx-4 my-1 rounded-[5px] w-min px-2.5 bg-[#0000ff]">
                <p className="font-satoshi text-white">#Mobile</p>
              </div>
            </div>
          </div>

          {/* poliverso */}
          <div className="w-91 h-[480px] mt-8 bg-white rounded-[20px] shadow-[15px_15px_15px_0px_rgba(0,0,0,0.25)] outline-[10px] outline-neutral-800">
            <img
              className="w-80 h-56 m-5 rounded-[5px] shadow-[4px_4px_10px_1px_rgba(0,0,0,0.25)]"
              src={Poliverso}
              alt=""
            />
            <div>
              <h2 className="pl-5 text-4xl text-[#0000ff] font-instrument italic">
                poliverso
              </h2>
              <div className="mx-4 my-1 rounded-[5px] w-min px-2.5 bg-[#0000ff]">
                <p className="font-satoshi text-white">#Web</p>
              </div>
            </div>
          </div>

          {/* outro projeto */}
          <div className="w-91 h-[480px] mt-8 bg-white rounded-[20px] shadow-[15px_15px_15px_0px_rgba(0,0,0,0.25)] outline-[10px] outline-neutral-800">
            <img
              className="w-80 h-56 m-5 rounded-[5px] shadow-[4px_4px_10px_1px_rgba(0,0,0,0.25)]"
              src={Poliverso}
              alt=""
            />
            <div>
              <h2 className="pl-5 text-4xl text-[#0000ff] font-instrument italic">
                estante.me
              </h2>
              <div className="mx-4 my-1 rounded-[5px] w-min px-2.5 bg-[#0000ff]">
                <p className="font-satoshi text-white">#Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
