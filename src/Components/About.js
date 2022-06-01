import React from 'react'
import styled from 'styled-components'
const About = ({ aboutSection }) => {
  return (
    <Wrapper>
      <div className='about-section' ref={aboutSection}>
        <h3>About</h3>
        <p>
          <span>Naira exchange</span> is one of the most reliable platforms to
          trade your digital currencies and all types of giftcards at sweet
          rates.
        </p>

        <p>
          We buy <span>BTC/USDT</span>. Pickups for{' '}
          <span>
            CashApp, Zelle, Apple Pay, PayPal, Skrill, Neteller, Venmo, Payeer,
            Google Pay
          </span>{' '}
          and more.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .about-section {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--bg-dark);
    align-items: center;
    padding: 2.5rem;
    padding-bottom: 7rem;
    font-size: 1.5em;
  }

  p {
    margin-top: 2rem;
    font-size: 0.7em;
    text-align: center;
    opacity: 0.8;
  }

  span {
    opacity: 1;
    font-size: 1em;
    text-decoration: underline;
  }

  @media only screen and (min-width: 992px) {
    .about-section {
      padding-top: 4rem;
      padding-bottom: 7rem;
    }

    p {
      width: 60%;
    }
  }
`

// "sizes": "64x64 32x32 24x24 16x16",

export default About
