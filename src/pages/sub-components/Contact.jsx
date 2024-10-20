import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const url = import.meta.env.VITE_PORTFOLIO_BACKEND_URL;

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(
        `${url}/api/v1/message/send`,
        { senderName, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setSenderName("");
        setSubject("");
        setMessage("");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container-fluid">
        {" "}
        <h1 className="fw-bold fs-1 mb-3 text-decoration-underline">
          CONTACT ME
        </h1>
        <form onSubmit={handleSendMessage}>
          <div className="mb-4">
            <label>Your Name</label>
            <input
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Your Name"
              className="form-control"
            />
          </div>
          <div className="mb-4">
            <label>Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="form-control"
            />
          </div>
          <div className="mb-4">
            <label>Message</label>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message......"
              className="form-control"
            />
          </div>
          <div className="text-center mb-3">
            {!loading ? (
              <button className="btn btn-outline-danger" type="submit">
                SEND MESSAGE
              </button>
            ) : (
              <div>
                <span>Logging In</span>
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Sending......</span>
                </div>
              </div>
            )}
          </div>
        </form>
        <hr className="text-danger my-4 " />
      </div>
    </>
  );
};
export default Contact;
