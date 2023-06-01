import React, { useEffect } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const CohortSummary = ({ cohortSummaryData, menteesDetails }) => {
  const [menteeVideo, setMenteeVideo] = React.useState([]);
  useEffect(() => {
    setMenteeVideo(
      menteesDetails.map((mentee, index) => {
        return {
          id: index,
          name: mentee.name,
          url: mentee.url,
          title: mentee.title,
          playVideo: false,
          ref: React.createRef(),
        };
      })
    );
  }, [menteesDetails]);
  const vidRef = React.useRef();

  const handlePlayVideo = (id) => {
    setMenteeVideo((prev) => {
      return prev.map((video) => {
        return id === video.id
          ? {
              ...video,
              playVideo: !video.playVideo,
            }
          : {
              ...video,
            };
      });
    });
  };
  return (
    <div className="cohort-summary">
      <div className="">
        <div className="summary-title">
          <h1>{cohortSummaryData.title}</h1>
        </div>
        <div className="summary-content">
          <div className="summary-content-text">
            <p>{cohortSummaryData.description}</p>
          </div>
          <div className="metrics">
            <h1 className="metrics-heading">Metrics</h1>
            <ul className="metrics-container">
              {cohortSummaryData.metrics.map((metric, index) => (
                <li key={index}>
                  <h3>{metric.count}</h3>
                  <span className="metrics-text">{metric.section}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {menteesDetails && menteeVideo && (
          <ul className="mentee-experience--list">
            {menteeVideo.map((mentee, index) => {
              return (
                <li className="mentee-experience--list-item" key={index}>
                  <div className="summary-mentee-image">
                    <div className="app__video">
                      <video
                        ref={mentee.ref}
                        src={mentee.url}
                        type="video/mp4"
                        loop
                        controls
                      />
                      <div className="app__video-overlay">
                        <div
                          className="app__video-overlay_circle "
                          onClick={() => {
                            handlePlayVideo(index);
                            if (mentee.playVideo) {
                              mentee.ref.current.pause();
                            } else {
                              mentee.ref.current.play();
                            }
                          }}
                        >
                          {mentee.playVideo ? (
                            <BsPauseFill color="#fff" fontSize={30} />
                          ) : (
                            <BsFillPlayFill color="#fff" fontSize={30} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mentee-content">
                    <h2 className="sub-section-title bold">{mentee.name}</h2>
                    <p className="section-description">{mentee.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CohortSummary;
