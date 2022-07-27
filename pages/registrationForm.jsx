import React from 'react'
import Image from 'next/image'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'

const success = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="registration-form-container">
          <h1>Register</h1>

          <div className="vector">
            <Image
              src={'/assets/images/web3ladies-vector.png'}
              alt="Web3ladies-vector"
              width={'100%'}
              height={'100%'}
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default success
