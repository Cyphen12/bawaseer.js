export interface HomeProps {
  recommendations: [];
}

export interface SingleRecommendation {
  mal_id: number;
  images: {
    webp: {
      large_image_url: string;
      image_url: string;
    };
  };
  title: string;
}

export interface SearchAnime {
  mal_id: number;
  images: {
    webp: {
      small_image_url: string;
    };
  };
  title: string;
  status: string;
  episodes: number;
  type: string;
}
