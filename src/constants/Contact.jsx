import React from "react";

function Contact() {
  return (
    <>
      <footer>
        <div className="flex w-[100%] min-h-[100vh] p-6 sticky">
          <div className="bg-white rounded-2xl w-[100%] p-20">
            <div className="flex flex-col justify-center items-center gap-2.5">
              <h1 className="text-[#0000ff] text-9xl font-medium">Let's talk!</h1>
              <div className="px-7 py-2.5 bg-[#0000ff] rounded-[30px]">
                <button className="text-white text-3xl">Get in touch</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
