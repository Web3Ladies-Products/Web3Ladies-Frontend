import React from 'react'
import Image from 'next/image'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import { useForm } from 'react-hook-form'
import Button from '../components/buttons/Button'

const waitlistForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="waitlist-images">
            <div className="vector2">
              <Image
                width={'100%'}
                height={'100%'}
                objectFit="contain"
                src="/assets/images/purple-pyramid.png"
                alt="pyramid-image"
              />
            </div>

            <div className="registration">
              <div className="registration-content">
                <h2>Registration is currently closed</h2>
                <p>Kindly join our waitlist</p>

                <div className="forms-container">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <label htmlFor="email">First Name</label>
                      <input type="text" {...register('firstname')} />
                    </div>

                    <div>
                      <label htmlFor="email">Email*</label>
                      <input type="email" {...register('email')} />
                    </div>
                  </form>

                  <Button
                    type={'primary'}
                    buttonText={'submit'}
                    handleClick={() => null}
                  />
                </div>
              </div>
            </div>

            <div className="vector2">
              <Image
                width={'100%'}
                height={'100%'}
                objectFit="contain"
                src="/assets/images/white-pyramid.png"
                alt="pyramid-image"
              />
            </div>
          </div>

          <div className="cylindrical-images2">
            <div className="">
              <Image
                className=""
                width={'75px'}
                height={'93px'}
                src="/assets/images/purple-cylindrical.png"
                alt="purple-cylindrical-image"
              />

              <Image
                className=""
                width={'75px'}
                height={'93px'}
                src="/assets/images/cylindrical.png"
                alt="cylindrical-image"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default waitlistForm
