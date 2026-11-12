import React from 'react';
import './EcosystemSection.css';

const ecosystemItems = [
  {
    id: 'myameria',
    titleImg: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/myameria.png',
    titleAlt: 'MyAmeria',
    description: 'Բանկային ու ոչ բանկային գործարքներ կատարելու քո հավելվածը',
    primaryBtn: 'Մուտք MyAmeria',
    secondaryBtn: 'Իմանալ ավելին',
    primaryLink: '#',
    secondaryLink: '#',
  },
  {
    id: 'myhome',
    titleImg: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/home.png',
    titleAlt: 'MyHome',
    description: 'Տուն գնելու, վաճառելու և վարձակալելու քո օնլայն հարթակը',
    primaryBtn: 'Դիմել օնլայն',
    secondaryBtn: 'Իմանալ ավելին',
    primaryLink: '#',
    secondaryLink: '#',
  },
  {
    id: 'mycar',
    titleImg: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/car.png',
    titleAlt: 'MyCar',
    description: 'Մեքենա գնելու և վաճառելու քո օնլայն հարթակը',
    primaryBtn: 'Դիմել օնլայն',
    secondaryBtn: 'Իմանալ ավելին',
    primaryLink: '#',
    secondaryLink: '#',
  },
  {
    id: 'myinvest',
    titleImg: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/invest.png',
    titleAlt: 'MyInvest',
    description: 'Ներդրումներ կատարելու քո օնլայն հարթակը',
    primaryBtn: 'Բացել հիմա',
    secondaryBtn: null,
    primaryLink: '#',
    secondaryLink: '#',
  },
  {
    id: 'mybusiness',
    titleImg: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/business.png',
    titleAlt: 'MyBusiness',
    description: 'Բիզնեսը կառավարելու քո օնլայն հարթակը',
    primaryBtn: 'Դիմել հիմա',
    secondaryBtn: null,
    primaryLink: '#',
    secondaryLink: '#',
  },
  {
    id: 'myameriastar',
    titleImg: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/star.png',
    titleAlt: 'MyAmeriaStar',
    description: 'Գումարը կառավարելու երեխաների հավելվածը',
    primaryBtn: 'Դիմել օնլայն',
    secondaryBtn: null,
    primaryLink: '#',
    secondaryLink: '#',
  },
  {
    id: 'mypay',
    titleImg: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/pay.png',
    titleAlt: 'MyPay',
    description: 'Գնելու և մաս-մաս վճարելու քո օնլայն գործիքը',
    primaryBtn: 'Դիմել հիմա',
    secondaryBtn: 'Իմանալ ավելին',
    primaryLink: '#',
    secondaryLink: '#',
  },
  {
    id: 'myeventhub',
    titleImg: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/myeventhub.png',
    titleAlt: 'MyEventHub',
    description: 'Քո սիրելի միջոցառումներին և փորձառություններին միանալու օնլայն հարթակը',
    primaryBtn: 'Գնել տոմս',
    secondaryBtn: 'Իմանալ ավելին',
    primaryLink: '#',
    secondaryLink: '#',
  },
  {
    id: 'mytour',
    titleImg: 'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/mytour.png',
    titleAlt: 'MyTour',
    description: 'Ուղևորությունդ պլանավորելու քո օնլայն հարթակը',
    primaryBtn: 'Ամրագրել օնլայն',
    secondaryBtn: 'Իմանալ ավելին',
    primaryLink: '#',
    secondaryLink: '#',
  },
];

const EcosystemSection = () => {
  return (
    <section className="ecosystem-section">
      <div className="container ecosystem-grid">
        {ecosystemItems.map((item) => (
          <div key={item.id} className="ecosystem-card">
            <div className="card-top-image">
              <img src={item.titleImg} alt={item.titleAlt} />
            </div>

            <div className="card-bottom-content">
              <p className="card-description">{item.description}</p>
              
              <div className="card-actions">
                <a href={item.primaryLink} className="btn-primary-green">
                  {item.primaryBtn}
                </a>
                {item.secondaryBtn && (
                  <a href={item.secondaryLink} className="btn-secondary-outline">
                    {item.secondaryBtn}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcosystemSection;