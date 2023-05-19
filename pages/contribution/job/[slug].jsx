import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../../components/layouts/Navbar";

import Footer from "../../../components/layouts/Footer";
import Button from "../../../components/buttons/Button";
import datas from "../../../pages/api/contribution.json";

const Job = ({ job, jobData }) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <section className="contribution__hero">
        <div className="back-btn">
          <p
            onClick={() => {
              router.back();
            }}
          >
            Back
          </p>
        </div>
        <div className="section__one">
          <div className="subsection__one">
            <h1>{job.title}</h1>
            <div className="content">
              <p className="section-text">{job.department}</p>
              <span className="dot"></span>
              <p className="section-text">{job.location}</p>
            </div>
          </div>
          <div className="subsection__two">
            <Button
              variant="primary"
              buttonText="Apply"
              handleClick={() => router.push("/contribution/apply")}
            />
          </div>
        </div>
        <div className="description">
          <h4>Job description</h4>
          <p>{job.description}</p>
        </div>
        <div className="responsibilities">
          <h4>Responsibilities</h4>
          <ul>
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contribution__current">
        <h3>Other opportunities</h3>

        {jobData.map((job, index) => (
          <div key={index} className="contribution__current-content">
            <div className="text">
              <h4>{job.title}</h4>
              <p>{job.department}</p>
            </div>
            <div className="content-button">
              <Button
                variant="outline"
                buttonText="View role"
                handleClick={() => router.push(job.url)}
              />
            </div>
          </div>
        ))}
        <div className="contribution__current-button">
          <Button
            variant="primary"
            buttonText="View all"
            handleClick={() => router.push("#")}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Job;

export async function getStaticPaths() {
  const paths = datas.jobs.map((job) => {
    return {
      params: {
        slug: job.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log(params.slug);
  try {
    const job = datas.jobs.find((job) => job.id === parseInt(params.slug));
    const jobData = datas.jobs.filter(
      (job) => job.id !== parseInt(params.slug)
    );
    return {
      props: {
        job,
        jobData,
        notFound: true,
      },
    };
  } catch (error) {
    return {
      props: {
        job: null,
        notFound: true,
      },
    };
  }
}
