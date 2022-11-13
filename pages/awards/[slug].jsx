import React from 'react'
import Button from '../../components/buttons/Button'
import HeadSeo from "../../components/HeadSeo"
import ArrowLeft from '../../components/icons/ArrowLeft'
import Footer from '../../components/layouts/Footer'
import Navbar from "../../components/layouts/Navbar"
import BaseInput from '../../components/UI/BaseInput'
import siteMetadata from "../../lib/data/siteMetadata"


const Slug = ({
  showLoader,
  submitDonation,
  handleFormInputChange,
  formData,
  errors,
  ...props
}) => {
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
      <div className="award__nominee">
        <div className='award__nav'>
          <ArrowLeft  width={15} height={12} color={"black"} />{" "}
          <span>Back</span>
        </div>

        <div className='award__hero-title'>
          <p>Top 10 Female Trailblazers in Web3 Nominee</p>
        </div>

        <div className='award__hero-img'>
          <img src='/assets/images/Frame.png' />
        </div>

        <div className='award__hero-title'>
          <p className='title'>Janet Simpson</p>
          <div className='location'>
            <p>Chief Technical Officer. Lazerpay</p>
            <p>Country of origin: Nigeria </p>
          </div>
        </div>

        <div className='award__about'>
          <p className='title-about'>About Janet</p>
          <p className='title-content'>You need to find out more about the company you want to work with to know if it’s a great fit for you. You can reach out to some of the staff who work there to find out about the work culture, how the staff feels about the company, and whether it aligns with your career goals.
            <br />
            <br />
            You need to also research the problems they currently face and how you can proffer solutions to them. You can find the right answers to your inquiries by starting with the company’s website. You’ll discover the company’s vision, values, work culture, and the kind of product/service they offer.
            <br />
            <br />
            Next, you need to check out all the company's social media pages to know how they want their consumers to see them. Follow these pages to get fresh updates about them before your interview. Also, find out who their competitors are and what makes the company stand out from them.
          </p>
        </div>

        <div className='award__form'>
          <p className='form-title'>Vote for Janet Simpson</p>

          <form onSubmit={submitDonation} {...props} className="form-input">
          <div className="input full-100">
            <BaseInput
              placeholder="Johanna Doe"
              label="Full name"
              name="full_name"
              // value={formData.full_name}
              onChange={handleFormInputChange}
              // errors={[errors.full_name]}
              autoFocus={true}
              required={true}
            />
          </div>
          <br />
          <div className="input mt-10 full-100">
            <BaseInput
              placeholder="example@web3ladies.com"
              label="Company’s email"
              name="company_email"
              // value={formData.company_email}
              onChange={handleFormInputChange}
              // errors={[errors.company_email]}
              required={true}
            />
          </div>

          {/* checkbox input */}
          <div className='award__radio '>
            <p>Gender</p>
            <div className='radio__input'>
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>

              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>

              <input type="radio" name="gender" id="preferNotTOSay" value="preferNotToSay" />
              <label for="preferNotTOSay">Prefer not to say</label> 
            </div>
          </div>

          <div className='award__btn'>
            <Button  
              buttonText={showLoader ? "Voting..." : "Vote for Janet"}
              variant={"primary"}
              disabled={showLoader}
              type="submit">
            </Button>
          </div>
        </form>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Slug
