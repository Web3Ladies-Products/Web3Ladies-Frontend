import React from 'react'
import Hero from '../components/HeroSection'
import ExtraInfo from '../components/ExtraInfoSection'
import Benefits from '../components/BenefitsSection'
import Curriculum from "../components/Curriculum"
import Navbar from '../components/layouts/Navbar'
// import OngroundMentors from '../components/OngroundMentors'
// import WorkshopMentors from '../components/WorkshopMentors'
import Gains from '../components/Gains'

const Blockchain = () => {
  return (
   <div>
    <Navbar/>
     <Hero/>
     <ExtraInfo/>
     <Benefits/>
     <Curriculum/>
      <Gains />
     {/* <OngroundMentors/>
     <WorkshopMentors/> */}

   </div>
   
  )
}

export default Blockchain
