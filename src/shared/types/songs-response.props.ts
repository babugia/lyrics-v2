declare type Song = {
  artist: {
    name: string;
  };
  title: string;
};

declare type SongsResponse = {
  data: ReadonlyArray<Song>;
  next?: string;
  prev?: string;
  total: number;
};

export declare type SongsResponseProps = SongsResponse;
