import { useState } from "react";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex w-[100%] min-h-[100vh] p-6 sticky">
        <div className="bg-white rounded-2xl flex flex-col w-[100%] p-20">
          <div className="justify-end">
            <div>
              <h1 className="text-[#0000FF] text-8xl font-medium">Hi folks!</h1>
            </div>

            <div className="flex justify-end">
              <h2 className="text-[#0000FF] text-5xl">About me</h2>
            </div>

            <div className="flex justify-end">
              <p className="w-[549px] h-44 text-end pt-[10px]">
                Sou estudante de Análise e Desenvolvimento de Sistemas, com
                especialização em desenvolvimento Web e Mobile. Possuo
                experiência prática em projetos freelance, onde desenvolvi
                soluções personalizadas para diferentes clientes. Atualmente,
                estou me aprofundando em Swift com o objetivo de atuar como
                desenvolvedor iOS. Estou em busca de oportunidades para aplicar
                e expandir minhas habilidades técnicas, contribuindo de forma
                significativa para o crescimento da equipe e da empresa.
              </p>
            </div>

            <div className="flex justify-between gap-28">
              <div>
                <h2 className="text-[#0000FF] text-5xl">Skills</h2>
                <div className="pt-[10px]">
                  <p className="">
                    Frontend: React.js, JavaScript, TailwindCSS, HTML, CSS
                  </p>
                  <p className="">Backend: Node.js, Python, Java</p>
                  <p className="">Mobile: Swift, SwiftUI, ViewCode, UIKit</p>
                  <p className="">Banco de Dados: SQL, NoSQL (MongoDB)</p>
                  <p className="">Outros: Git, GitHub, pacote office</p>
                </div>
              </div>
              <div className="w-[200px] h-[180px] relative top-20 right-40 rotate-[227.58deg] bg-[#0000ff] blur-[100px]" />
            </div>
          </div>
        </div>
      </div>
      <CustomCursor />
    </>
  );
}

export default App;
