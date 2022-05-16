export type RideType = {
  id: number;
  origin_station_code: number;
  station_path: number[];
  destination_station_code: number;
  date: string;
  map_url: string;
  state: string;
  city: string;
};


export type User = {
  station_code: number;
  name: string;
  url: string;
}
export type FilterType = 'nearst' | 'upcoming' | 'past';