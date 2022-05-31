import React from 'react'
import BrandLogo from '../Assests/NE_LOGO-MAIN.png'
import styled from 'styled-components'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { useGlobalContext } from '../context'
// MdOutlineClose
// import { IoMenuO } from 'react-icons/io'

const HeaderSmall = () => {
  const { menuOpen, toggleMenuOpen } = useGlobalContext()
  return (
    <Wrapper>
      <div className='header-small-section'>
        <div className='brand-header-details'>
          <img src={BrandLogo} alt='Naira-Exchange Logo' />
          <h3>Naira Exchange</h3>
        </div>
        <div className='icon' onClick={toggleMenuOpen}>
          {menuOpen ? <MdOutlineClose /> : <HiOutlineMenu />}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400&family=Oxanium:wght@200&family=Rajdhani:wght@300&family=Roboto+Flex:opsz,wght@8..144,100&family=Satisfy&family=Space+Mono&display=swap');
  .header-small-section {
    width: 100%;
    height: 70px;
    background: var(--modal-bg);
    padding: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: 'Space Mono', monospace;
    position: fixed;
    top: 0;
    z-index: 100;
  }

  .brand-header-details {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    padding: 0.1rem;
    display: grid;
    place-content: center;
  }

  h3 {
    font-size: 1.1em;
    margin-left: 1rem;
  }

  .icon {
    height: 100px;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    .header-small-section {
      display: none;
    }
  }
`

export default HeaderSmall
