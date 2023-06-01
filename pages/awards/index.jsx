import { useRouter } from "next/router";

import AwardCard from "../../components/awards/AwardCard";
import Button from "../../components/buttons/Button";
import HeadSeo from "../../components/HeadSeo";
import Navbar from "../../components/layouts/Navbar";
import siteMetadata from "../../lib/data/siteMetadata";
import Footer from "../../components/layouts/Footer";
import Link from "next/link";
import Image from "next/image";
import { strapiService } from "../../services";

import FreehandCard from "../../components/FreehandCard";
import VoteSuccess from "../../components/awards/VoteSuccess";

const Award = ({ indexPage, freeHandData }) => {
  const router = useRouter();
  return (
    <>
      <HeadSeo
        title={`${siteMetadata.companyName} | Award`}
        description={siteMetadata.description}
        canonicalUrl={`${siteMetadata.siteUrl}`}
        ogImageUrl={`${siteMetadata.siteUrl}/assets/images/logo.jpg`}
        ogTwitterImage={`${siteMetadata.siteUrl}/assets/images/logo.jpg`}
        ogType={"website"}
      ></HeadSeo>

      <Navbar />
      <main className="">
        <div className="container">
          <div className="award__header">
            <div className="award__header-vector1">
              <Image
                width="100%"
                height="100%"
                objectFit="contain"
                src="/assets/images/awardvector1.png"
              />
            </div>
            <div className="award__header-vector2">
              <Image
                width="100%"
                height="100%"
                objectFit="contain"
                src="/assets/images/awardvector2.png"
              />
            </div>
            <div className="award__header-vector3">
              <Image
                width="100%"
                height="100%"
                objectFit="contain"
                src="/assets/images/awardvector3.png"
              />
            </div>
            <div className="award__header-vector4">
              <Image
                width="100%"
                height="100%"
                objectFit="contain"
                src="/assets/images/awardvector4.png"
              />
            </div>
            <div className="contain d-flex flex-column justify-center align-center center">
              <h1
                className=""
                dangerouslySetInnerHTML={{
                  __html: indexPage.title,
                }}
              />
              <p>{indexPage.hero_subtitle}</p>

              <div className=" d-flex button__section">
                <Button
                  className="award__btn"
                  variant={"primary"}
                  buttonText={indexPage.hero_btn1}
                  handleClick={() => {
                    router.push("#");
                  }}
                />
                <Button
                  variant={"outline"}
                  buttonText={indexPage.hero_btn2}
                  handleClick={() => {
                    router.push("/awards/#nominees");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="award__paragraph">
            <p>{indexPage.hero_content}</p>
          </div>
          <div id="nominees" className="award__nominees">
            <h3>{indexPage.subtitle}</h3>
            <div className="d-flex award__cards-container">
              {indexPage?.nominees?.map((nominee, index) => {
                return (
                  <Link href={`/awards/${nominee.key}`}>
                    <a className="nominee__flex">
                      <div key={nominee.key}>
                        <AwardCard
                          name={nominee.name}
                          imageUrl={nominee.img}
                          username={nominee.userName}
                          jobTitle={nominee.jobTitle}
                        />
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>

          <FreehandCard freeHandData={freeHandData} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const indexPage = await strapiService.getAwardData();
  const freeHandData = await strapiService.getFreeHand();
  return {
    props: {
      indexPage: indexPage.data.attributes,
      freeHandData: freeHandData.data.attributes,
    },
  };
}

export default Award;
