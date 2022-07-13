import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from "/components/buttons/Button"

const Footer = () => {

  const FOOTER_NAVIGATION = [
    {
      name: "About",
      route: "/",
    },
    {
      name: "Sponsor",
      route: "/",
    },
    {
      name: "Blog",
      route: "/",
    },
    {
      name: "Team",
      route: "/",
    },
    {
      name: "Career",
      route: "/",
    },
    {
      name: "Token",
      route: "/",
    },
    {
      name: "Events",
      route: "/",
    },
    {
      name: "Mentorship",
      route: "/",
    },
    {
      name: "Community",
      route: "/",
    },
  ]

  const CONTACT_NAVIGATION = [
    {
      name: "Contact",
      route: "/",
    },
    {
      name: "Instagram",
      route: "/",
    },
    {
      name: "Twitter",
      route: "/",
    },
    {
      name: "Facebook",
      route: "/",
    },
  ]


  return (
    <footer>
      <section className='footer-content'>
        <div className='left-content'>

          <div className='image-wrapper'>
            <Image src={ "/assets/images/ethereum.png" } 
            alt="ethereum-logo" 
            width={"68px"}
            height={"81.09px"}
            objectFit="contain"
            className="footer-illustration"
            />
          </div>

          <div className="footer-card">
              <Image src={ "/assets/images/Web3Ladies-white.png" } 
                alt="web3ladies-logo" 
                objectFit="contain"
                width={"123px"}
                height={"52.3px"}
                className="logo"
                />

              <p className='card-text'>Get the latest updates about web3Ladies activities and events.</p>

              <input type="email" name="user-email" id="user-email" />

              <div className="btn-container">
                <Button 
                  type={"primary"}
                  buttonText={"Submit"}
                  handleClick={() => null} 
                />
              </div>
              
          </div>
        </div>

        <div className="flag-wrapper">
            <Image src={ "/assets/images/web3flag-logo.png" } 
                alt="Web3ladies-vector"
                width={"177px"}
                height={"112.38px"} 
                objectFit="contain"
                className="flag-logo"
              />
        </div>


          <div className="footer-links">
              <h4>quick links</h4>

              <ul className="footer-list">
                  {FOOTER_NAVIGATION.map((item, index) => {
                      return (
                          <li key={ index }>
                              <Link href={ item.route }>
                                  <a href="#" target="_blank" rel="noopener noreferrer">{ item.name }</a>
                              </Link>
                          </li>
                      )
                    })}
                </ul>
          </div>

          <div className="footer-links">
            <h4 className='contact-links'>reach out to us</h4>

            <ul className="footer-list contacts">
                {CONTACT_NAVIGATION.map((item, index) => {
                  return (
                    <li key={ index }>
                        <Link href={ item.route }>
                            <a href="#" target="_blank" rel="noopener noreferrer">{ item.name }</a>
                        </Link>
                    </li>
                  )
                })}
            </ul>

            <div className="img-wrapper">
              <Image src={ "/assets/images/bitcoin.png" } 
              alt="Bitcoin" 
              width={"113px"}
              height={"121px"}
              objectFit="contain"
              className="hero-illustration"
              />
            </div>
          </div>

      </section>

      <section className="copyright-section">
          <p className='copyright-text'>Copyright &copy; 2021 Ladies Do Tech. All rights reserved.</p>
      </section>
       
    </footer>
  )
}

export default Footer