import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/layouts/Navbar";

import Footer from "../../../components/layouts/Footer";
import Button from "../../../components/buttons/Button";
import { strapiService } from "../../../services";
import AppLoader from "../../../components/UI/AppLoader";

const Job = ({ contributionPage }) => {
  const router = useRouter();
  const [job, setJob] = useState({});
  const [jobData, setJobData] = useState(contributionPage?.jobs);
  useEffect(() => {
    let slug = router.query.slug;
    const fetchJob = async () => {
      try {
        const exactJob = contributionPage.jobs.find(
          (job) => job.id.toString() == slug
        );
        const jobDatas = contributionPage.jobs.filter(
          (jb) => jb.id !== parseInt(slug)
        );
        setJobData(jobDatas);
        setJob(exactJob);
      } catch (err) {
        console.log(err);
      }
    };
    fetchJob();
  }, []);
  return (
    <>
      <Navbar />
      {job && jobData ? (
        <>
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
                  handleClick={() =>
                    router.push(`/contribution/apply/${job.id}`)
                  }
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
                {job.responsibilities?.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="contribution__current">
            <h3>Other opportunities</h3>

            {jobData?.map((job, index) => (
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
                buttonText={contributionPage?.btn_text_two}
                handleClick={() => router.push(contributionPage?.btn_link_two)}
              />
            </div>
          </section>
        </>
      ) : (
        <AppLoader />
      )}
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const contributionData = await strapiService.getContrubutionPage();
  const paths = contributionData.data.attributes.jobs.map((job) => {
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

export default Job;

export async function getStaticProps() {
  const contributionPage = await strapiService.getContrubutionPage();

  return {
    props: {
      contributionPage: contributionPage.data.attributes,
    },
  };
}
