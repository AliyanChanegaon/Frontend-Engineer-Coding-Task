import React, { useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";

const height = { height: "100vh" };
const center = { lat: 51.5, lng: 0.12 };
const API_KEY = "bb34431f79664a54a470e02b0baef163";

const GeocoderMap: React.FC = () => {
  const map = useMap();
  let marker: L.Marker | null = null;

  const handleMapClick = async (e: L.LeafletMouseEvent) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${e.latlng.lat}+${e.latlng.lng}&key=${API_KEY}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      const res = await response.json();
      let result = res?.results[0];

      if (result) {
        if (marker) {
          marker
            .setLatLng(e.latlng)
            .setPopupContent(result.formatted)
            .openPopup();
        } else {
          marker = L.marker(e.latlng)
            .bindPopup(result.formatted)
            .addTo(map)
            .openPopup();
        }
      }
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };

  map.on("click", handleMapClick);

  return null;
};

const MapExample: React.FC = () => {
  return (
    <MapContainer style={height} center={center} zoom={4}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeocoderMap />
    </MapContainer>
  );
};

export default MapExample;

//  API key Your geocoding API key is bb34431f79664a54a470e02b0baef163
