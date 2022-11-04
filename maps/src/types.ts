export interface IMap {
  location: {
    latitude: number;
    longitude: number;
  };
  getMarkerContent(): string;
}
