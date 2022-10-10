export interface SingleAnimeProps {
  animeData: {
    images: {
      webp: {
        large_image_url: string;
      };
    };
    title: string;
    type: string;
    episodes: number;
    status: string;
    status: string;
    score: number;
    rank: number;
    popularity: number;
    synopsis: string;
    source: string;
    approved: boolean;
  };
  TableData: [
    {
      title: string;
      animeData: string;
    }
  ];
  ScoreData: [
    {
      title: string;
      data: string;
    }
  ];
}
