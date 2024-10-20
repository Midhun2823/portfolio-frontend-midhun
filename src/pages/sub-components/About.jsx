import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
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
      <div className="my-5">
        <div className="">
          <h1 className="fw-bold items-center w-fit fs-1 mb-3 text-decoration-underline text-tubeLight-effect ">
            Aboutme
          </h1>
        </div>
        <div className="row">
          <div className="col-md-4 text-center ">
            <div className="border border-info border-2 rounded m-5">
              <img
                src={user.avatar && user.avatar.url}
                alt={user.fullName}
                // width="100%"
                className="border border-4 border-danger rounded h-100 w-100"
              />
            </div>
          </div>
          <div className="col-md-8 p-5 justify-center">
            <p className="lead">{user.fullName}</p>
            <br />
            <p className="lead">
              I am final year Bachelor of Technology student with a passion for
              technology and innovation
            </p>
            <br />
            <p className="lead">
              {" "}
              I am always eager to learn new technologies and work on innovative
              projects that can make a meaningful impact on both businesses and
              society.
            </p>
          </div>
          <p className="lead mx-2">
            My career goal is to grow professionally by developing a strong
            network and collaborating with top professionals in the tech
            industry.
          </p>
        </div>
        <hr className="text-danger my-4 " />
      </div>
    </>
  );
};

export default About;
