import React, { useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";

const height = { height: "100vh" };
const center = { lat: 51.5, lng: 0.12 };
const API_KEY = "bb34431f79664a54a470e02b0baef163";

const GeocoderMap: React.FC = () => {
  const [isLoading, SetIsLoading] = useState(true);

  const map = useMap();
  let marker: L.Marker | null = null;

  const getCountryData = async (country: string) => {
    try {
      const response = await fetch(
        `https://disease.sh/v3/covid-19/countries/${country}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const res = await response.json();
      console.log(res);
      return {
        active: res.active,
        cases: res.cases,
        deaths: res.deaths,
        flag: res.countryInfo.flag,
      };

      // Your other code here
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };

  const handleMapClick = async (e: L.LeafletMouseEvent) => {
    SetIsLoading(true);

    if (marker && isLoading) {
      const popup = L.popup(); // Create a Popup instance
      popup.setContent(() => {
        return ` <div>Loading...</div>
        `;
      });
      marker.setLatLng(e.latlng).bindPopup(popup).openPopup();
    }

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
      const country = result.formatted.split(",");
      console.log(country);
      const data = getCountryData(country[country.length - 1]);
      const resData = await data;

      if (resData) SetIsLoading(false);

      const popup = L.popup();

      popup.setContent(() => {
        const content = resData
          ? `
          <div className="info-container">
          <img src=${resData?.flag} alt="Marker" className="z-30" />
            <div className="info-name">${country}</div>
            <div className="info-confirmed">Cases: ${resData?.cases}</div>
            <div className="info-recovered">Recovered: ${resData?.active}</div>
            <div className="info-deaths">Deaths: ${resData?.deaths}</div>
          </div>
        `
          : `
        <div className="loading-indicator">Loading...</div>
          `;
        return content;
      });

      if (marker) {
        marker.setLatLng(e.latlng).bindPopup(popup).openPopup();
      } else {
        marker = L.marker(e.latlng).bindPopup(popup).addTo(map).openPopup();
      }
    } catch (error) {
      SetIsLoading(false);
      if (marker) {
        const popup = L.popup();
        popup.setContent(() => {
          return ` <div>Error...</div>
          `;
        });
        marker.setLatLng(e.latlng).bindPopup(popup).openPopup();
      }
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

// geocoding API key is bb34431f79664a54a470e02b0baef163
