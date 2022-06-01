import React, { useEffect } from 'react'
import styled from 'styled-components'
import Ebay from '../Assests/ebay-logo-black-transparent.png'
import Itunes from '../Assests/apple-itunes-logo-png-transparent.png'
import Amazon from '../Assests/amazon-logo-black-transparent.png'
import Steam from '../Assests/steam-logo-black-and-white.png'
import Vanilla from '../Assests/vanilla-logo-png-transparent.png'
import Walmart from '../Assests/walmart-logo-black-transparent.png'

const Trades = () => {
  return (
    <Wrapper>
      {/* <div className='waves'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#ffff'
            fill-opacity='1'
            d='M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,128C840,128,960,160,1080,197.3C1200,235,1320,277,1380,298.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </div> */}
      <div className='trades-section'>
        <h3>Trade With Us</h3>
        <div className='available-trades'>
          <div className='row'>
            <img src={Ebay} alt='ebay logo' />
            <img src={Itunes} alt='itunes logo' />
          </div>
          <div className='row'>
            <img src={Amazon} alt='amazon logo' />
            <img src={Steam} alt='steam logo' />
          </div>
          <div className='row'>
            <img src={Vanilla} alt='vanilla logo' />
            <img src={Walmart} alt='walmart logo' />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .trades-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--white-color);
    padding-bottom: 3.5rem;
  }

  h3 {
    margin-top: 3rem;
    color: var(--modal-bg);
  }
  .available-trades {
    width: 50%;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  .row {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.3rem;
  }
  img {
    width: auto;
    height: 30px;
    background: var(--white-color);
    object-fit: cover;
  }

  @media only screen and (min-width: 768px) {
    h3 {
      color: var(--modal-bg);
      font-size: 1.5em;
    }
    .row {
      margin-top: 4rem;
    }
  }
`

export default Trades
