import React from "react";
import { HomeProps } from "../types/HomePage";
import { useState } from "react";
import AnimeList from "../components/AnimeList";
import AnimeSearchModal from "../components/AnimeSearchModal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { getAnimeBySearch } from "../lib/anime";
import { useRouter } from "next/router";

const Home = ({ recommendations }: HomeProps) => {
  const router = useRouter();
  const [searchAnimeText, setSearchAnimeText] = useState("");
  const [searchAnimeData, setSearchAnimeData] = useState([]);
  const [searchAnimeModal, setSearchAnimeModal] = useState(false);

  //This function is used to get the data from th API using the letters passed in the search parameters.

  const searchAnime = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchAnimeText(e.target.value);
    const data = await getAnimeBySearch(searchAnimeText);
    setSearchAnimeData(data);
  };

  //This is implemented to check whether this homepage with no query of page number or it is for the [page].tsx file with page number.

  let pageNumber,
    paramsPage = false;
  if (router.query.page !== undefined) {
    pageNumber = parseInt(router.query.page as string);
    paramsPage = true;
  }
  if (recommendations) {
    return (
      <div id="home" className="text-black">
        <Header setSearchAnimeModal={setSearchAnimeModal} />
        <AnimeSearchModal
          searchAnimeModal={searchAnimeModal}
          setSearchAnimeModal={setSearchAnimeModal}
          searchAnime={searchAnime}
          searchAnimeData={searchAnimeData}
          searchAnimeText={searchAnimeText}
        />
        <AnimeList
          recommendations={recommendations}
          paramsPage={paramsPage}
          pageNumber={pageNumber}
        />
        <Footer />
      </div>
    );
  }
  return <Loading />;
};

export default Home;
