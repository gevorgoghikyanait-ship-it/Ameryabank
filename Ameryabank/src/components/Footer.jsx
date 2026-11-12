import React from 'react';
import './Footer.css';

const mainLinks = [
  'Բանկի մասին',
  'Բանկի հիմնական ձեռքբերումները',
  'Հաշվետվություններ',
  'Էական փաստեր',
  'Էթիկայի կանոններ',
  'Բանկի ղեկավարները',
  'Կորպորատիվ կառավարում',
  'Նշանակալից մասնակցություն ունեցող անձինք',
  'Մասնաճյուղեր և բանկոմատներ',
  'Բաժնետերեր և ներդրողներ',
  'Բանկի կառուցվածքը',
  'Ամերիա Օգնական',
  'Հետադարձ կապ',
];

const otherInfoLinks = [
  'Նորություններ',
  'Բլոգ',
  'ԿՍՊ (CSR)',
  'Համագործակցության առաջարկ',
  'Ավելին',
  'Բանկի կողմից օտարվող գույք',
  'Գնումներ',
  'Իրավական ակտեր',
  'Հիմնական նստորո հաշիվներ',
  'Հաճախորդների իրավունքները',
  'Կարծիքի/բողոքի օնլայն հայտ',
  'Ապահովագրական ընկերությունների ցանկ',
  'Համագործակցող գնահատող ընկերությունների ցանկ',
  'Օգտակար հղումներ',
  'Ֆինանսական անվտանգության խորհուրդներ',
  'Stop գործիքներ',
];

const careerLinks = [
  'Ամերիա թիմ',
  'Ինչու մեզ հետ',
  'Երիտասարդներին',
  'Ամերիա սերունդ',
  'Աշխատատեղեր',
];

const Footer = () => {
  return (
    <footer className="ameria-footer">
      <div className="container">
        {/* Վերին տեղեկատվական տեքստ */}
        <div className="footer-disclaimer">
          <p className="disclaimer-greeting">Հարգելի՛ օգտատեր,</p>
          <p>
            Կայքի որևէ տեղեկության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն տեքստերում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով:
          </p>
          <p>
            Բանկը պատասխանատվություն չի կրում այլ ինտերնետային կայքերի բովանդակության ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար, և ֆինանսական կազմակերպությունը պատասխանատվություն չի կրում այդ ինտերնետային կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
        </div>

        {/* Հիմնական 4 սյունակներ */}
        <div className="footer-columns">
          {/* Սյունակ 1 */}
          <div className="footer-col">
            <h4 className="footer-col-title">Հիմնական</h4>
            <ul className="footer-links-list">
              {mainLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Սյունակ 2 */}
          <div className="footer-col">
            <h4 className="footer-col-title">Այլ տեղեկատվություն</h4>
            <ul className="footer-links-list">
              {otherInfoLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Սյունակ 3 */}
          <div className="footer-col">
            <h4 className="footer-col-title">Աշխատանք</h4>
            <ul className="footer-links-list">
              {careerLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Սյունակ 4՝ Կոնտակտներ */}
          <div className="footer-col footer-contacts-col">
            <div className="contact-block">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-text">
                <span className="contact-label">ԳԼԽԱՄԱՍԱՅԻՆ ԳՐԱՍԵՆՅԱԿ</span>
                <p>Վազգեն Սարգսյան 2, Երևան 0010, ՀՀ</p>
              </div>
            </div>

            <div className="contact-block">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-text">
                <p>
                  Հեռախոսահամար՝ <br />
                  <a href="tel:+37410561111">(+37410) 56 11 11</a> կամ{' '}
                  <a href="tel:+37412561111">(+37412) 561111</a>
                </p>
              </div>
            </div>

            <div className="contact-block">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-text">
                <a href="mailto:info@ameriabank.am" className="contact-email">
                  info@ameriabank.am
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Սոցիալական ցանցեր և ստորին գրառում */}
        <div className="footer-bottom">
          <div className="social-icons">
            {/* Facebook */}
            <a href="#facebook" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#linkedin" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#youtube" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#instagram" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Telegram */}
            <a href="#telegram" aria-label="Telegram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.9 3.6c-.3-.2-.7-.3-1.1-.1L2.6 10.6c-.5.2-.8.6-.7 1.1.1.5.4.9.9 1l4.7 1.4 1.8 5.6c.1.4.5.7.9.8h.2c.4 0 .7-.2.9-.5l2.6-3.4 4.8 3.5c.2.2.5.3.8.3.2 0 .4 0 .5-.1.4-.2.7-.5.8-1l3-14.6c.1-.4-.1-.8-.4-1.1zM9.8 14.3l8.5-7.4-6.9 8.4-.4 3.1-1.2-4.1z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="#x" aria-label="X">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="#tiktok" aria-label="TikTok">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>

          <p className="cba-notice">
            Ամերիաբանկ ՓԲԸ-ն վերահսկվում է ՀՀ ԿԲ կողմից:
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;