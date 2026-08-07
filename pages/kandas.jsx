import { useEffect, useMemo, useState } from "react";
import "./Kandas.css";

const kandaNames = [
  "Bala Kanda",
  "Ayodhya Kanda",
  "Aranya Kanda",
  "Kishkindha Kanda",
  "Sundara Kanda",
  "Yuddha Kanda",
  "Uttara Kanda",
];

export const Kandas = () => {
  const [shlokasData, setShlokasData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedKanda, setSelectedKanda] = useState("Sundara Kanda");
  const [selectedSarga, setSelectedSarga] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/Valmiki_Ramayan_Shlokas.json");
        const data = await res.json();
        setShlokasData(data);
      } catch (err) {
        console.error("Failed to load shlokas:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const sargaList = useMemo(() => {
    const sargas = shlokasData
      .filter((item) => item.kanda === selectedKanda)
      .map((item) => item.sarga);

    return [...new Set(sargas)].sort((a, b) => a - b);
  }, [shlokasData, selectedKanda]);

  const shlokas = useMemo(() => {
    return shlokasData.filter(
      (item) =>
        item.kanda === selectedKanda &&
        item.sarga === selectedSarga
    );
  }, [shlokasData, selectedKanda, selectedSarga]);
console.log(
  shlokasData
    .filter((item) => item.kanda === "Sundara Kanda")
    .slice(0, 5)
);
  if (loading) {
    return (
      <div className="kandas-page">
        <h1>Loading Ramayana...</h1>
      </div>
    );
  }

  return (
    <div className="kandas-page">
      <h1>Ramayana Kandas</h1>

      {/* Kanda Tabs */}
      <div className="kanda-tabs">
        {kandaNames.map((kanda) => (
          <button
            key={kanda}
            className={`kanda-tab ${
              selectedKanda === kanda ? "active" : ""
            }`}
            onClick={() => {
              setSelectedKanda(kanda);
              setSelectedSarga(1);
            }}
          >
            {kanda}
          </button>
        ))}
      </div>

      <div className="reader-layout">
        {/* Sidebar */}
        <aside className="sarga-sidebar">
          <h3>Sargas</h3>

          <div className="sarga-list">
            {sargaList.map((sarga) => (
              <button
                key={sarga}
                className={`sarga-btn ${
                  selectedSarga === sarga ? "active" : ""
                }`}
                onClick={() => setSelectedSarga(sarga)}
              >
                Sarga {sarga}
              </button>
            ))}
          </div>
        </aside>

        {/* Reader */}
        <section className="reader-panel">
          <div className="reader-header">
            <h2>{selectedKanda}</h2>
            <p>Sarga {selectedSarga}</p>
          </div>

          <div className="shloka-container">
            {shlokas.length > 0 ? (
              shlokas.map((shloka) => (
                <div
                  key={`${shloka.sarga}-${shloka.shloka}`}
                  className="shloka-card"
                >
                  <div className="shloka-number">
                    Shloka {shloka.shloka}
                  </div>

                  <p className="sanskrit">
                    {shloka.shloka_text}
                  </p>

                  <p className="transliteration">
                    {shloka.transliteration}
                  </p>

                  <div className="section">
                    <h4>Translation</h4>
                    <p>{shloka.translation}</p>
                  </div>

                  <div className="section">
                    <h4>Explanation</h4>
                    <p>{shloka.explanation}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                No shlokas found for this Sarga.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
