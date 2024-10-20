import axios from "axios";
import React, { useEffect, useState } from "react";

const MyApps = () => {
  const [apps, setApps] = useState([]);

  const url = import.meta.env.VITE_PORTFOLIO_BACKEND_URL;

  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        `${url}/api/v1/softwareapplication/getall`,
        { withCredentials: true }
      );
      setApps(data.softwareApplications);
      console.log(data);
    };
    getMyApps();
  }, []);

  return (
    <>
      <div>
        <h1 className="fw-bold fs-1 mb-3 text-decoration-underline">
          My Applications
        </h1>
        <div className="row">
          {apps &&
            apps.map((ele) => {
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
                      <p className="fs-4 fw-bold text-center">{ele.name}</p>
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

export default MyApps;
