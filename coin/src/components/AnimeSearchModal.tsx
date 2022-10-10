import Link from "next/link";
import React from "react";
import { SearchAnime } from "../types/HomePage";

const AnimeSearchModal = ({
  searchAnimeModal,
  setSearchAnimeModal,
  searchAnime,
  searchAnimeData,
  searchAnimeText,
}: {
  searchAnimeModal: boolean;
  setSearchAnimeModal: (arg0: boolean) => void;
  searchAnime: (arg0: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  searchAnimeData: SearchAnime[];
  searchAnimeText: string;
}) => {
  return (
    <>
      {searchAnimeModal && (
        <div
          className="fixed inset-0 z-50  "
          aria-labelledby="search-modal"
          role="model"
          aria-modal="true">
          <div className="flex h-screen items-center justify-center px-4 pt-4 pb-20 text-center ">
            <div
              className="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"></div>

            <div className="inline-block relative transform  rounded-lg   text-left  shadow-xl transition-all">
              <div className="max-w-full relative w-[372px] px-2 md:w-[618px] h-full">
                <button
                  className="absolute right-3 z-10 -top-5 "
                  type="button"
                  onClick={() => setSearchAnimeModal(false)}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <div className="relative">
                  <div className="relative w-full h-full">
                    <input
                      className="bg-gray-100 rounded-full focus:outline-none  w-full py-2 px-4 h-14"
                      placeholder="Search..."
                      onChange={(e) => searchAnime(e)}
                    />
                  </div>
                  <div>
                    {searchAnimeData?.length ? (
                      <div className="bg-gray-100 rounded-2xl w-full mt-5">
                        {searchAnimeData.map((anime: SearchAnime) => {
                          return (
                            <Link
                              href={`/anime/${anime.mal_id}`}
                              key={anime.mal_id}>
                              <div className="flex items-center justify-between cursor-pointer hover:bg-slate-200 hover:rounded-2xl">
                                <div className="py-3 px-3 flex items-center cursor-pointer">
                                  <img
                                    width="50"
                                    height="50"
                                    src={anime.images.webp.small_image_url}
                                    className="rounded-xl"
                                  />
                                  <div className="px-2 whitespace-wrap">
                                    <h1>{anime.title}</h1>
                                    <div className="text-gray-400 text-sm flex justify-center gap-1">
                                      {anime.type} <span>&#x2022;</span>
                                      {anime.episodes} Episode{" "}
                                      <span>&#x2022;</span>
                                      {anime.status}
                                    </div>
                                  </div>
                                </div>
                                <span className="px-8 text-gray-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      searchAnimeText !== "" && (
                        <div className="bg-gray-100 rounded-2xl h-16 flex justify-center items-center w-full mt-5">
                          <p>
                            Oops it seems there is nothing for{" "}
                            {`${searchAnimeText}`}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeSearchModal;
