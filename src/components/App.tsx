import { useState, useEffect } from 'react';
import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import geolocation from '../apis/geolocation';

import Header from './Header';
import ResultPanel from './ResultPanel';
import MapMarker from './MapMarker';

export interface IPData {
  ip: string;
  isp: string;
  location: {
    country: string;
    region: string;
    timezone: string;
  };
}

function App() {
  const [data, setData] = useState<IPData | null>(null);
  const [location, setLocation] = useState<LatLngExpression>([
    -16.7435512, -51.52768,
  ]);

  const fetchIP = async function (ip: string) {
    const response = await geolocation.get('/country,city', {
      params: { ipAddress: ip },
    });

    setData(response.data);

    const newLocation = [
      response.data.location.lat,
      response.data.location.lng,
    ] as LatLngExpression;

    setLocation(newLocation);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-3">
      <Header onSubmitForm={fetchIP} />

      <main className="row-span-2 relative">
        <div className="absolute z-10 w-full px-4 -translate-y-36 sm:-translate-y-1/2 transition-all">
          <ResultPanel info={data} />
        </div>
        <div className="w-full h-screen sm:h-full">
          <MapContainer
            zoom={14}
            center={location}
            style={{ height: '100%', width: '100%', zIndex: 2 }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${
                import.meta.env.VITE_MAPBOX_TOKEN
              }`}
            />
            <MapMarker position={location} />
          </MapContainer>
        </div>
      </main>
    </div>
  );
}

export default App;
