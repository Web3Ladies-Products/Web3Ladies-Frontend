import { useRouter } from "next/router";

import AwardCard from "../../components/awards/AwardCard"
import Button from "../../components/buttons/Button"
import HeadSeo from "../../components/HeadSeo"
import Navbar from "../../components/layouts/Navbar"
import siteMetadata from "../../lib/data/siteMetadata"
import Footer from "../../components/layouts/Footer";
import Link from "next/link"
import Image from "next/image"
import awardData from "../api/award.json"

const Award = () => {
  const { query } = useRouter();
  const { award } = query;
  const nominee = awardData.find((nominee) => nominee.slug === award);

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
            // src={award.header.img1}
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
                className="">{nominee.header.title}<span>Web3</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <div className=" d-flex button__section">
                <Button
                className="award__btn"
                  variant={"primary"}
                  buttonText="Vote now"
                  handleClick={() => {}}
                />
                <Button
                  variant={"outline"}
                  buttonText="See nominee"
                  handleClick={() => {}}
                />
              </div>
            </div>


        </div>
        <div className="award__paragraph">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin pretium adipiscing sed est ipsum in consequat. Eu in cursus imperdiet vestibulum. Proin tristique velit faucibus at aliquet amet diam. Lobortis purus tortor justo, accumsan, lorem amet, odio facilisi. Odio ut adipiscing volutpat magnis in congue cursus. Lectus ultricies sollicitudin eu proin netus amet. Odio id sed viverra in. Porttitor magna sit amet, purus lorem. Vitae quam scelerisque vitae at amet, lobortis pellentesque.
</p>
        </div>
        <div className="award__nominees">
            <h3>Nominees</h3>
            <div className="d-flex award__cards-container">
                <Link href={`/awards/myname`} >
                <a>

                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />

                </a>

                

                </Link>
               
               

            </div>
        </div>

       <div className="award__frame-color">

       </div>

        </div>
       
      </main>
      <Footer />
    </>
  )
}

export default Award