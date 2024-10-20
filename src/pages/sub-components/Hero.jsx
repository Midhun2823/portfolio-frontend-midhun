import axios from "axios";
import {
  BookUser,
  Building2,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [user, setUser] = useState({});

  var aboutMeInListFormat;
  try {
    aboutMeInListFormat = user.aboutMe.split(". ");
  } catch (error) {
    aboutMeInListFormat = user.aboutMe;
  }
  const url = import.meta.env.VITE_PORTFOLIO_BACKEND_URL;
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(`${url}/api/v1/user/me/portfolio`, {
        withCredentials: true,
      });
      setUser(data.user);
    };
    getMyProfile();
  }, []);

  return (
    <>
      <div className="container">
        <div>
          {" "}
          <span className="green-dot m-1"></span>
          <span>Online</span>
        </div>
        <p className="lead fs-2">Hello, I am {user.fullName}</p>
        <h1 className="display-6 text-tubelight-effect ">
          <Typewriter
            words={[
              "JAVA",
              "MERN STACK DEVELOPER",
              "DATA STRUCTURES AND ALGORITHMS",
            ]}
            loop={60}
            cursor
            typeSpeed={60}
            deleteSpeed={60}
            delaySpeed={102}
          />
        </h1>
        <div className="my-2 flex gap-4 border border-danger w-fit rounded-[24px] p-2">
          <Link to={"/"} target="_blank">
            <BookUser className="text-pink-500 w-6 h-6" />
          </Link>
          <Link to={user.linkedInURL} target="_blank">
            <Linkedin className="text-blue-500 w-6 h-6" />
          </Link>
          <Link to={user.githubURL} target="_blank">
            <Github className="text-black-500 w-6 h-6" />
          </Link>
          <Link to={"https://linktr.ee/ssh2024"} target="_blank">
            <Building2 className="text-yellow-500 w-6 h-6" />
          </Link>
          <Link to={user.instagramURL} target="_blank">
            <Instagram className="text-pink-500 w-6 h-6" />
          </Link>
        </div>

        <div className="mb-3">
          <Link to={user.resume && user.resume.url} target="_blank">
            {" "}
            <button className="btn btn-outline-light flex">
              <span>
                <ExternalLink />
              </span>
              <span>Resume</span>
            </button>
          </Link>
        </div>
        <div>
          {user.aboutMe ? (
            <ul type="circle">
              {aboutMeInListFormat.map((item, index) => {
                return (
                  <li className="text-light text-opacity-50" key={index}>
                    {item}
                  </li>
                );
              })}{" "}
            </ul>
          ) : (
            <p>{user.aboutMe}</p>
          )}
        </div>
        <hr className="text-danger my-4 " />
      </div>
    </>
  );
};

export default Hero;
