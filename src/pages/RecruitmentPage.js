import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import RecruitForm from "../components/12.RecruitForm/RecruitFormTemp";
import "./RecuitmentPage.css"; // Ensure CSS is imported
import { HelmetProvider, Helmet } from "react-helmet-async";

<Helmet>
  <title>採用情報 | 株式会社HOMIES</title>
  <meta
    name="description"
    content="株式会社HOMIESでは、建設業界で共に成長できる仲間を募集しています。未経験者歓迎、やる気重視の採用方針であなたの挑戦を応援します。"
  />
  <meta
    name="keywords"
    content="採用情報, HOMIES求人, 建設業採用, 未経験歓迎, 建築技術者募集"
  />
  <meta property="og:title" content="採用情報 | 株式会社HOMIES" />
  <meta
    property="og:description"
    content="HOMIESで一緒に働きませんか？建設業界でのキャリアを築ける採用情報はこちら。"
  />
  <meta property="og:url" content="https://homies-p.com/recruitment" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://homies-p.com/og-recruit.jpg" />
</Helmet>

const RecruitmentPage = () => {
  const navigate = useNavigate();

  // ✅ Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Centered Introduction */}
      <div className="recruitment-intro">
        <h2>Recruitment sheet registration</h2>
        <p>
          下記フォームに必要事項をご入力の上送信してください。後日担当よりご連絡いたします。
        </p>
      </div>

      {/* Recruitment Form Section */}
      <section className="recruit-form">
        <h2>人材募集シート登録</h2>
        <p>以下のフォームに入力し、送信してください。</p>
        <RecruitForm />
      </section>

      {/* ✅ Back Button to CEO Message */}
      <div className="content-wrapper">
        <button className="back-button" onClick={() => navigate("/#careers")}>
          ホームへ戻る
        </button>
      </div>
    </div>
  );
};

export default RecruitmentPage;
