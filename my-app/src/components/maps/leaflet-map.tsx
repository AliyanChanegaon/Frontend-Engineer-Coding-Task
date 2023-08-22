import { useState, useMemo } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { useQuery } from "react-query";

const height = { height: "100%" };
const center = { lat: 51.5, lng: 0.12 };
const API_KEY = "41df455a63d04b22baab471bfd932421";

interface LatLng {
  lat: number;
  lng: number;
}

const GeocoderMap = ({ data }: { data: any }) => {
  const [mapCountry, setMapCountry] = useState<string>();
  const map = useMap();
  let marker: L.Marker | null = null;
  const [lat, setLat] = useState<LatLng>({ lat: 20, lng: 66 });

  const getCountryName = async () => {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat.lat}+${lat.lng}&key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setMapCountry(data?.results[0]?.components.country);
    return data;
  };

  useQuery(["countryDetails", lat], getCountryName);

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

    setLat(e.latlng);
  };

  map.on("click", handleMapClick);

  return null;
};

const LeafletMap = ({ data }: { data: any }) => {
  return (
    <MapContainer style={height} center={center} zoom={4} maxZoom={8}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <GeocoderMap data={data} />
    </MapContainer>
  );
};

export default LeafletMap;

//Old expired key geocoding API key is bb34431f79664a54a470e02b0baef163
// New key 41df455a63d04b22baab471bfd932421
