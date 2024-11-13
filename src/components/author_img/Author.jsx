import React from 'react'
import  './Author.css';
import Me from './image/Me.PNG';
import favicon from './image/favicon-32x32.png';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const author = () => {

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hart-selwyn/",
    icon: <FaLinkedin />,
  },

  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/hartselwyn",
    icon: <FaGithub />,
  },

  {
    id: 3,
    name: "Twitter",
    url: "",
    icon: <FaTwitter />,
  },

  {
    id: 4,
    name: "Instagram",
    url: "https://www.instagram.com/selwyn_hart/following/",
    icon: <FaInstagram />,
  },

  {
    id: 5,
    name: "Frontend Mentors",
    url: "https://www.frontendmentor.io/profile/hartselwyn",
    icon: (
      <img
        src={favicon}
        alt="Frontend Mentor"
        style={{ width: "10px", height: "10px" }}
      />
    ),
  },
];

  return (
    <div className="author_img">
      <img src={Me} alt="author image" />
      <h1 className="author_name">Hart Selwyn</h1>
      <h4 className="author_location">Port-Harcourt, Nigeria</h4>
      <p className="author_discription">
        "Front-end developer, book lover, sports person."
      </p>
      <div className="social_links">
        {socials.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            
              {link.icon}
              {link.name}
            
          </a>
        ))}
      </div>
    </div>
  );
}

export default author
