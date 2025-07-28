import React from "react";
import GitHub from "../assets/img/GitHub.svg";
import LinkedIn from "../assets/img/LinkedIn.svg";
import Instagram from "../assets/img/Instagram.svg";

function Contact() {
  return (
    <>
      <footer>
        <div className="flex w-[100%] min-h-[100vh] p-6 sticky">
          <div className="flex justify-center bg-white rounded-2xl w-[100%] p-20">
            <div className="flex flex-col justify-center">
              <div className="">
                <div className="flex flex-col justify-center items-center m-[200px] gap-2.5">
                  <h1 className="text-[#0000ff] text-9xl font-medium">
                    Let's talk!
                  </h1>
                  <button className="px-7 py-2.5 bg-[#0000ff] hover:text-[#0000ff] hover:bg-white hover:outline-2 hover:outline-[#0000ff] rounded-[20px] text-white text-3xl cursor-pointer">
                    Get in touch
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <a className="cursor-pointer" href="https://github.com/angelo-Cahetel" target="_blank">
                  <img className="hover:w-7 hover:h-7" src={GitHub} alt="" />
                </a>
                <a className="cursor-pointer" href="https://www.linkedin.com/in/angelocahetel/" target="_blank">
                  <img className="hover:w-7 hover:h-7" src={LinkedIn} alt="" />
                </a>
                <a className="cursor-pointer" href="https://www.instagram.com/angelo_m_souza/" target="_blank">
                  <img className="hover:w-7 hover:h-7" src={Instagram} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
