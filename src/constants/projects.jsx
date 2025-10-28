import React from "react";
import Peace from "../assets/img/peace_project.jpg";
import Poliverso from "../assets/img/poliverso.jpg";
import Tabnews from "../assets/img/tabnews.jpg";

function Projects() {
  return (
    <section className="flex w-full min-h-screen p-3 md:p-6 sticky">
      <div className="bg-white rounded-2xl flex flex-col w-full p-6 md:p-12 lg:p-20">
        <div className="justify-center">
          <h1 className="text-[#0000FF] text-end text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium font-instrument italic">
            Projects
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[45px]">
          {/* peace */}
          <div className="w-full lg:w-91 h-auto lg:h-[480px] mt-8 bg-white rounded-[20px] shadow-[12px_12px_12px_0px_rgba(0,0,0,0.25)] p-5">
            <img
              className="w-full lg:w-80 h-48 md:h-56 rounded-[5px] shadow-[4px_4px_10px_1px_rgba(0,0,0,0.25)] object-cover"
              src={Peace}
              alt="Peace Project"
            />
            <div className="mt-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0000ff] font-instrument italic">
                peace
              </h2>
              <div className="my-2 rounded-[5px] w-min px-2.5 bg-[#0000ff]">
                <p className="font-satoshi text-white text-sm">#Mobile</p>
              </div>
              <p className="font-satoshi text-sm md:text-base">
                Peace é um aplicativo para iOS que desenvolvi com o objetivo de
                ajudar as pessoas a se organizarem melhor, gerenciarem suas
                tarefas e acompanharem sua rotina de forma prática.
              </p>
            </div>
          </div>

          {/* poliverso */}
          <div className="w-full lg:w-91 h-auto lg:h-[480px] mt-8 bg-white rounded-[20px] shadow-[12px_12px_12px_0px_rgba(0,0,0,0.25)] p-5">
            <img
              className="w-full lg:w-80 h-48 md:h-56 rounded-[5px] shadow-[4px_4px_10px_1px_rgba(0,0,0,0.25)] object-cover"
              src={Poliverso}
              alt="Poliverso Project"
            />
            <div className="mt-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0000ff] font-instrument italic">
                poliverso
              </h2>
              <div className="my-2 rounded-[5px] w-min px-2.5 bg-[#0000ff]">
                <p className="font-satoshi text-white text-sm">#Web</p>
              </div>
              <p className="font-satoshi text-sm md:text-base">
                A Poliverso é uma agencia do audiovisual que que conecta
                talentos para produzir conteúdos de alta qualidade.
              </p>
            </div>
          </div>

          {/* outro projeto */}
          <div className="w-full lg:w-91 h-auto lg:h-[480px] mt-8 bg-white rounded-[20px] shadow-[12px_12px_12px_0px_rgba(0,0,0,0.25)] p-5">
            <img
              className="w-full lg:w-80 h-48 md:h-56 rounded-[5px] shadow-[4px_4px_10px_1px_rgba(0,0,0,0.25)] object-cover"
              src={Tabnews}
              alt="Tabnews Clone Project"
            />
            <div className="mt-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0000ff] font-instrument italic">
                clone-tabnews
              </h2>
              <div className="my-2 rounded-[5px] w-min px-2.5 bg-[#0000ff]">
                <p className="font-satoshi text-white text-sm">#FullStack</p>
              </div>
              <p className="font-satoshi text-sm md:text-base">
                O clone do tabnews é um projeto que foi desenvolvido no
                curso.dev. Nele aprendi a criar testes automatizados,
                autenticação de usuários e deploy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
