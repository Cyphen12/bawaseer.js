import { BASE_URL } from "../constants";

export const getAllAnimeRecommendations = async () => {
  const response = await fetch(`${BASE_URL}/1/recommendations`);
  const data = await response.json();
  return data;
};

export const getSingleAnimeData = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
};

export const getAnimeBySearch = async (letter: string) => {
  const response = await fetch(`${BASE_URL}?letter=${letter}`);
  const { data } = await response.json();
  return data.slice(0, 5);
};
