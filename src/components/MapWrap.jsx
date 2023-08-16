import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapApp from "./MapApp";

function MapWrap() {
    const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  const mapsApiKey = {
    mapsKey: import.meta.env.VITE_MAPS_API_KEY,
  }

  return (
    <Wrapper apiKey="`${mapsApiKey.mapsKey}`" render={render}>
      <MapApp center={center} zoom={zoom} />
    </Wrapper>
  )
}

export default MapWrap