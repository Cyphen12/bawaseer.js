import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { getDate } from "../lib/date";

const Header = ({
  setSearchAnimeModal,
}: {
  setSearchAnimeModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <header className="border-b-2 sticky top-0 z-20 bg-white">
      <div className="flex justify-center items-center py-5 gap-2 md:gap-10 px-2">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">Anime</h1>
        </Link>
        <div
          onClick={() => setSearchAnimeModal(true)}
          className="bg-gray-100 rounded-2xl flex items-center  px-2 py-1 w-[202px] md:w-[320px] ">
          <>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                fill="#BABABA"
              />
            </svg>
          </>
          <input
            readOnly
            className="bg-gray-100 cursor-pointer rounded-2xl read-only: focus:outline-none px-1 w-full  "
            placeholder="Search..."
          />
        </div>
        <div>
          <p className=" text-sm hidden md:block ">
            Today is the{" "}
            <span className="underline decoration-gray-400 decoration-1 underline-offset-4">
              {getDate("full")}
            </span>
          </p>
          <p className="md:hidden text-sm">{getDate()}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
