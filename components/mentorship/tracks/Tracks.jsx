import React from "react";
import TrackCard from "./TrackCard";

const Tracks = () => {
  return (
    <div className="mentorship-tracks-section">
      <div className="container">
        <h1> Tracks</h1>
        <div className="track-card-wrap">
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
        </div>
      </div>
    </div>
  );
};

export default Tracks;
