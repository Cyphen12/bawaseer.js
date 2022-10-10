import { GetServerSideProps } from "next";
import { getAllAnimeRecommendations } from "../lib/anime";
import Home from "../views/HomePage";

export default Home;
// Getting the data from the API and passing it as a prop to the component using ServerSideProps.
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getAllAnimeRecommendations();
  // Slicing the data to only 12 items for pagination purposes
  const requiredData = data?.slice(0, 12);
  let recommendations: object[] = [];
  //Sending only the necessary data as other data will never be used. That is entry data will be used and other will be stale data.
  requiredData?.forEach((anime: { entry: {} }) =>
    recommendations.push(anime.entry)
  );
  return {
    props: {
      recommendations,
    },
  };
};
