import React from "react";
import cocktail from "../assets/portfolio/cocktail.png";
import allRead from "../assets/portfolio/allread.png";
import sthdpixs from "../assets/portfolio/sthdpixs.png";
import laceLink from "../assets/portfolio/lacelink.png";
import portfolio from "../assets/portfolio/my-portfolio.png";
import vue from "../assets/vue-bgless.png";
import flask from "../assets/flask.png";
import javascript from "../assets/javascript.png";
import docker from "../assets/docker-bgless.png";
import pinia from "../assets/pinia.png";
import react from "../assets/react.png";
import sanity from "../assets/sanity.png";
import vercel from "../assets/vercel.png";
import nextjs from "../assets/nextjs.png";
import supabase from "../assets/supabase.png";
import tailwind from "../assets/tailwind.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: laceLink,
      title: "LaceLink",
      description: "Web platform linking local sneaker stores with sellers",
      techStack: [
        { name: "Next app router", icon: nextjs },
        { name: "Typescrypt & React", icon: react },
        { name: "Supabase (auth & DB)", icon: supabase },
      ],
      link: "https://lacelink.eu/",
    },
    {
      id: 2,
      src: allRead,
      title: "AllRead Frontend",
      description: "Dynamic frontend for AI-powered logistic software (6 months internship)",
      techStack: [
        { name: "Javascript & Vue.js", icon: vue },
        { name: "Docker", icon: docker },
        { name: "Pinia for state management", icon: pinia },
      ],
    },
    {
      id: 3,
      src: sthdpixs,
      title: "STHDPIXS",
      description: "Photography portfolio website (still in development)",
      techStack: [
        { name: "Typescrypt & React", icon: react },
        { name: "Sanity for CDN", icon: sanity },
        { name: "Vercel to deploy", icon: vercel },
      ],
      link: "https://sthdpixs.vercel.app/",
    },
    {
      id: 4,
      src: portfolio,
      title: "My portfolio",
      description: "Portfolio website to share my software engineering journey",
      techStack: [
        { name: "Javascript & React", icon: react },
        { name: "Vercel to deploy", icon: vercel },
        { name: "Tailwind CSS", icon: tailwind }
      ],
      link: "https://github.com/Giovanni-jpg/portfolio",
      portfolio: true,
    },
    {
      id: 5,
      src: cocktail,
      title: "Cocktail",
      description: "A Web App to manage enrollments courses for IMT Mines Albi teachers",
      techStack: [
        { name: "Python & Flask", icon: flask },
        { name: "Javascript Vanilla", icon: javascript },
        { name: "PostgreSQL & SQLAlchemy"},
      ]
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, description, techStack, link, portfolio }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-around items-center">
                <p className="p-2 text-xl font-bold">{title}</p>
                {link &&
                  <a href={link} target="_blank" rel="noreferrer" className="text-gray-500 underline hover:text-white duration-150">
                    {portfolio ? "See the repo" : "Visit me here"}
                  </a>
                  }
              </div>
              <p className="pl-2 text-gray-500">{description}</p>
              <div className="flex items-center justify-center">
                <div className="p-2 flex flex-col">
                  {techStack && techStack.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center m-1">
                      <span className="rounded mr-10 px-2 py-1 text-sm text-gray-500">
                        {item.name}
                      </span>
                      {item.icon && (
                        <img 
                          src={item.icon}
                          alt="tech icon"
                          className={
                            item.name === "Pinia for state management" ?
                            "h-8 w-6 mr-3 rounded-md hover:scale-110 duration-200":
                            "h-8 w-8 mr-2 rounded-md hover:scale-110 duration-200"
                          }/>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
