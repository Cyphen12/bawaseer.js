import { GetServerSideProps } from "next";
import { getSingleAnimeData } from "../../lib/anime";
import SingleAnimePage from "../../views/SingleAnimePage";

export default SingleAnimePage;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { anime } = context.query;
  const { data: animeData } = await getSingleAnimeData(anime as string);
  const TableData = [
    {
      title: "Type",
      animeData: animeData.type,
    },
    {
      title: "Source",
      animeData: animeData.source,
    },
    {
      title: "Episodes",
      animeData: animeData.episodes,
    },
    {
      title: "Status",
      animeData: animeData.status,
    },
  ];

  const ScoreData = [
    {
      title: "Score",
      data: animeData.score,
    },
    {
      title: "Rank",
      data: animeData.rank,
    },
    {
      title: "Popularity",
      data: animeData.popularity,
    },
  ];
  return {
    props: {
      animeData,
      TableData,
      ScoreData,
    },
  };
};
