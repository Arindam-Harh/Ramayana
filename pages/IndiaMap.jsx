import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import "./IndiaMap.css";
import { timelineEvents } from "./Timeline.jsx";

const INDIA_TOPO_JSON =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

export const IndiaMap = () => {
  const [selected, setSelected] = useState(null);

  const pointsWithCoords = timelineEvents.filter((e) => e.coordinates);

  return (
    <section className="india-map-section">
      <h2 className="map-title">Journey Across the Land</h2>

      <div className="map-wrapper">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center: [82, 15], scale: 1000 }}
          width={500}
          height={550}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="map-region"
                />
              ))
            }
          </Geographies>

          {pointsWithCoords.map((event) => (
            <Marker
              key={event.title}
              coordinates={event.coordinates}
              onClick={() => setSelected(event)}
            >
              <circle r={6} className="map-marker" />
              <circle r={6} className="map-marker-pulse" />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {selected && (
        <div className="map-popup-backdrop" onClick={() => setSelected(null)}>
          <div className="map-popup" onClick={(e) => e.stopPropagation()}>
            <button className="map-popup-close" onClick={() => setSelected(null)}>
              ×
            </button>
            <h3>{selected.title}</h3>
            <p className="map-popup-location">{selected.location}</p>
            <p className="map-popup-summary">{selected.summary}</p>
            <p className="map-popup-characters">{selected.characters}</p>
          </div>
        </div>
      )}
    </section>
  );
};