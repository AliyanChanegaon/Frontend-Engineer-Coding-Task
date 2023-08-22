import { useState, useMemo } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { useQuery } from "react-query";

interface LatLng {
  lat: number;
  lng: number;
}

const center = { lat: 51.5, lng: 0.12 };
const API_KEY = "41df455a63d04b22baab471bfd932421";

const GeocoderMap = ({ data }: { data: any }) => {
  const [mapCountry, setMapCountry] = useState<string>();
  const [lat, setLat] = useState<LatLng>({ lat: 20, lng: 66 });
  const map = useMap();
  let marker: L.Marker | null = null;

  const getCountryName = async () => {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat.lat}+${lat.lng}&key=${API_KEY}`
    );
    const data = await response.json();

    setMapCountry(data?.results[0]?.components.country);
    return data;
  };

  useQuery(["countryDetails", lat], getCountryName);

  const generateContent = (countryDetails: any) => {
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
  };

  useMemo(() => {
    const countryDetails = data?.find(
      (el: any) =>
        el?.country.toLowerCase().trim() === mapCountry?.toLowerCase().trim()
    );

    if (countryDetails) generateContent(countryDetails);
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
    <MapContainer
      style={{ height: "100%" }}
      center={center}
      zoom={4}
      maxZoom={8}
    >
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
