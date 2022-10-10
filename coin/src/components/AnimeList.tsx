import Link from "next/link";
import React from "react";
import { SingleRecommendation } from "../types/HomePage";

const AnimeList = ({
  recommendations,
  paramsPage,
  pageNumber,
}: {
  recommendations: SingleRecommendation[];
  paramsPage?: boolean;
  pageNumber?: number;
}) => {
  return (
    <div className=" flex justify-center items-center py-10 flex-col">
      <div className="grid lg:grid-cols-3 justify-center items-center gap-10 md:grid-cols-2  ">
        {recommendations.map((singleRecommendation: SingleRecommendation) => {
          return (
            <Link
              key={singleRecommendation.mal_id}
              href={`/anime/${singleRecommendation.mal_id}`}>
              <div className="relative max-w-full  h-[506px] w-[361px] md:w-[201px] md:h-[282px] cursor-pointer hover:scale-105 md:hover:scale-110 transition ease-in-out">
                <div className="relative">
                  <img
                    className="relative max-h-full max-w-full rounded-xl h-[506px] w-[361px] md:w-[201px] md:h-[282px]"
                    srcSet={` ${singleRecommendation.images.webp.large_image_url} 1x, ${singleRecommendation.images.webp.image_url} 2x`}
                  />
                  <div className="absolute bottom-0 w-full h-1/2 rounded-xl   bg-gradient-to-t from-[rgba(0,0,0,0.69)]  to-transparent">
                    <div className=" absolute bottom-0 z-20 flex flex-col space-y-1  w-full p-4">
                      <p className="font-bold text-lg relative text-white">
                        {singleRecommendation.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {paramsPage && pageNumber ? (
        <div className="py-10 ">
          <Link href={pageNumber !== 2 ? `/${pageNumber - 1}` : `/`}>
            <button className="mx-4 bg-gray-200 p-2 rounded-lg ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180">
                <path
                  d="M6.18182 11.4205L5.01136 10.2614L8.51705 6.75568H0V5.0625H8.51705L5.01136 1.5625L6.18182 0.397727L11.6932 5.90909L6.18182 11.4205Z"
                  fill="#666666"
                />
              </svg>
            </button>
          </Link>
          {pageNumber.toString()}
          <Link href={`/${pageNumber + 1}`}>
            <button className="mx-4 bg-gray-200 p-2 rounded-lg ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.18182 11.4205L5.01136 10.2614L8.51705 6.75568H0V5.0625H8.51705L5.01136 1.5625L6.18182 0.397727L11.6932 5.90909L6.18182 11.4205Z"
                  fill="#666666"
                />
              </svg>
            </button>
          </Link>
        </div>
      ) : (
        <div className="py-10 ">
          {1}
          <Link href="/2">
            <button className="mx-4 bg-gray-200 p-2 rounded-lg ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.18182 11.4205L5.01136 10.2614L8.51705 6.75568H0V5.0625H8.51705L5.01136 1.5625L6.18182 0.397727L11.6932 5.90909L6.18182 11.4205Z"
                  fill="#666666"
                />
              </svg>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AnimeList;
