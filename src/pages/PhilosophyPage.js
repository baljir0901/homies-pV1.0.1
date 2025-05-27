import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Philosophy from "../components/11.Philosophy/Philosophy"; // Corrected Path
import { HelmetProvider, Helmet } from "react-helmet-async";
// import Header from "../components/1.Header/Header"; // Corrected Path
// import Footer from "../components/10.Footer/Footer"; // Corrected Path

<Helmet>
  <title>企業理念 | 株式会社HOMIES</title>
  <meta
    name="description"
    content="株式会社HOMIESの企業理念は、人を大切にし、誠実にものづくりを行い、地域社会に貢献することです。未来を見据えた建設の在り方を追求しています。"
  />
  <meta
    name="keywords"
    content="企業理念, HOMIES, 経営方針, 建設理念, ミッション, ビジョン"
  />
  <meta property="og:title" content="企業理念 | 株式会社HOMIES" />
  <meta
    property="og:description"
    content="人を大切にし、誠実にものづくりを行うHOMIESの企業理念をご紹介します。"
  />
  <meta property="og:url" content="https://homies-p.com/philosophy" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://homies-p.com/og-philosophy.jpg" />
</Helmet>

const PhilosophyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      {/* <Header /> */}
      <div className="content-wrapper">
        <Philosophy />
        <button
          className="back-button"
          onClick={() => navigate("/#ceo-message")}
        >
          ホームへ戻る
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default PhilosophyPage;
