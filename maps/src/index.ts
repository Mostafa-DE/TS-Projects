import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const mapDiv = document.getElementById("map");
const user = new User();
const company = new Company();

if (mapDiv) {
  const map = new Map(mapDiv);
  map.addMarker(user);
  map.addMarker(company);
}
