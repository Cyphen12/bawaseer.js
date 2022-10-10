import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 py-10 px-2">
      <div className="container mx-auto">
        <div className="flex justify-evenly items-center py-5 md:px-20 flex-wap">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold">Anish Prashun</h1>
            <p className="max-w-xs">
              I found coinable on AngelList, while I was searching for a remote
              job. The Assignment is good and I liked the way you guys have
              curated it.
            </p>
          </div>
          <a href="#home">
            <button className="mx-4 bg-gray-200 p-2 rounded-lg ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-90">
                <path
                  d="M6.18182 11.4205L5.01136 10.2614L8.51705 6.75568H0V5.0625H8.51705L5.01136 1.5625L6.18182 0.397727L11.6932 5.90909L6.18182 11.4205Z"
                  fill="#666666"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
