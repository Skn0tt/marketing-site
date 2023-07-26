import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Modal from 'react-modal'
import HubspotForm from 'react-hubspot-form'
import SVG from 'react-inlinesvg'
import { Helmet } from 'react-helmet'
import AboutIcon from '../assets/img/footerabouticon.svg'
import BlogIcon from '../assets/img/footerblogicon.svg'
import CareerIcon from '../assets/img/footercareersicon.svg'
import CloudIcon from '../assets/img/footercloudicon.svg'
import CommunityIcon from '../assets/img/footercommunityicon.svg'
import ContactIcon from '../assets/img/footercontacticon.svg'
import DocumentationIcon from '../assets/img/footerdocumentationicon.svg'
import MediaPressIcon from '../assets/img/footermediapressicon.svg'
import MeltanoHubIcon from '../assets/img/footermeltanohubicon.svg'
import MeltanoSdkIcon from '../assets/img/footermeltanosdkicon.svg'
import PartnersIcon from '../assets/img/footerpartnersicon.svg'
import PricingIcon from '../assets/img/footerpricingicon.svg'
import ProductIcon from '../assets/img/footerproducticon.svg'
import FooterImg from '../assets/img/footer.svg'

Modal.defaultStyles.overlay.backgroundColor = 'rgba(8, 2, 22, 0.5)'
Modal.defaultStyles.overlay.zIndex = '99999'

const footerData = [
  {
    id: 0,
    header: 'Product',
    links: [
      {
        id: 0,
        title: 'Overview',
        url: '/product/',
        icon: ProductIcon,
        desc: 'The declarative code-first data integration engine',
      },
      {
        id: 1,
        title: 'Meltano/Cloud',
        url: '/cloud/',
        icon: CloudIcon,
        desc: 'You define the pipelines, we manage the infrastructure',
      },
      {
        id: 2,
        title: 'Meltano/SDK',
        url: 'https://sdk.meltano.com/en/latest/',
        icon: MeltanoSdkIcon,
        desc: 'Build a connector for any data source under the sun',
      },
      {
        id: 3,
        title: 'Meltano/Hub',
        url: 'https://hub.meltano.com/extractors/',
        icon: MeltanoHubIcon,
        desc: 'Connectors for 600+ sources and destinations',
      },
      {
        id: 4,
        title: 'Pricing',
        url: '/pricing/',
        icon: PricingIcon,
        desc: 'Pay only for the workloads you run, no matter how much the data volume grows',
      },
    ],
  },
  {
    id: 1,
    header: 'Resources',
    links: [
      {
        id: 0,
        title: 'Documentation',
        url: 'https://docs.meltano.com/',
        icon: DocumentationIcon,
        desc: 'Learn how to use Meltano and where to get started',
      },
      {
        id: 1,
        title: 'Community',
        url: '/community/',
        icon: CommunityIcon,
        desc: 'Join 3,500+ data integrators on Slack and GitHub',
      },
      {
        id: 2,
        title: 'Blog',
        url: '/blog/',
        icon: BlogIcon,
        desc: 'Stay up to date on Meltano & data integration',
      },
      {
        id: 3,
        title: 'Partners',
        url: '/partners/',
        icon: PartnersIcon,
        desc: 'Bring in help to build connectors and take Meltano into production',
      },
    ],
  },
  {
    id: 2,
    header: 'Company',
    links: [
      {
        id: 0,
        title: 'About',
        url: '/about/',
        icon: AboutIcon,
        desc: 'We bring together data, software development workflows, and dragons!',
      },
      {
        id: 1,
        title: 'Careers',
        url: 'https://boards.greenhouse.io/meltano',
        icon: CareerIcon,
        desc: 'Join Melty & team us on our mission to unlock all data everywhere!',
      },
      {
        id: 2,
        title: 'Contact',
        url: '/contact/',
        icon: ContactIcon,
        desc: 'The Meltano team is here to help. Ask us anything, or give us your feedback!',
      },
      {
        id: 3,
        title: 'Press',
        url: '/press/',
        icon: MediaPressIcon,
        desc: 'Related news, press releases, and logos',
      },
    ],
  },
]

