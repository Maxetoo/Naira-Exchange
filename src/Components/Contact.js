import React from 'react'
import styled from 'styled-components'
import BrandLogo from '../Assests/NE_LOGO-MAIN.png'
import { AiFillPhone, AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsFillShareFill } from 'react-icons/bs'
import { MdOutlineCopyright, MdEmail, MdShare } from 'react-icons/md'
import { useGlobalContext } from '../context'

const Contact = ({ contactSection }) => {
  const { shareUrl } = useGlobalContext()
  return (
    <Wrapper>
      <div className='contact-section' ref={contactSection}>
        <h3>Contact Us</h3>
        <img src={BrandLogo} alt='Naira exchange logo' />
        <p>
          Naira exchange would love to hear from you. You can reach us via our
          various platforms
        </p>
        <div className='icons-container'>
          <ul>
            <li>
              <a href='http://wa.me/2349058571487/'>
                <RiWhatsappFill />
              </a>
            </li>
            <li>
              <a href='https://instagram.com/nairaexchange?r=nametag'>
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href='mailto: Olatunjieniola2003@gmail.com'>
                <MdEmail />
              </a>
            </li>
            <li>
              <a href='tel:09058571487'>
                <AiFillPhone />
              </a>
            </li>
            <li onClick={shareUrl}>
              <MdShare />
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .contact-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5em;
    align-items: center;
    padding: 2.5rem;
    padding-bottom: 3rem;
    margin-top: 4rem;
    background: var(--white-color);
    color: var(--bg-dark)
  }

  h3 {
    text-align: center;
    margin-top
  }

  img {
    margin-top: 2rem;
    width: 70px;
    height: 70px;
    object-fit: cover;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    padding: 0.1rem;
    display: grid;
    place-content: center;
  }

  p {
      font-size: 0.7em;
    margin-top: 2rem;
    opacity: 0.8;
    text-align: center;
  }

  .icons-container {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  a {
    color: var(--bg-dark)
    
  }

  li {
    margin: 1rem;
    cursor: pointer;
  }

  .reserve-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .reserve {
    width: 80%;
    // border-top: solid 0.5px var(--white-smoke);
    padding: 0.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .copyright {
    margin-top: 0.3rem;
    font-size: 0.6em;
    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 992px) {
    p {
      width: 45%;
    }
  }
`

export default Contact
