import { useRouter } from "next/router";

import AwardCard from "../../components/awards/AwardCard"
import Button from "../../components/buttons/Button"
import HeadSeo from "../../components/HeadSeo"
import Navbar from "../../components/layouts/Navbar"
import siteMetadata from "../../lib/data/siteMetadata"
import Footer from "../../components/layouts/Footer";
import Link from "next/link"
import Image from "next/image"

import FreehandCard from "../../components/FreehandCard"
import awardData from "../api/award.json"
import VoteSuccess from "../../components/awards/VoteSuccess";

const Award = () => {
  const awardHomeData = awardData[1].home;
  console.log(awardHomeData)

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
            src='/assets/images/awardvector1.png' 
            />
            </div>
            <div className="award__header-vector2">
                <Image
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    src='/assets/images/awardvector2.png' 
                    />
                </div>
                <div className="award__header-vector3">
                <Image
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    src='/assets/images/awardvector3.png' 
                    />
                </div>
                <div className="award__header-vector4">
                <Image
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    src='/assets/images/awardvector4.png' 
                    />
                </div>
        <div className="contain d-flex flex-column justify-center align-center center">
            
              <h1
                className="" dangerouslySetInnerHTML={{
                  __html: awardHomeData.title,
                }} />
              <p>{awardHomeData.content}</p>

              <div className=" d-flex button__section">
                <Button
                className="award__btn"
                  variant={"primary"}
                  buttonText={awardHomeData.btn1}
                  handleClick={() => {}}
                />
                <Button
                  variant={"outline"}
                  buttonText={awardHomeData.btn2}
                  handleClick={() => {}}
                />
              </div>
            </div>


        </div>
        <div className="award__paragraph">
            <p>{awardHomeData.paragraph}</p>
        </div>
        <div className="award__nominees">
            <h3>{awardHomeData.nomineesHeader}</h3>
            <div className="d-flex award__cards-container">
                {awardHomeData.nominees?.map((nominee, index) => {
                  return (
                <Link href={`/awards/myname`} >
                <a className="nominee__flex">
                    <div key={index}  >
                      <AwardCard name={nominee.name} imageUrl={nominee.img} username={nominee.userName} subtext={nominee.subtext} />
                    </div>
                </a>

                

                </Link>
                  );
                })}

               
               

            </div>
        </div>

      <FreehandCard />

        </div>
      
      </main>
      <Footer />
    </>
  )
}

// export async function getStaticProps() {
//   return {
//     props: {
//       awardHomeData: awardData[1].home,
//     },
//   };
// }


export default Award