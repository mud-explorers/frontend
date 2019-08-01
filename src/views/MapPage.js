import React from "react";
import DescriptionContainer from '../components/containers/DescriptionContainer'
import Footer from '../components/containers/Footer'
import MapContainer from '../components/mapComponents/MapContainer'

export default function MapPage() {
  return (
    <div className="map_page_container">
      <div className="mid_section_container">
        <MapContainer />
        <DescriptionContainer />
      </div>

      <Footer />
    </div>
  );
}
