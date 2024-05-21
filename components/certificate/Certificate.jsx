import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cert = ({ indexPage }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const student = indexPage.certificates.find(
      (student) => student.name.toLowerCase() === name.toLowerCase()
    );
    if (student) {
      toast(
        `Congratulations ${student.name}! You have successfully completed the ${student.course} course`,
        { delay: 6000 }
      );
      window.open(indexPage.link.redirectCretificateUrl, "_blank");
    } else {
      toast(
        `Sorry ${name}, your name is not on the list. Please contact your mentor for more information.`,
        { delay: 6000 }
      );
    }
  };

  return (
    <section className="hero-section ">
      <div className="hero-section__description certificate__section">
        <h1>{indexPage.title}</h1>
        <p>{indexPage.description}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          <button type="submit">{indexPage.link.buttonText}</button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Cert;
