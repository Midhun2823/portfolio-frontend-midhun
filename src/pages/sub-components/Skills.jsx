import axios from "axios";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
    const url = import.meta.env.VITE_PORTFOLIO_BACKEND_URL;
  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        `${url}/api/v1/skill/getall`,
        { withCredentials: true }
      );
      setSkills(data.skills);
      console.log(data);
    };
    getMySkills();
  }, []);

  return (
    <>
      <div>
        <h1 className="fw-bold fs-1 mb-3 text-decoration-underline">Skills</h1>
        <div className="row">
          {skills &&
            skills.map((ele) => {
              return (
                <div key={ele._id} class="col-md-2 ">
                  <div className="border rounded p-2 text-center m-3">
                    <img
                      src={ele.svg && ele.svg.url}
                      alt={ele.title}
                      width="100%"
                      height="100%"
                      className="p-3 rounded"
                    />
                    <div class="card-body ">
                      <p className="fs-4 fw-bold text-center">{ele.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <hr className="text-danger my-4 " />
      </div>
    </>
  );
};

export default Skills;
