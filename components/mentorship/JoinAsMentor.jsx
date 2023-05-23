import Button from "../buttons/Button";
import { useRouter } from "next/router";

const JoinAsMentor = ({ joinData }) => {
  const router = useRouter();

  return (
    <div className="join-as-mentor-section">
      {joinData && (
        <div>
          <div>
            <div className="">
              <h1>{joinData.title_1}</h1>
              <p>{joinData.subtitle_1}</p>
              <Button
                handleClick={() => {
                  router.push(joinData.btn_link_1);
                }}
                variant="outlined-clear"
                buttonText={joinData.btn_text_1}
              />
            </div>
            <div className="">
              <h1>{joinData.title_2}</h1>
              <p>{joinData.subtitle_2}</p>
              <Button
                handleClick={() => {
                  router.push(joinData.btn_link_2);
                }}
                variant="outlined-clear"
                buttonText={joinData.btn_text_2}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinAsMentor;
