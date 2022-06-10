import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import geolocation from '../apis/geolocation';

import Header from './Header';
import ResultPanel from './ResultPanel';

export type IPData = {
  ip: string;
  isp: string;
  location: {
    country: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  };
};

function App() {
  const [data, setData] = useState<IPData | null>(null);

  const fetchIP = async function (ip: string) {
    const response = await geolocation.get('/country,city', {
      params: { ipAddress: ip },
    });

    setData(response.data);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-3">
      <Header onSubmitForm={fetchIP} />

      <main className="row-span-2 relative">
        <div className="absolute z-10 w-full px-4 -translate-y-36 sm:-translate-y-1/2 transition-all">
          <ResultPanel />
        </div>
        <div className="w-full h-screen sm:h-full">
          <MapContainer
            zoom={17}
            center={[-16.7435512, -51.52768]}
            style={{ height: '100%', width: '100%', zIndex: 2 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${
                import.meta.env.VITE_MAPBOX_TOKEN
              }`}
            />
          </MapContainer>
        </div>
      </main>
    </div>
  );
}

export default App;
