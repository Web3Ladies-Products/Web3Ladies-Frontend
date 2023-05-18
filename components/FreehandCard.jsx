import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./buttons/Button";
import { useRouter } from "next/router";
import { strapiService } from "../services";
const FreehandCard = () => {
  const router = useRouter();
  const [freeHandData, setFreeHandData] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const indexPage = await strapiService.getFreeHand();
        setFreeHandData(indexPage.data.attributes);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="freehand__frame center d-flex justify-content-center align-items-center">
      <div className="freehand__vector1">
        <Image
          width="100%"
          height="100%"
          objectFit="contain"
          src="/assets/images/freehandvector1.png"
        />
      </div>
      <div className="freehand__vector2">
        <Image
          width="71px"
          height="72px"
          objectFit="contain"
          src="/assets/images/freehandvector2.png"
        />
      </div>
      <div className="freehand__content">
        <h2
          dangerouslySetInnerHTML={{
            __html: freeHandData?.title,
          }}
        />

        <p>{freeHandData?.subtext}</p>
        <div className="freehand__joinvector-section">
          <div className="freehand__joinvector">
            <Image
              width="120px"
              height="47px"
              objectFit="contain"
              src="/assets/images/freehandjoinvector.png"
            />
          </div>
          <Button
            className="freehand__btn"
            variant={"primary"}
            buttonText={freeHandData?.btntext}
            handleClick={() => {
              router.push(freeHandData?.btnlink);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FreehandCard;
