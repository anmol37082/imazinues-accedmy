import { Helmet } from "react-helmet-async";
import GraphicDesining from "../components/GraphicDesining";
import VideoEditing from "../components/VideoEditing";
import HomeBanner from "../components/HomeBanner";
import HomeBanner2 from "../components/HomeBanner2";
import HomeBanner3 from "../components/HomeBanner3";
import Header from "../components/Header";
import InquiryForm from "../components/InquiryForm";
import Reviews from "../components/Reviews";
import StatsAndFacts from "../components/StatsAndFacts";
// import Webvideobnnaer from "../components/Webvideobnnaer";
import Footer from "../components/Footer";

function HomePage() {
  const siteUrl = "https://imazineus.com";
  const pageUrl = "https://imazineus.com/";

  const title =
    "Imazine Us Academy | Graphic Design, Video Editing and Offline Classes";

  const description =
    "Join Imazine Us Academy for offline graphic design, Photoshop, Illustrator, InDesign and creative training classes in Zirakpur.";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,
        name: "Imazine Us Academy",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/ImazineUsAcademyLogo.png`,
        },
        description,
        sameAs: [
          "https://www.instagram.com/imazineusacademy/",
          "https://www.facebook.com/Imazine.Us.Academy",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Zirakpur",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: "en-IN",
        isPartOf: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "Course",
        "@id": `${siteUrl}/graphic-design-course`,
       
        name: "Graphic Designing Course",
        description:
          "Offline graphic designing course covering Photoshop, Illustrator, InDesign, typography, branding, social media design and portfolio building.",
        provider: {
          "@type": "EducationalOrganization",
          "@id": `${siteUrl}/#organization`,
        },
        educationalCredentialAwarded: "Certificate",
      },
    ],
  };

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph (Facebook / WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content={`${siteUrl}/ImazineUsAcademyLogo.png`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* UI Components */}
      <Header />
      <HomeBanner />
      <StatsAndFacts />
      <HomeBanner2 />
      <GraphicDesining />
     < HomeBanner3 />
     {/* <Webvideobnnaer /> */}
      <VideoEditing />
      <Reviews />
       <InquiryForm />
      <Footer />
    </>
  );
}

export default HomePage;
