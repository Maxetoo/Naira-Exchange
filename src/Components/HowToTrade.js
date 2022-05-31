import React from 'react'
import styled from 'styled-components'
import { RiContactsLine, RiExchangeFill } from 'react-icons/ri'
import { MdOutlinePayment } from 'react-icons/md'
// RiContactsLine
// RiExchangeFill
// MdOutlinePayment

const HowToTrade = ({ tradingSection }) => {
  return (
    <Wrapper>
      <div className='how-to-trade-section' ref={tradingSection}>
        <h3>How To Trade With Us</h3>
        <div className='trade-list-container'>
          <div className='trade-list'>
            <div className='icon'>
              <RiContactsLine />
            </div>
            <h4>Contact Us</h4>
            <p>
              Contact us on whatsapp by clicking on the "whatsapp" button. Tell
              us what you want to trade and we will reply almost instantly with
              amazing rates
            </p>
          </div>
          <div className='trade-list'>
            <div className='icon'>
              <RiExchangeFill />
            </div>
            <h4>Ask Rates & Upload Card</h4>
            <p>
              Tell us what you are for. If giftcards, once the rates has been
              acknowledged you will send a clear picture of the valid
              giftcard(s){' '}
            </p>
          </div>
          <div className='trade-list'>
            <div className='icon'>
              <MdOutlinePayment />
            </div>
            <h4>Instant Payment</h4>
            <p>
              Once trade has been successful, payment will be sent immediately.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .how-to-trade-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background: var(--bg-dark);
    align-items: center;
    padding: 2rem;
    padding-bottom: 7rem;
    text-align: start;
    font-size: 1.5em;
    margin-top: 4rem;
  }

  h3 {
    text-align: center;
  }

  .trade-list-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    color: var(--hightlight);
    font-size: 2em;
  }

  .trade-list {
    margin-top: 3rem;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h4 {
    font-size: 0.8em;
  }

  p {
    font-size: 0.7em;
    margin-top: 2rem;
    opacity: 0.8;
  }

  @media only screen and (min-width: 992px) {
    .trade-list-container {
      width: 80%;
    }

    p {
      width: 60%;
    }
  }
`

export default HowToTrade
