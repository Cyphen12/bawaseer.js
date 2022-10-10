import React from "react";
import { Table } from "../components/SingleAnime/Table";
import { Score } from "../components/SingleAnime/Score";
import { SingleAnimeProps } from "../types/SingleAnime";
import BackToMain from "../components/SingleAnime/BackToMain";
import Loading from "../components/Loading";
import ApprovedSymbol from "../components/ApprovedSymbol/ApprovedSymbol";

const SingleAnimePage = ({
  animeData,
  TableData,
  ScoreData,
}: SingleAnimeProps) => {
  if (animeData) {
    return (
      <div className="container mx-auto px-2 flex justify-center items-center flex-col min-h-screen w-full ">
        <BackToMain />
        <div className="flex flex-wrap items-center md:items-start max-w-5xl w-full">
          <div>
            <img
              width="270px"
              height="330px"
              src={animeData.images.webp.large_image_url}
              alt={`${animeData.title} image`}
              className="rounded-xl object-cover object-center"
            />
          </div>
          <div className="w-[calc(64rem-290px)] md:pl-6 md:ml-4">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              {animeData.title} {animeData.approved && <ApprovedSymbol />}
            </h1>

            <div className="flex flex-col md:mt-20 w-full">
              {TableData.map((data, index) => {
                return (
                  <Table
                    key={index}
                    title={data.title}
                    animeData={data.animeData}
                  />
                );
              })}
            </div>
            <div className="flex justify-between ">
              {ScoreData.map((data, index) => {
                return (
                  <Score key={index} title={data.title} data={data.data} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="max-w-5xl mt-8">
          <h1 className="text-3xl font-semibold">Description</h1>
          <p className=" pt-7">{animeData.synopsis}</p>
        </div>
      </div>
    );
  } else return <Loading />;
};

export default SingleAnimePage;
