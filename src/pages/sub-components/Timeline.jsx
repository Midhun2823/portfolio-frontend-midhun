import axios from "axios";
import React, { useEffect, useState } from "react";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const url = import.meta.env.VITE_PORTFOLIO_BACKEND_URL;
  useEffect(() => {
    const getMyTimeline = async () => {
      const { data } = await axios.get(
        `${url}/api/v1/timeline/getall`,
        { withCredentials: true }
      );
      setTimeline(data.timelines);
      console.log(data);
    };
    getMyTimeline();
  }, []);

  return (
    <>
      <div className="my-5">
        <h1 className="fw-bold fs-1 mb-3 text-decoration-underline">
          Timeline
        </h1>
        <ol class="relative border-s border-gray-200 dark:border-gray-700 ms-4">
          {timeline &&
            timeline.map((ele) => {
              return (
                <li class="mb-10 ms-6" key={ele._id}>
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {ele.title}
                  </h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {ele.timeline.from} -{" "}
                    {ele.timeline.to ? ele.timeline.to : "Present"}
                  </time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    {ele.description}
                  </p>
                </li>
              );
            })}
        </ol>
        <hr className="text-danger my-4 " />
      </div>
    </>
  );
};

export default Timeline;
