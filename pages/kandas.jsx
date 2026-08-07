import { useEffect, useMemo, useState } from "react";
import "./Kandas.css";
import { Loader } from "../components/layouts/Loader.jsx";

const kandaNames = [
  "Bala Kanda",
  "Ayodhya Kanda",
  "Aranya Kanda",
  "Kishkindha Kanda",
  "Sundara Kanda",
  "Yuddha Kanda",
  "Uttara Kanda",
];

const fileMap = {
  "Bala Kanda": "bala-kanda.json",
  "Ayodhya Kanda": "ayodhya-kanda.json",
  "Aranya Kanda": "aranya-kanda.json",
  "Kishkindha Kanda": "kishkindha-kanda.json",
  "Sundara Kanda": "sundara-kanda.json",
  "Yuddha Kanda": "yuddha-kanda.json",
  "Uttara Kanda": "uttara-kanda.json",
};

export const Kandas = () => {
  const [shlokasData, setShlokasData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeKanda, setActiveKanda] = useState("Sundara Kanda");
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [resumePosition, setResumePosition] = useState(null);

  // Load the selected Kanda
  useEffect(() => {
    const loadKanda = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/${fileMap[activeKanda]}`);
        const data = await res.json();

        setShlokasData(data);
      } catch (err) {
        console.error("Failed to load Kanda:", err);
      } finally {
        setLoading(false);
      }
    };

    loadKanda();
  }, [activeKanda]);

  // Restore saved reading position
  useEffect(() => {
    const saved = localStorage.getItem("ramayana-reading-position");

    if (saved) {
      const position = JSON.parse(saved);

      setResumePosition(position);

      if (position.kanda) {
        setActiveKanda(position.kanda);
      }
    }
  }, []);

  // Save reading position while scrolling
  useEffect(() => {
    const handleSave = () => {
      localStorage.setItem(
        "ramayana-reading-position",
        JSON.stringify({
          kanda: activeKanda,
          scrollY: window.scrollY,
        })
      );
    };

    window.addEventListener("scroll", handleSave);

    return () => window.removeEventListener("scroll", handleSave);
  }, [activeKanda]);

  // Back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Group shlokas by Sarga
  const grouped = useMemo(() => {
    const result = {};

    shlokasData.forEach((item) => {
      const sarga = Number(item.sarga);

      if (!result[sarga]) result[sarga] = [];
      result[sarga].push(item);
    });

    return Object.keys(result)
      .map(Number)
      .sort((a, b) => a - b)
      .map((sarga) => ({
        sarga,
        shlokas: result[sarga],
      }));
  }, [shlokasData]);

  // Restore scroll position after Kanda loads
  useEffect(() => {
    if (!loading && resumePosition?.kanda === activeKanda) {
      setTimeout(() => {
        window.scrollTo({
          top: resumePosition.scrollY || 0,
          behavior: "instant",
        });
      }, 100);
    }
  }, [loading, activeKanda, resumePosition]);

  const scrollToSarga = (sarga) => {
    const el = document.getElementById(`sarga-${sarga}`);

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY;

      localStorage.setItem(
        "ramayana-reading-position",
        JSON.stringify({
          kanda: activeKanda,
          scrollY: y,
        })
      );

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const continueReading = () => {
    if (resumePosition) {
      setActiveKanda(resumePosition.kanda);

      setTimeout(() => {
        window.scrollTo({
          top: resumePosition.scrollY || 0,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="kandas-page">
      <h1>Ramayana Kandas</h1>

      {/* Continue Reading */}
      {resumePosition && (
        <div className="resume-banner">
          <p>
            Continue Reading • <strong>{resumePosition.kanda}</strong>
          </p>
          <button className="resume-btn" onClick={continueReading}>
            Resume
          </button>
        </div>
      )}

      {/* Sticky Kanda Navigation */}
      <div className="kanda-tabs sticky-nav">
        {kandaNames.map((kanda) => (
          <button
            key={kanda}
            className={`kanda-tab ${
              activeKanda === kanda ? "active" : ""
            }`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveKanda(kanda);
            }}
          >
            {kanda}
          </button>
        ))}
      </div>

      <div className="reader-flow">
        <section className="kanda-section">
          <header className="kanda-section-header">
            <h2>{activeKanda}</h2>
            <p>{grouped.length} Sargas</p>
          </header>

          {/* Sarga Chips */}
          <div className="sarga-chip-row">
            {grouped.map(({ sarga }) => (
              <button
                key={sarga}
                className="sarga-chip"
                onClick={() => scrollToSarga(sarga)}
              >
                Sarga {sarga}
              </button>
            ))}
          </div>

          {/* Shlokas */}
          {grouped.length > 0 ? (
            grouped.map(({ sarga, shlokas }) => (
              <div
                key={sarga}
                id={`sarga-${sarga}`}
                className="sarga-block"
              >
                <h3 className="sarga-heading">Sarga {sarga}</h3>

                {shlokas.map((shloka) => (
                  <article
                    className="shloka-card"
                    key={`${shloka.sarga}-${shloka.shloka}`}
                  >
                    <div className="shloka-number">
                      Shloka {shloka.shloka}
                    </div>

                    <p className="sanskrit">{shloka.shloka_text}</p>

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
                  </article>
                ))}
              </div>
            ))
          ) : (
            <div className="empty-state">
              No shlokas found for {activeKanda}.
            </div>
          )}
        </section>
      </div>

      {/* Back to Top */}
      <button
        className={showTopBtn ? "back-to-top visible" : "back-to-top"}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
      >
        ↑
      </button>
    </main>
  );
};