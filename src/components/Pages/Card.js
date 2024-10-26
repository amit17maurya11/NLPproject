import React from 'react';
import './Card.css'; // Import any necessary CSS

// Card component
const Card = ({ imageSrc, title, link }) => (
  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
    <div className="sessions-professional-card">
      <div className="image-box">
        <img alt={title} src={imageSrc} />
      </div>
      <div className="content-box">
        <h4 className="rf-tile-title">{title}</h4>
        <a className="link-only" href={link}>
          <span>
            <img src="https://static.rainfocus.com/autodesk/otc2023/static/staticfile/staticfile/right-circle-icon_1679859174054001Q9Er.svg" alt="Icon" />
          </span>
          <span className="mdBtnR-text" data-test="button-text">Browse</span>
        </a>
      </div>
    </div>
  </div>
);

// Main component
const App = () => {
  const cardsData = [
    {
      imageSrc: "https://static.rainfocus.com/autodesk/au2024/static/staticfile/staticfile/AECO_1720562894240001qotR.png",
      title: "Architecture, Engineering, Construction, & Operations",
      link: "https://www.autodesk.com/autodesk-university/search?fields.year=2024&fields.industry=Architecture",
    },
    {
      imageSrc: "https://static.rainfocus.com/autodesk/au2024/static/staticfile/staticfile/ACS_1720563066242001hCYn.png",
      title: "Autodesk Construction Solutions",
      link: "https://www.autodesk.com/autodesk-university/search?fields.year=2024&fields.industry=Civil+%2F+Site+development+contractors",
    },
    {
      imageSrc: "https://static.rainfocus.com/autodesk/au2024/static/staticfile/staticfile/Automotive%20and%20Transportation_1720563123926001qmpA.png",
      title: "Automotive & Transportation",
      link: "https://www.autodesk.com/autodesk-university/search",
    },
    {
      imageSrc: "https://static.rainfocus.com/autodesk/au2024/static/staticfile/staticfile/Civil%20Engineering_1720563144932001SdrN.png",
      title: "Civil Engineering",
      link: "https://www.autodesk.com/autodesk-university/search?fields.year=2024&fields.industry=Site+Development+%28General+civil+engineering%29",
    },
    {
      imageSrc: "https://static.rainfocus.com/autodesk/au2024/static/staticfile/staticfile/Education_1720563164147001P5tS.png",
      title: "Education",
      link: "https://www.autodesk.com/autodesk-university/search",
    },
    {
      imageSrc: "https://static.rainfocus.com/autodesk/au2024/static/staticfile/staticfile/Media%20and%20Entertainment_1720563187975001Hgq9.png",
      title: "Media & Entertainment",
      link: "https://www.autodesk.com/autodesk-university/search?fields.year=2024&fields.industry=Media+and+entertainment",
    },
    {
      imageSrc: "https://static.rainfocus.com/autodesk/au2024/static/staticfile/staticfile/Product%20Design%20and%20Manufacturing_1720563207955001HIM8.png",
      title: "Design & Manufacturing",
      link: "https://www.autodesk.com/autodesk-university/search?fields.year=2024&fields.industry=Product+design+and+manufacturing",
    },
    {
      imageSrc: "https://static.rainfocus.com/autodesk/au2024/static/staticfile/staticfile/session-catalog-industry-images_Software-Dev_1720823665347001C3i8.png",
      title: "Software Development",
      link: "https://www.autodesk.com/autodesk-university/search?fields.year=2024&fields.topic=Software+Development",
    },
  ];

  return (
    <div className="flex-box-section-full pt-0 pb-50">
      <div className="flex-box-section-full-interior">
        <div className="flex-box-section" style={{ position: "relative" }}>
          <div className="flex-box-child rf-grid-layout-100">
            <div className="element-container">
              <div className="row sessions-professional-row">
                {cardsData.map((card, index) => (
                  <Card
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    link={card.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
