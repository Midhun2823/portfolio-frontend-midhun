import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  const [viewAll, setViewAll] = useState(false);

  const url = import.meta.env.VITE_PORTFOLIO_BACKEND_URL;
  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(`${url}/api/v1/project/getall`, {
        withCredentials: true,
      });
      setProjects(data.projects);
      console.log(data);
    };
    getMyProjects();
  }, []);

  return (
    <>
      <div>
        <h1 className="fw-bold fs-1 mb-3 text-decoration-underline">
          Projects
        </h1>
        <div className="row">
          {viewAll
            ? projects &&
              projects.map((ele) => {
                return (
                  <Link
                    to={`/project/${ele._id}`}
                    className="col-md-6"
                    key={ele._id}
                  >
                    <img
                      src={ele.projectBanner && ele.projectBanner.url}
                      alt="Project Banner"
                      className="p-5 rounded border"
                    />
                  </Link>
                );
              })
            : projects &&
              projects.slice(0, 1).map((ele) => {
                return (
                  <Link
                    to={`/project/${ele._id}`}
                    className="col-md-6"
                    key={ele._id}
                  >
                    <img
                      src={ele.projectBanner && ele.projectBanner.url}
                      alt="Project Banner"
                      className="p-5 rounded border"
                    />
                  </Link>
                );
              })}
        </div>
        {projects && projects.length > 1 && (
          <div className="text-center">
            <button
              className="btn btn-outline-danger mt-4 "
              onClick={() => setViewAll(!viewAll)}
            >
              {viewAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
        <hr className="text-danger my-4 " />
      </div>
    </>
  );
};

export default Portfolio;
