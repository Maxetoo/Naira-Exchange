import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import HomeEth from '../Assests/Ethereum Image.jpg'
import Btc from '../Assests/Bitcoin.jpg'
import { useGlobalContext } from '../context'
const HomeSection = ({ homeSection }) => {
  const { moreInfo, scrollToSection } = useGlobalContext()
  const header = useRef(null)
  const wordings = useRef(null)
  const btn = useRef(null)

  return (
    <Wrapper>
      <div className='home-main-section' ref={homeSection}>
        <div className='details-container'>
          <h3 className='home-h3' ref={header}>
            Trade your Bitcoin and Giftcards with <span>Naira Exchange</span>
          </h3>
          <p className='home-p' ref={wordings}>
            Experince a faster, easier and more reliable way to exchange
            bitcoins and gifcards for cash at sweet and amazing rates in split
            seconds
          </p>
          <div className='button-container'>
            <button
              ref={btn}
              type='button'
              className='home-btn'
              onClick={() => scrollToSection(moreInfo)}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className='image-container'>
          <img src={Btc} alt='Bitcoin' />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400&family=Oxanium:wght@200&family=Rajdhani:wght@300&family=Roboto+Flex:opsz,wght@8..144,100&family=Satisfy&family=Space+Mono&display=swap');

  .home-main-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: var(--bg-dark);
    align-items: center;
    padding: 2rem;
    padding-bottom: 7rem;
    text-align: start;
    font-size: 1.5em;
    margin-top: 4rem;
  }

  .details-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .underline {
    margin-top: 1rem;
    width: 150px;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 68%,
      rgba(252, 176, 69, 1) 100%
    );
  }
  h3 {
    margin-top: 2.2rem;
    text-align: center;
    display: block;
    -webkit-animation-name: slideInUp;
    animation-name: slideInUp;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 0.5s;
  }

  @keyframes slideInUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slideInUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  p {
    margin-top: 2rem;
    font-size: 0.8em;
    color: whitesmoke;
    text-align: center;
    -webkit-animation-name: slideUp;
    animation-name: slideUp;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @keyframes slideUp {
    0% {
      -webkit-transform: translateY(30%);
      transform: translateY(30%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slideUp {
    0% {
      -webkit-transform: translateY(30%);
      transform: translateY(30%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  span {
    color: var(--hightlight);
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  button {
    background: var(--hightlight);
    height: 50px;
    width: 200px;
    color: var(--main-font-color);
    font-family: 'Space Mono', monospace;
    border-radius: 5px;
    font-size: 0.65em;
    cursor: pointer;
    border: none;
  }

  .image-container {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .image-container {
      display: none;
    }
  }

  @media only screen and (min-width: 600px) {
    .image-container {
      display: none;
    }

    h3 {
      margin-top: 3.5rem;
    }

    .details-container {
      padding: 3rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .image-container {
      display: none;
    }
  }

  @media only screen and (min-width: 992px) {
    .details-container {
      height: 100%;
      width: 50%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: start;
    }

    h3 {
      text-align: start;
    }

    p {
      text-align: start;
    }

    .image-container {
      display: flex;
      width: 40%;
      height: 80%;
      background: whitesmoke;
      margin-top: 2rem;
    }

    img {
      height: 300px;
      width: 100%;
      object-fit: cover;
      background: #ffff;
    }

    .button-container {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin-top: 2rem;
    }
  }
`

export default HomeSection
