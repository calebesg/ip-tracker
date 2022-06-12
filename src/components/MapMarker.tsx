import L, { Icon, LatLngExpression } from 'leaflet';
import { Marker, useMapEvents } from 'react-leaflet';
import iconUrl from '../assets/icon-location.svg';

interface LocationMarkerProps {
  position: LatLngExpression;
}

const IconLocation = new L.Icon({
  iconUrl: iconUrl,
});

function MapMarker({ position }: LocationMarkerProps) {
  const map = useMapEvents({
    click() {
      map.flyTo(position, map.getZoom(), { duration: 3 });
    },
  });

  map.flyTo(position, map.getZoom(), { duration: 3 });

  return <Marker position={position} icon={IconLocation}></Marker>;
}

export default MapMarker;
