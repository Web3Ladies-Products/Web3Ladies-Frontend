import AwardCard from "../../components/awards/AwardCard"
import Button from "../../components/buttons/Button"
import HeadSeo from "../../components/HeadSeo"
import Navbar from "../../components/layouts/Navbar"
import siteMetadata from "../../lib/data/siteMetadata"
import Footer from "../../components/layouts/Footer";
const Award = () => {
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

        <div className="award__header  ">
        <div className="contain d-flex flex-column justify-center align-center center">
              <h1
                className="">Top 10 Female Trailblazers in <span>Web3</span></h1>
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
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               
                <AwardCard name="Janet Simpson" imageUrl="/assets/images/awardframe.png" username="Lazerpay" subtext="CTO" />
               

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