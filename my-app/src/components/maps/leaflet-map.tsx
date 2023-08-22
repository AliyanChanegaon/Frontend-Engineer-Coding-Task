import React, { useState, useMemo } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { useQuery } from "react-query";

const height = { height: "100%" };
const center = { lat: 51.5, lng: 0.12 };
const API_KEY = "bb34431f79664a54a470e02b0baef163";

interface LatLng {
  lat: number;
  lng: number;
}

const GeocoderMap = ({ data }: { data: any }) => {
  const [mapCountry, setMapCountry] = useState<string>("india");

  // const fetchCountryDetails = async (country: string) => {
  //   const response = await fetch(
  //     `https://api.opencagedata.com/geocode/v1/json?q=${country}&key=${API_KEY}`
  //   );
  //   const data = await response.json();
  //   return data;
  // };

  // const { data: countryDetails } = useQuery(
  //   ["countryDetails", mapCountry],
  //   () => fetchCountryDetails(mapCountry)
  // );

  const map = useMap();
  let marker: L.Marker | null = null;

  const [lat, setLat] = useState<LatLng>({ lat: 25, lng: 80 });

  useMemo(() => {
    const countryDetails = data?.find(
      (el: any) =>
        el?.country.toLowerCase().trim() === mapCountry?.toLowerCase().trim()
    );

    const popup = L.popup();

    popup.setContent(() => {
      const content = countryDetails
        ? `
          <div className="info-container-${countryDetails?.cases}">
          <img src=${countryDetails?.countryInfo?.flag} alt=${countryDetails?.countryInfo?.flag} className="z-30" />
            <div >${mapCountry}</div>
            <div >Cases: ${countryDetails?.cases}</div>
            <div >Recovered: ${countryDetails?.active}</div>
            <div >Deaths: ${countryDetails?.deaths}</div>
          </div>
        `
        : `
        <div className="default-container">Click on Map to see Details</div>
          `;
      return content;
    });

    if (marker) {
      marker.setLatLng(lat).bindPopup(popup).openPopup();
    } else {
      marker = L.marker(lat).bindPopup(popup).addTo(map).openPopup();
    }
  }, [mapCountry]);

  const handleMapClick = async (e: L.LeafletMouseEvent) => {
    if (marker) {
      map.removeLayer(marker);
    }

    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${e.latlng.lat}+${e.latlng.lng}&key=${API_KEY}`
      );

      const res = await response.json();
      let result = res?.results[0];

      const country = result.components.country;
      
      setMapCountry(country);
      setLat(e.latlng);
    } catch (error) {
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

const LeafletMap = ({ data }: { data: any }) => {
  return (
    <MapContainer style={height} center={center} zoom={4}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <GeocoderMap data={data} />
    </MapContainer>
  );
};

export default LeafletMap;

// geocoding API key is bb34431f79664a54a470e02b0baef163
