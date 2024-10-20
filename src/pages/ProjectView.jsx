import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProjectView = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectBanner, setProjectBanner] = useState("");
  const [gitRepoLink, setGitRepoLink] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [stack, setStack] = useState("");
  const [deployed, setDeployed] = useState("");

  const { id } = useParams();
  const url = import.meta.env.VITE_PORTFOLIO_BACKEND_URL;
  // console.log("A" + url);
  // console.log("M" + import.meta.env.VITE_PORTFOLIO_BACKEND_URL);
  useEffect(() => {
    const getProject = async () => {
      await axios
        .get(`${url}/api/v1/project/get/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setTitle(res.data.project.title),
            setDescription(res.data.project.description),
            setProjectBanner(
              res.data.project.projectBanner &&
                res.data.project.projectBanner.url
            ),
            setGitRepoLink(res.data.project.gitRepoLink),
            setProjectLink(res.data.project.projectLink),
            setTechnologies(res.data.project.technologies),
            setStack(res.data.project.stack),
            setDeployed(res.data.project.deployed);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    };

    getProject();
  }, [id]);

  const descriptionInListFormat = description.split(". ");
  const technologiesInListFormat = technologies.split(", ");

  return (
    <>
      {" "}
      <div className="container row mt-4">
        <div className="col-md-2"></div>{" "}
        <div className="col-md-8 ">
          <div>
            {" "}
            <div className="mb-3">
              <span className="display-6 ">PROJECT VIEW</span>
              <Link to={"/"} className="float-end btn btn-outline-light mt-2">
                Return to Portfolio
              </Link>
            </div>
            <div className="mb-3">
              <h1>{title}</h1>
              <hr class="text-danger my-3" />
              <img
                src={projectBanner ? projectBanner : "/PhotoIcon.png"}
                alt={title}
                width="100%"
                height={400}
                className=""
              />
            </div>
            <hr class="text-danger my-3" />
            <div className="mb-3">
              <label>Decription:</label>
              <ul type="circle">
                {descriptionInListFormat.map((item, index) => {
                  return (
                    <li className="lead" key={index}>
                      {"->"} {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <hr class="text-danger my-3" />
            <div className="mb-3">
              <label>Technologies:</label>
              <ul type="circle">
                {technologiesInListFormat.map((item, index) => {
                  return (
                    <li className="lead " key={index}>
                      {"->"} {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <hr class="text-danger my-3" />
            <div className="mb-3">
              <label>Stack:</label>
              <p className="lead">{stack}</p>
            </div>
            <hr class="text-danger my-3" />
            <div className="mb-3">
              <label>Deployed:</label>
              <p className="lead">{deployed}</p>
            </div>
            <hr class="text-danger my-3" />
            <div className="mb-3">
              <label>Github Repository Link:</label>
              <div className="text-primary text-decoration-underline">
                {" "}
                <Link to={gitRepoLink} target="_blank">
                  {gitRepoLink}
                </Link>
              </div>
            </div>
            <hr class="text-danger my-3" />
            <div className="mb-3">
              <label>Project Link:</label>
              <div className="text-primary text-decoration-underline">
                {" "}
                <Link to={projectLink ? projectLink : "/"} target="_blank">
                  {projectLink ? projectLink : "Still Not Deployed"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
