import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const branches = [
  { name: "Levent", position: [41.0775, 29.0138], address: "Levent, Büyükdere Cd. No:1, Istanbul" },
  { name: "Kadıköy", position: [40.9903, 29.0205], address: "Kadıköy, Bağdat Cd. No:25, Istanbul" },
  { name: "Eskişehir", position: [39.7667, 30.5256], address: "Eskişehir, İsmet İnönü Cd. No:7" },
  { name: "Kahramanmaraş", position: [37.5753, 36.9228], address: "K.Maraş, Trabzon Cd. No:10" },
];

function Map() {
  return (
    <div className="w-full h-screen">
      <MapContainer center={[41.0151, 28.9795]} zoom={11} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {branches.map(branch => (
          <Marker key={branch.id} position={branch.coords}>
            <Popup>{branch.name} Şubesi</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
