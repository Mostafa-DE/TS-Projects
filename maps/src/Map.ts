import { IMap } from "./types";

export class Map {
  private googlemap: google.maps.Map;

  constructor(mapDiv: HTMLElement) {
    this.googlemap = new google.maps.Map(mapDiv, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(obj: IMap): void {
    const marker = new google.maps.Marker({
      map: this.googlemap,
      position: {
        lat: obj.location.latitude,
        lng: obj.location.longitude,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: obj.getMarkerContent(),
      });
      infoWindow.open(this.googlemap, marker);
    });
  }
}
