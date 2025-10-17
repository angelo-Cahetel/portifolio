import React from "react";
import Peace from "../assets/img/peace_project.jpg";
import Poliverso from "../assets/img/poliverso.jpg";
import Tabnews from "../assets/img/tabnews.jpg";

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
          <div className="w-91 h-[480px] mt-8 bg-white rounded-[20px] shadow-[12px_12px_12px_0px_rgba(0,0,0,0.25)]">
            <img
              className="w-80 h-56 mx-5 mt-5 rounded-[5px] shadow-[4px_4px_10px_1px_rgba(0,0,0,0.25)]"
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
              <p className="px-5 font-satoshi">
                  Peace é um aplicativo para iOS que desenvolvi com o objetivo
                  de ajudar as pessoas a se organizarem melhor, gerenciarem suas
                  tarefas e acompanharem sua rotina de forma prática.
              </p>
            </div>
          </div>

          {/* poliverso */}
          <div className="w-91 h-[480px] mt-8 bg-white rounded-[20px] shadow-[12px_12px_12px_0px_rgba(0,0,0,0.25)]">
            <img
              className="w-80 h-56 mx-5 mt-5 rounded-[5px] shadow-[4px_4px_10px_1px_rgba(0,0,0,0.25)]"
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
              <p className="px-5 font-satoshi">
                A Poliverso é uma agencia do audiovisual que que conecta
                talentos para produzir conteúdos de alta qualidade.
              </p>
            </div>
          </div>

          {/* outro projeto */}
          <div className="w-91 h-[480px] mt-8 bg-white rounded-[20px] shadow-[12px_12px_12px_0px_rgba(0,0,0,0.25)]">
            <img
              className="w-80 h-56 mx-5 mt-5 rounded-[5px] shadow-[4px_4px_10px_1px_rgba(0,0,0,0.25)]"
              src={Tabnews}
              alt=""
            />
            <div>
              <h2 className="pl-5 text-4xl text-[#0000ff] font-instrument italic">
                clone-tabnews
              </h2>
              <div className="mx-4 my-1 rounded-[5px] w-min px-2.5 bg-[#0000ff]">
                <p className="font-satoshi text-white">#FullStack</p>
              </div>
              <p className="px-5 font-satoshi">
                O clone do tabnews é um projeto que foi desenvolvido no curso.dev. Nele aprendi a criar testes automatizados, autenticação de usuários e deploy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
