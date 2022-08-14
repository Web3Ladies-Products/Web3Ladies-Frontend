import React from "react";

const FEEDBACK_DATA = [
  {
    id: 1,
    feedbackType: "Shoutout",
    data: [
      {
        id: 1,
        name: "student",
        imageURL: "..//..//",
        role: "Web3 Designer",
        feedback:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      },
      {
        id: 2,
        name: "student",
        imageURL: "..//..//",
        role: "Web3 Designer",
        feedback:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      },
      {
        id: 3,
        name: "student",
        imageURL: "..//..//",
        role: "Web3 Designer",
        feedback:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      },
    ],
  },
  {
    id: 2,
    feedbackType: "Community",
    data: [
      {
        id: 1,
        name: "student",
        imageURL: "..//..//",
        role: "Web3 Designer",
        feedback:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      },
      {
        id: 2,
        name: "student",
        imageURL: "..//..//",
        role: "Web3 Designer",
        feedback:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      },
      {
        id: 3,
        name: "student",
        imageURL: "..//..//",
        role: "Web3 Designer",
        feedback:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      },
    ],
  },
  {
    id: 3,
    feedbackType: "Past Mentees",
    data: [
      {
        id: 1,
        name: "student",
        imageURL: "..//..//",
        role: "Web3 Designer",
        feedback:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      },
      {
        id: 2,
        name: "student",
        imageURL: "..//..//",
        role: "Web3 Designer",
        feedback:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      },
      {
        id: 3,
        name: "student",
        imageURL: "..//..//",
        role: "Web3 Designer",
        feedback:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      },
    ],
  },
];

const Feedback = () => {
  return (
    <div className="mentorship-feedback-section">
      <h1>Don’t take our word for it</h1>
      <p>
        <span>
          See what people have to say about their experience with Web3Ladies
        </span>
      </p>

      <div className="feedback-content-wrap">
        <div className="sidebar">
          {FEEDBACK_DATA.map((data) => (
            <div>{data.feedbackType}</div>
          ))}
        </div>
        <div className="feedback-content"></div>
      </div>
    </div>
  );
};

export default Feedback;
