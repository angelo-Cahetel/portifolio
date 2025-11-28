import React from "react";
import "../index.css";

function Hero() {
  return (
    <>
      <div id="about" className="flex w-full min-h-screen p-6 sticky">
        <div
          id="smooth-content"
          className="bg-white rounded-2xl flex flex-col w-full p-20"
        >
          <div className="justify-end">
            <div>
              <h1 className="text-[#0000FF] text-4xl lg:text-8xl font-instrument italic font-medium">
                Hi folks!
              </h1>
            </div>

            <div className="flex justify-end">
              <h2 className="text-[#0000FF] text-2xl lg:text-5xl font-instrument italic font-medium">
                About me
              </h2>
            </div>

            <div className="flex justify-end">
              <p className="w-full lg:w-[549px] text-end pt-2.5 font-satoshi">
                I am a skilled software developer, my specialty lies in
                architecting and developing robust solutions. With strong
                expertise across both the Fullstack universe and the dynamic iOS
                ecosystem. With rapid learning capabilities and a highly
                collaborative approach, I delve deep into client needs to
                deliver products that not only function flawlessly but also
                delight users and generate tangible value. If you're seeking
                performance, scalability, and an impeccable user experience,
                let's build the future of technology together!
              </p>
            </div>

            <div className="flex justify-between gap-28">
              <div>
                <h2 className="text-[#0000FF] text-2xl lg:text-5xl font-instrument italic font-medium">
                  Skills
                </h2>
                <div className="pt-2.5">
                  <p className="font-satoshi">
                    Frontend: React.js, JavaScript, TailwindCSS, HTML, CSS
                  </p>
                  <p className="font-satoshi">Backend: Node.js, Python, Java</p>
                  <p className="font-satoshi">
                    Mobile: Swift, SwiftUI, ViewCode, UIKit
                  </p>
                  <p className="font-satoshi">
                    Banco de Dados: SQL, NoSQL (MongoDB)
                  </p>
                  <p className="font-satoshi">
                    Outros: Git, GitHub, pacote office
                  </p>
                </div>
              </div>
              {/* <div className="w-[200px] h-[180px] relative top-20 right-40 rotate-[227.58deg] bg-[#0000ff] blur-[100px]" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