const Footer = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <footer>
      <div className="footer section">
        <div className="container">
          <div className="footer-table ml-margins">
            <div className="footer-col footer-main-col">
              <div className="footer-col-info">
                <Link to="/">
                  <svg
                    className="footer-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="180"
                    height="42"
                    viewBox="0 0 180 42"
                    fill="none"
                  >
                    <path
                      d="M102.85 31.9901C102.316 31.3784 101.929 30.6793 101.695 29.8882C101.455 29.0972 101.34 28.0301 101.34 26.6918V6.63916H105.756V26.218C105.756 27.7404 105.922 28.9132 106.258 29.741C106.594 30.5505 107.027 31.2404 107.561 31.8153V31.9947H102.846L102.85 31.9901Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M112.802 31.9903C112.346 31.4568 111.983 30.8175 111.706 30.0678C111.448 29.3182 111.319 28.1914 111.319 26.692V17.7281H108.888V14.2281H111.379V9.31156H115.68V14.2281H118.614V17.7281H115.708V26.1907C115.708 27.7682 115.888 28.9732 116.242 29.8011C116.597 30.6105 117.025 31.282 117.518 31.8155V31.9949H112.802V31.9903Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M51.8896 14.2095H56.0849V16.3711H56.3198C57.0981 15.0189 58.7237 13.768 61.1598 13.768C63.5959 13.768 65.4242 14.8166 66.4419 16.4723H66.7136C67.934 14.6142 69.6932 13.768 71.9957 13.768C75.9239 13.768 78.4936 16.4401 78.4936 20.1885V31.9855H74.0957V21.7108C74.0957 19.2778 72.9766 17.8889 70.8813 17.8889C68.786 17.8889 67.4274 19.4112 67.4274 21.812V31.9855H63.0249V21.4395C63.0249 19.2778 61.7401 17.8889 59.7092 17.8889C57.6783 17.8889 56.2922 19.5124 56.2922 21.7752V31.9855H51.8943V14.2095H51.8896Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M81.0313 23.201C81.0313 17.5899 84.7891 13.768 90.0021 13.768C95.7217 13.768 98.8348 17.9946 98.8348 22.9986V24.383H85.2956C85.4292 27.0873 87.2943 28.9132 90.1357 28.9132C92.3001 28.9132 93.9625 27.8968 94.5704 26.4434H98.6644C97.7848 30.063 94.6027 32.427 89.9975 32.427C84.7522 32.427 81.0267 28.5039 81.0267 23.1964L81.0313 23.201ZM94.6395 21.2739C94.4369 18.8731 92.5764 17.2864 90.0021 17.2864C87.4278 17.2864 85.6364 19.0433 85.3647 21.2739H94.6395Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M120.663 23.201C120.663 17.6221 124.048 13.768 128.92 13.768C132.001 13.768 133.728 15.5938 134.336 16.5045H134.571V14.2049H138.973V31.9855H134.64V29.7226H134.405C133.898 30.4677 132.305 32.427 129.058 32.427C124.085 32.427 120.663 28.7108 120.663 23.1964V23.201ZM134.677 23.132C134.677 19.7837 132.646 17.7555 129.869 17.7555C127.092 17.7555 125.13 19.9861 125.13 23.132C125.13 26.2778 127.06 28.4717 129.901 28.4717C132.742 28.4717 134.672 26.1077 134.672 23.132H134.677Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M142.634 14.2095H146.83V16.3711H147.064C147.774 15.0511 149.537 13.768 152.075 13.768C156.068 13.768 158.504 16.5735 158.504 20.3586V31.9855H154.106V21.5038C154.106 19.3422 152.72 17.8843 150.689 17.8843C148.557 17.8843 147.032 19.5768 147.032 21.8074V31.9809H142.634V14.2095Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M161.046 23.0998C161.046 17.8245 164.905 13.768 170.523 13.768C176.141 13.768 180 17.8245 180 23.0998C180 28.3751 176.072 32.4316 170.523 32.4316C164.974 32.4316 161.046 28.4073 161.046 23.0998ZM175.533 23.0998C175.533 20.0229 173.434 17.7601 170.523 17.7601C167.613 17.7601 165.513 20.0229 165.513 23.0998C165.513 26.1766 167.613 28.4395 170.523 28.4395C173.434 28.4395 175.533 26.2088 175.533 23.0998Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M43.9452 8.38927C42.2581 10.6819 38.628 11.1962 38.2226 9.83044C37.8116 8.46462 39.9228 7.51892 41.0344 7.38705C34.6112 5.63127 35.7752 10.3033 32.2235 10.7535C34.1852 11.7275 36.2254 13.3458 37.6042 13.5436C39.9695 13.8864 43.282 12.5752 43.9452 8.3855"
                      fill="#ffffff"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.6092 2.52096C18.4859 1.79566 17.9852 1.56395 17.1837 1.2418L17.1781 1.24369C22.3925 -1.22231 25.72 0.554189 27.0614 1.66568C27.8059 2.28254 28.0883 2.86923 28.3551 3.4235C28.569 3.86792 28.7728 4.2915 29.1969 4.69307C29.8321 5.29592 31.0155 6.15568 31.4907 6.50091C31.5382 6.53542 31.5786 6.56479 31.6107 6.58825C31.9638 6.84634 32.1133 7.56221 31.7919 8.05014C31.4706 8.53806 30.6186 9.5384 29.5967 9.37074C28.5747 9.20307 26.3346 8.81499 24.4888 8.49285C22.6429 8.17071 21.3631 7.13646 21.3631 7.13646C21.1314 8.43822 21.9124 9.59303 23.3827 9.97923C23.6682 10.0539 24.0105 10.1318 24.3953 10.2194C26.126 10.6131 28.7161 11.2023 30.8559 12.5771C33.763 14.444 36.0647 17.3904 36.9634 21.9211C37.862 26.4519 36.7392 36.0464 28.7578 39.9856C20.7765 43.9248 13.2155 40.8729 13.2155 40.8729C20.3692 40.5376 24.5579 37.6195 26.1571 35.681C27.2781 34.3208 28.3393 31.8737 27.6929 29.0497C26.9867 25.9583 24.3879 23.611 21.7405 24.0047C19.0931 24.3984 17.9721 27.2732 17.4752 28.6692C16.9782 30.0651 16.2047 31.0956 15.5284 31.2086C14.8521 31.3217 13.8806 31.3575 13.0286 29.2927C12.1767 27.228 9.9011 23.5281 6.88567 24.9165C3.87024 26.3049 3.3247 32.7365 3.3247 32.7365C-0.368922 26.8079 -1.30867 19.2008 2.16449 11.8141C5.63765 4.42744 12.8866 1.70524 12.8866 1.70524C11.59 3.39319 10.1571 8.50415 11.6143 13.1008C13.0716 17.6975 16.6699 20.0015 18.7325 20.3142C20.7951 20.6269 23.2538 19.3986 23.1193 16.8761C23.0091 14.8057 21.2361 13.3344 19.3584 12.4735C18.0188 11.8593 16.6924 10.4427 16.5989 8.2649C16.5055 6.08714 17.4565 4.71002 17.9198 4.1637C18.2841 3.73229 18.7139 3.13699 18.6092 2.52096ZM23.8404 4.61016C22.3177 4.61016 21.6246 5.38631 21.6246 5.38631H21.6227C21.6277 5.3469 21.633 5.30162 21.6389 5.25138C21.7035 4.70139 21.8379 3.557 22.3943 2.99944C23.0015 2.39095 24.0347 1.93505 25.4826 2.99944C26.9305 4.06383 27.3864 6.00422 27.3864 6.00422C26.8782 5.57282 25.363 4.61016 23.8404 4.61016Z"
                      fill="#ffffff"
                    />
                  </svg>
                </Link>
                <div className="newsletter-mini-box">
                  <p className="p3">Stay current with all things Meltano</p>
                  <button
                    type="button"
                    onClick={openModal}
                    className="btn clear-btn"
                  >
                    Subscribe
                  </button>
                  <svg
                    className="newsletter-min-box-glow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="123"
                    height="2"
                    viewBox="0 0 123 2"
                    fill="none"
                  >
                    <path
                      d="M123 1L-7.15256e-07 0.999991"
                      stroke="url(#paint0_linear_2123_20269)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2123_20269"
                        x1="123"
                        y1="1.5"
                        x2="-3.46493e-08"
                        y2="1.49999"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.0885417"
                          stopColor="#3A64FA"
                          stopOpacity="0"
                        />
                        <stop offset="0.561166" stopColor="#FF5894" />
                        <stop
                          offset="0.864583"
                          stopColor="#3A64FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            {footerData.map(c => (
              <div className="footer-col" key={c.header}>
                <div className="footer-col-info">
                  <p className="footer-col-title">{c.header}</p>
                  <ul>
                    {c.links.map(l => (
                      <li key={l.title}>
                        <SVG src={l.icon} title={l.title} />
                        {l.url.charAt(0) === '/' ? (
                          <Link to={l.url}>
                            <p className="footer-list-title">{l.title}</p>
                            <p className="footer-list-info">{l.desc}</p>
                          </Link>
                        ) : (
                          <a href={l.url}>
                            <p className="footer-list-title">{l.title}</p>
                            <p className="footer-list-info">{l.desc}</p>
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img src={FooterImg} alt="" className="dark-bg-footer" loading="lazy" />
      <StaticImage
        src="../assets/img/footer-light-bg.webp"
        alt=""
        className="light-bg-footer"
        layout="fullWidth"
      />
      <div className="copyrights">
        <div className="container">
          <div className="footer-bar ml-margins">
            <div className="footer-legal">
              <Link to="/terms-of-service/">Terms of Service</Link>
              <Link to="/privacy-policy/">Privacy Policy</Link>
              <Link to="/">© Meltano 2023</Link>
            </div>
            <div className="footer-social">
              <a
                href="https://github.com/meltano/meltano"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1613_31336)">
                    <path
                      d="M11.1381 0.883789C4.98605 0.883789 0 5.63241 0 11.4915C0 17.3506 4.98605 22.0993 11.1381 22.0993C17.2902 22.0993 22.2762 17.3506 22.2762 11.4915C22.2762 5.63241 17.2902 0.883789 11.1381 0.883789ZM20.7926 11.4915C20.7926 15.6932 17.8384 19.236 13.7965 20.3341L13.7269 20.3506V16.9114C13.7269 16.0951 13.4963 15.4984 13.0394 15.1214C13.5485 15.0716 14.014 14.9929 14.4622 14.881L14.3969 14.8935C14.8711 14.7691 15.2845 14.5993 15.6673 14.3879L15.6412 14.4004C16.0633 14.1808 16.4157 13.899 16.7115 13.5675L16.7159 13.5633C17.003 13.2319 17.238 12.7885 17.4164 12.2374C17.5991 11.6863 17.6861 11.0523 17.6861 10.3396C17.6861 9.32025 17.3381 8.45423 16.6376 7.74152C16.9639 6.97495 16.9291 6.11721 16.5331 5.16832C16.2852 5.09373 15.9284 5.13931 15.4585 5.30506C14.9886 5.47081 14.5883 5.65727 14.2098 5.87688L14.2403 5.86031L13.7356 6.16279C12.9742 5.95561 12.0953 5.83545 11.1903 5.83545C10.2854 5.83545 9.41084 5.95561 8.57983 6.17937L8.6451 6.16279C8.06209 5.10202 6.57845 5.03158 5.83446 5.16418C5.33847 5.91418 5.39938 7.09926 5.74309 7.73738C5.04696 8.45423 4.69454 9.32025 4.69454 10.3354C4.69454 11.0523 4.78591 11.6821 4.9643 12.2291C5.14703 12.7761 5.37762 13.2153 5.66043 13.5551C5.95193 13.899 6.3087 14.1808 6.70898 14.3921L6.72638 14.4004C7.08315 14.5993 7.49648 14.7691 7.93156 14.8852L7.97072 14.8935C8.35794 14.9929 8.81913 15.0716 9.28902 15.1172L9.32818 15.1214C8.97576 15.4238 8.75822 15.8589 8.6799 16.4225C8.51022 16.5012 8.31008 16.5675 8.10124 16.6089L8.08384 16.6131C7.87065 16.6545 7.627 16.6752 7.37901 16.6752H7.33115C7.03964 16.6752 6.74814 16.5841 6.46098 16.4017C6.17383 16.2194 5.93018 15.9584 5.72569 15.6145C5.56036 15.3493 5.34717 15.1296 5.09047 14.9639L5.08177 14.9598C4.82072 14.7899 4.60318 14.6904 4.42479 14.6573L4.30297 14.6324L4.23771 14.6241C4.12023 14.6241 4.01581 14.6863 3.9636 14.7816L3.9462 14.8106L3.9114 14.9432C3.9114 15.0592 3.98536 15.1628 4.08978 15.2084C4.28557 15.2912 4.477 15.4528 4.66409 15.689C4.82072 15.8755 4.95994 16.0868 5.07307 16.3147L5.08177 16.3354L5.21664 16.6255C5.32977 16.9404 5.5299 17.2056 5.7953 17.4004L5.79965 17.4045C6.04765 17.591 6.34786 17.7236 6.67417 17.7816H6.68722C6.96133 17.8313 7.27894 17.8645 7.60525 17.8686H7.73142C7.94896 17.8686 8.1578 17.852 8.36664 17.8189L8.34489 17.823L8.64945 17.7733C8.64945 18.0924 8.6538 18.4653 8.65815 18.8962C8.6625 19.1573 8.6625 19.8658 8.6625 20.3879C4.50746 19.3064 1.48798 15.7346 1.48798 11.4915C1.48798 7.70837 3.88964 4.45561 7.31809 3.04263L7.37901 3.02191C8.48847 2.56197 9.78066 2.29677 11.1381 2.29677C16.4679 2.29677 20.7883 6.41141 20.7883 11.4874L20.7926 11.4915Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1613_31336">
                      <rect width="22.9834" height="22.9834" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://meltano.com/slack"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                >
                  <path
                    d="M9.33048 1.76807C8.25471 1.76807 7.38801 2.63789 7.38801 3.71282C7.38801 4.22559 7.59328 4.72318 7.95441 5.08782C8.31933 5.45246 8.8135 5.65757 9.33048 5.65757H11.273V3.71282C11.273 2.64169 10.4063 1.77186 9.33048 1.76807ZM9.33048 6.9528H4.14169C3.06592 6.9528 2.19922 7.82262 2.19922 8.89756C2.19922 9.97249 3.06972 10.8423 4.14169 10.8423H9.32668C10.4025 10.8423 11.2692 9.97249 11.2692 8.89756C11.273 7.82642 10.4025 6.9528 9.33048 6.9528ZM14.5155 10.8423C15.5912 10.8423 16.4617 9.97249 16.4579 8.89756V3.71282C16.4579 2.63789 15.5874 1.76807 14.5155 1.76807C13.4435 1.76807 12.573 2.63789 12.573 3.71282V8.89756C12.573 9.97628 13.4397 10.8423 14.5155 10.8423ZM21.6467 8.89756C21.6467 7.82262 20.7762 6.9528 19.7043 6.9528C18.6323 6.9528 17.7618 7.82262 17.7618 8.89756V10.8423H19.7043C20.7762 10.8423 21.6467 9.97249 21.6467 8.89756ZM19.7005 12.1413H14.5155C13.4397 12.1413 12.573 13.0112 12.573 14.0861C12.573 14.5989 12.7783 15.0965 13.1394 15.4611C13.5043 15.8257 13.9985 16.0308 14.5155 16.0308H19.7005C20.7762 16.0308 21.6429 15.161 21.6429 14.0861C21.6467 13.0112 20.7762 12.1413 19.7005 12.1413ZM14.5155 17.3261H12.573V19.2708C12.573 20.3458 13.4435 21.2156 14.5155 21.2156C15.5874 21.2156 16.4617 20.3458 16.4579 19.2708C16.4617 18.1959 15.5912 17.3299 14.5155 17.3261ZM9.33048 12.1413C8.25471 12.1413 7.38801 13.0112 7.38801 14.0861V19.2708C7.38801 20.3458 8.25851 21.2156 9.33048 21.2156C10.4025 21.2156 11.2768 20.3458 11.273 19.2708V14.0861C11.273 13.5733 11.0677 13.0757 10.7066 12.7111C10.3416 12.3465 9.84366 12.1413 9.33048 12.1413ZM2.19922 14.0861C2.19922 14.5989 2.40449 15.0965 2.76561 15.4611C3.13054 15.8257 3.62471 16.0308 4.14169 16.0308C5.21746 16.0308 6.08796 15.161 6.08416 14.0861V12.1413H4.14169C3.06972 12.1413 2.19922 13.0112 2.19922 14.0861Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/meltanodata"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                >
                  <path
                    d="M22.132 5.41566C21.4111 5.73879 20.6415 5.95421 19.8329 6.05213C20.661 5.55275 21.2942 4.76941 21.5864 3.8294C20.8168 4.28961 19.9596 4.62253 19.0438 4.80857C18.3132 4.02523 17.2806 3.53564 16.1213 3.53564C13.9099 3.53564 12.1272 5.33733 12.1272 7.55026C12.1272 7.8636 12.1661 8.16714 12.2343 8.47069C8.91237 8.30423 5.97034 6.70817 3.99276 4.27003C3.65179 4.86732 3.44722 5.55275 3.44722 6.28713C3.44722 7.67756 4.14863 8.91132 5.22997 9.63591C4.57727 9.61632 3.95379 9.43028 3.41799 9.13653C3.41799 9.15611 3.41799 9.1659 3.41799 9.18549C3.41799 11.134 4.79159 12.7595 6.62304 13.1218C6.29182 13.2099 5.93138 13.2589 5.57093 13.2589C5.31764 13.2589 5.06436 13.2295 4.82081 13.1903C5.32738 14.7864 6.80814 15.9516 8.55192 15.981C7.18807 17.0581 5.46377 17.7043 3.5836 17.7043C3.26212 17.7043 2.94064 17.6847 2.62891 17.6456C4.40191 18.7814 6.4964 19.4472 8.7565 19.4472C16.1116 19.4472 20.1252 13.3274 20.1252 8.02027C20.1252 7.84402 20.1252 7.67756 20.1154 7.50131C20.9143 6.93338 21.5962 6.22838 22.132 5.41566Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/meltano/ "
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                >
                  <path
                    d="M20.6536 20.3314H16.9873V14.5879C16.9873 13.2182 16.9635 11.4556 15.0793 11.4556C13.1952 11.4556 12.8783 12.9469 12.8783 14.488V20.3314H9.21207V8.5209H12.7307V10.1359H12.7784C13.1301 9.53459 13.6402 9.03751 14.2523 8.70323C14.8644 8.36678 15.5547 8.20398 16.2515 8.23003C19.9676 8.23003 20.6536 10.6742 20.6536 13.8542V20.3314Z"
                    fill="white"
                  />
                  <path
                    d="M5.0748 6.9081C4.6537 6.9081 4.24344 6.78438 3.8918 6.54995C3.54232 6.31552 3.26882 5.98341 3.10819 5.59486C2.94539 5.20631 2.90415 4.77652 2.98664 4.3641C3.06912 3.95168 3.27099 3.57181 3.56837 3.27443C3.86575 2.97705 4.24561 2.77518 4.65804 2.6927C5.07046 2.61021 5.49808 2.65363 5.88663 2.81425C6.27517 2.97488 6.60728 3.24838 6.84171 3.59786C7.07614 3.94733 7.19987 4.35976 7.19987 4.78086C7.19987 5.34523 6.97629 5.88573 6.57689 6.28513C6.17749 6.68453 5.637 6.9081 5.07263 6.9081H5.0748Z"
                    fill="white"
                  />
                  <path
                    d="M6.90683 8.5209H3.23626V20.3292H6.90683V8.5209Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/meltano"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1613_31350)">
                    <path
                      d="M12.0776 19.4872C11.3799 19.4872 5.24008 19.4708 3.52453 19.0029C2.32611 18.6746 1.38215 17.7142 1.06202 16.4994C0.585938 14.7182 0.585938 11.205 0.585938 11.0572C0.585938 10.9095 0.585938 7.38808 1.06202 5.61508C1.37394 4.41665 2.3179 3.46448 3.52453 3.13615C5.24008 2.66827 11.3799 2.65186 12.0776 2.65186C12.7754 2.65186 18.9152 2.66827 20.6308 3.13615C21.8374 3.46448 22.7814 4.41665 23.0933 5.61508C23.5612 7.39629 23.5694 10.9095 23.5694 11.0572C23.5694 11.205 23.5694 14.7182 23.0933 16.4994C22.7732 17.7224 21.8292 18.6828 20.6308 19.0111C18.907 19.479 12.7672 19.4954 12.0776 19.4954V19.4872ZM12.0776 4.29353C10.2554 4.29353 5.23187 4.3674 3.95958 4.72036C3.31112 4.90095 2.81861 5.38524 2.64624 6.0337C2.23582 7.60971 2.22761 11.0244 2.22761 11.0572C2.22761 11.0901 2.22761 14.5129 2.64624 16.0807C2.81861 16.7374 3.31932 17.2463 3.95137 17.4187C5.23187 17.7717 10.2472 17.8455 12.0776 17.8455C13.9081 17.8455 18.9234 17.7717 20.2039 17.4187C20.8442 17.2463 21.3449 16.7292 21.5091 16.0807C21.9195 14.5047 21.9277 11.0901 21.9277 11.0572C21.9277 11.0244 21.9277 7.6015 21.5091 6.0337C21.3367 5.39345 20.8524 4.90095 20.2039 4.72857C18.9234 4.37561 13.9081 4.30174 12.0776 4.30174V4.29353Z"
                      fill="white"
                    />
                    <path
                      d="M9.89422 14.2667L15.4677 11.049L9.89422 7.83133V14.2667Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1613_31350">
                      <rect
                        width="22.9834"
                        height="22.9834"
                        fill="white"
                        transform="translate(0.585938)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.crunchbase.com/organization/meltano"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M19.2872 1.76807H3.72674C2.65713 1.77111 1.78624 2.64199 1.7832 3.7116V19.272C1.78624 20.3417 2.65713 21.2125 3.72674 21.2156H19.2872C20.3568 21.2125 21.2277 20.3417 21.2307 19.272V3.7116C21.2277 2.64199 20.3568 1.77111 19.2872 1.76807ZM7.49348 13.4888C8.35099 13.8814 9.36409 13.5016 9.75668 12.6435H11.1022C10.2635 16.0778 5.2084 15.4701 5.2084 11.9343C5.2084 8.39541 10.2635 7.78768 11.1022 11.225H9.75668C9.2626 10.1396 7.83563 9.8795 6.99331 10.7249C6.14795 11.5666 6.40746 12.9948 7.49348 13.4888ZM16.6855 14.1725C16.429 14.3944 16.1409 14.5651 15.8243 14.6855C14.9157 15.0367 13.8905 14.9231 13.0798 14.3755V14.6855H11.8546V6.12006H13.0701V9.44983C13.504 9.15569 14.0072 8.98127 14.5292 8.93994H14.7474C17.5138 8.93387 18.7864 12.3773 16.6849 14.1719L16.6855 14.1725ZM16.505 11.9318C16.5238 12.8878 15.755 13.676 14.7991 13.676C13.8431 13.676 13.0737 12.8878 13.0962 11.9318C13.1436 9.70995 16.4545 9.70995 16.505 11.9318Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // eslint-disable-next-line react/jsx-no-bind
        onRequestClose={closeModal}
        contentLabel="Subscribe Modal"
        ariaHideApp={false}
        className="newsletter-modal"
      >
        <div className="newsletter-popup">
          <div className="newsletter-popup-container">
            <button onClick={closeModal} type="button" id="close-newsletter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
              >
                <g opacity="0.1">
                  <line
                    x1="2.63867"
                    y1="17.9899"
                    x2="18.6284"
                    y2="2.00016"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3.19171"
                    y1="2"
                    x2="19.1815"
                    y2="17.9898"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </button>
            <h2>
              <em>Stay current</em> with all things Meltano
            </h2>
            <HubspotForm
              portalId="20712484"
              formId="21c9121f-92ff-4a9c-9c7a-5da576a9b72c"
              onSubmit={() => console.log('Submitted!')}
              onReady={form => console.log('Form ready!')}
              loading={<div>Loading...</div>}
              cssClass="form-subsribe"
              submitButtonClass="form-subscribe-submit"
            />
          </div>
        </div>
      </Modal>
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/20712484.js"
        />
      </Helmet>
    </footer>
  )
}

export default Footer
