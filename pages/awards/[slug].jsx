import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link"
import Button from '../../components/buttons/Button'
import HeadSeo from "../../components/HeadSeo"
import ArrowLeft from '../../components/icons/ArrowLeft'
import Footer from '../../components/layouts/Footer'
import Navbar from "../../components/layouts/Navbar"
import BaseInput from '../../components/UI/BaseInput'
import siteMetadata from "../../lib/data/siteMetadata"
import awardData from "../api/award.json";

const Slug = ({
  showLoader,
  submitDonation,
  handleFormInputChange,
  formData,
  errors,
  ...props
}) => {
  const { query } = useRouter();
  const { awardSlug } = query;
  const award = awardData.find((award) => award.slug === awardSlug);


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
          <p>{award.hero.title}</p>
        </div>

        <div className='award__hero-img'>
          <img src={award.hero.image} alt="img" />
        </div>

        <div className='award__hero-title'>
          <p className='title'>{award.hero.name}</p>
          <div className='location'>
            <p>{award.hero.company}</p>
            <p>{award.hero.country}</p>
          </div>
        </div>

        <div className='award__about'>
          <p className='title-about'>{award.about.aboutName}</p>
          <p className='title-content' 
             dangerouslySetInnerHTML={{
              __html: award.about.description,
            }}
          />
        </div>

        <div className='award__form'>
          <p className='form-title'>Vote for {award.hero.name}</p>

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
            <p>{award.gender.title}</p>
            <div className='radio__input'>
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">{award.gender.t1}</label>

              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">{award.gender.t2}</label>

              <input type="radio" name="gender" id="preferNotTOSay" value="preferNotToSay" />
              <label for="preferNotTOSay">{award.gender.t3}</label> 
            </div>
          </div>

          <div className='award__btn'>
            <Button  
              buttonText={showLoader ? "Voting..." : `${award.button}`}
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
