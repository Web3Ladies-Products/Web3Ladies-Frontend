import React from "react";

const FAQ_DATA = [
  {
    id: 1,
    question: "is Mentorship free",
    answer:
      "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
  },
  {
    id: 2,
    question: "is Mentorship free",
    answer:
      "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
  },
  {
    id: 3,
    question: "is Mentorship free",
    answer:
      "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
  },
  {
    id: 4,
    question: "is Mentorship free",
    answer:
      "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
  },
  {
    id: 5,
    question: "is Mentorship free",
    answer:
      "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
  },
  {
    id: 6,
    question: "is Mentorship free",
    answer:
      "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
  },
  {
    id: 7,
    question: "is Mentorship free",
    answer:
      "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
  },
];
const FaqBox = ({ id, question, answer }) => {
  console.log(id, "here id");
  const [showAnswer, setShowAnswer] = React.useState(false);
  return (
    <div key={id} className="faq-box">
      <div className="faq-content">
        <h2>{question} jk</h2>
        {showAnswer && <p>{answer}</p>}
      </div>
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="faq-close-icon"
      >
        <span> {showAnswer ? <> &#xd7;</> : <>&#x2b;</>}</span>
      </div>
    </div>
  );
};

const MentorshipFAQ = () => {
  return (
    <div className="mentorship-faq-section">
      <div className="container">
        <h1> Frequently Asked Questions </h1>
        <div>
          {FAQ_DATA.map((data) => (
            <FaqBox {...data} />
          ))}
          {/* &#xd7; */}
        </div>
      </div>
    </div>
  );
};

export default MentorshipFAQ;
