import React from 'react'
import BrandLogo from '../Assests/NE_LOGO-MAIN.png'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const HeaderLarge = () => {
  const { home, about, services, trading, faqs, contact, scrollToSection } =
    useGlobalContext()
  return (
    <Wrapper>
      <div className='header-large-section'>
        <div className='brand-header-details'>
          <img src={BrandLogo} alt='Naira-Exchange Logo' />
          <p>Naira Exchange</p>
        </div>
        <div className='structure-list-container'>
          <ul className='list-container'>
            <li onClick={() => scrollToSection(home)}>Home</li>
            <li onClick={() => scrollToSection(about)}>About</li>
            <li onClick={() => scrollToSection(services)}>Services</li>
            <li onClick={() => scrollToSection(trading)}>Trading</li>
            <li onClick={() => scrollToSection(faqs)}>Faqs</li>
            <li onClick={() => scrollToSection(contact)}>Contact</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400&family=Oxanium:wght@200&family=Rajdhani:wght@300&family=Roboto+Flex:opsz,wght@8..144,100&family=Satisfy&family=Space+Mono&display=swap');
  @media only screen and (max-width: 600px) {
    .header-large-section {
      display: none;
    }
  }
  @media only screen and (min-width: 600px) {
    .header-large-section {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {
    .header-large-section {
      width: 100%;
      height: 50px;
      padding: 2.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-family: 'Space Mono', monospace;
      position: fixed;
      top: 0;
      z-index: 100;
      background: var(--modal-bg);
    }

    .brand-header-details {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      padding: 0.1rem;
      display: grid;
      place-content: center;
    }

    p {
      font-size: 1.1em;
      margin-top: 0.3rem;
      margin-left: 1rem;
    }

    .structure-list-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .list-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      list-style: none;
      font-size: 1.1em;
    }

    ul li {
      margin-top: 0.3rem;
      padding: 1rem;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 992px) {
    .header-large-section {
      font-size: 1.1em;
    }

    p {
      font-size: 1.1em;
    }

    .list-container {
      font-size: 1.1em;
    }
  }
`

export default HeaderLarge
