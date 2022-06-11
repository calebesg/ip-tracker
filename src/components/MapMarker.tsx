import { LatLngExpression } from 'leaflet';
import { Marker, useMapEvents } from 'react-leaflet';

interface LocationMarkerProps {
  position: LatLngExpression;
}

function MapMarker({ position }: LocationMarkerProps) {
  const map = useMapEvents({
    click() {
      map.flyTo(position, map.getZoom(), { duration: 3 });
    },
  });

  map.flyTo(position, map.getZoom(), { duration: 3 });

  return <Marker position={position}></Marker>;
}

export default MapMarker;
