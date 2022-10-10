import { GetServerSideProps } from "next";
import { getAllAnimeRecommendations } from "../lib/anime";
import Home from "../views/HomePage";

export default Home;
// Getting the data from the API and passing it as a prop to the component using ServerSideProps.
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Getting teh page number from the context as to determine which elements should be returned from the API request.
  const pageNumber: string = context.query.page as string;
  const { data } = await getAllAnimeRecommendations();
  let requiredData;
    // Slicing the data to only 12 items for that particular page using the pageNumber parameter for pagination purposes.
  if (pageNumber !== "0") {
    requiredData = data?.slice(
      (parseInt(pageNumber) - 1) * 12,
      (parseInt(pageNumber) - 1) * 12 + 12
    );
  } else {
    requiredData = data?.slice(0, 12);
  }
  //Sending only the necessary data as other data will never be used. That is entry data will be used and other will be stale data.
  let recommendations: object[] = [];
  requiredData?.forEach((anime: { entry: {} }) =>
    recommendations.push(anime.entry)
  );
  return {
    props: {
      recommendations,
    },
  };
};
