import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";
import { useRouter } from "next/router";
import { strapiService } from "../../services";
const JoinAsMentor = () => {
  const router = useRouter();
  const [joinData, setJoinData] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const indexPage = await strapiService.getJoinAsMentor();

        setJoinData(indexPage.data.attributes);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

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
