import React from 'react'
import styled from 'styled-components'
import { RiCustomerService2Line } from 'react-icons/ri'
import { BsPlug, BsShield } from 'react-icons/bs'
import { FiLock } from 'react-icons/fi'
import { SiFastly } from 'react-icons/si'
import { IoMdFlash } from 'react-icons/io'
import { FaHandshake } from 'react-icons/fa'
// SiFastly
// IoMdFlash
// VscWorkspaceTrusted
// FaHandshake
const Service = ({ serviceSection }) => {
  return (
    <Wrapper>
      <div className='service-section' ref={serviceSection}>
        <h3>Our Services</h3>
        <div className='service-lists-container'>
          <div className='service-list'>
            <div className='icon-container'>
              <span className='icon'>
                <FaHandshake />
              </span>
            </div>
            <h4>Reliability</h4>
            <p>
              We believe in customer satisfaction, so we offer you the best
              experience and best exchange rates.
            </p>
          </div>
          <div className='service-list'>
            <div className='icon-container'>
              <span className='icon'>
                <IoMdFlash />
              </span>
            </div>
            <h4>Instant Payment</h4>
            <p>
              You're are guaranteed to get your payment sent to you in no time
              once your transaction has been validated.
            </p>
          </div>
          <div className='service-list'>
            <div className='icon-container'>
              <span className='icon'>
                <FiLock />
              </span>
            </div>
            <h4>Security</h4>
            <p>
              Trade with confidence, as you are guaranteed a zero or less chance
              of transaction failure.
            </p>
          </div>
          <div className='service-list'>
            <div className='icon-container'>
              <span className='icon'>
                <RiCustomerService2Line />
              </span>
            </div>
            <h4>Customer Service</h4>
            <p>
              Our service is very effiencient as we are online 24/7, ready to
              attend to you.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .service-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--white-color);
    font-size: 1.5em;
    align-items: center;
    padding: 2.5rem;
    padding-bottom: 5rem;
  }

  h3 {
    color: var(--modal-bg);
  }

  .service-lists-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .service-list {
    margin-top: 2rem;
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background: var(--white-smoke);
    color: var(--bg-dark);
    border-radius: 10px;
    text-align: center;
    box-shadow: 1px 2px 3px var(--shadow);

  }

  h4 {
    font-size: 0.8em;
    margin-top: 1.5rem;
  }

  p {
    font-size: 0.7em;
    opacity: 0.8;
    margin-top: 1.5rem;
  }

  .icon-container {
    background: var(--white-color);
    width: 50px;
    height: 45px;
    display: grid;
    place-content: center;
    border-radius: 10px;
    border: solid 1.5px var(--bg-dark)
  }
  .icon {
    color: var(--bg-dark)
    margin-top: 0.1rem;
  }

  @media only screen and (min-width: 992px) {
    .service-lists-container {
      display: grid;
      margin-top: 4rem;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
      width: 100%;
    }

    .service-list {
      height: 300px;
    }

    h3 {
        margin-top: 2rem;
    }
`

export default Service
