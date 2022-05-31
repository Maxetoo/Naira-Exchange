import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { menuData } from '../Helpers.js/menuData'

const Menu = () => {
  const {
    menuOpen,
    scrollToSection,
    home,
    about,
    services,
    trading,
    faqs,
    contact,
    toggleMenuOpen,
  } = useGlobalContext()

  const scroller = (str) => {
    if (str === 'home') {
      scrollToSection(home)
    }
    if (str === 'about') {
      scrollToSection(about)
    }
    if (str === 'services') {
      scrollToSection(services)
    }
    if (str === 'trading') {
      scrollToSection(trading)
    }
    if (str === 'faqs') {
      scrollToSection(faqs)
    }
    if (str === 'contact') {
      scrollToSection(contact)
    }
  }

  return (
    <Wrapper>
      <div
        className={`menu-main-container ${
          menuOpen ? 'menu-open' : 'menu-close'
        }`}
      >
        <div className='menu-container'>
          <ul className='list-container'>
            {menuData.map((value) => {
              const { id, title } = value
              return (
                <li
                  key={id}
                  onClick={() => {
                    toggleMenuOpen()
                    scroller(title)
                  }}
                >
                  {title.charAt(0).toLocaleUpperCase() +
                    title.split('').slice(1).join('')}
                </li>
              )
            })}
          </ul>
          <a href='http://wa.me/2349058571487/'>
            <button type='button'>Let's Trade</button>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .menu-main-container {
    width: 0%;
    height: 100vh;
    position: fixed;
    background: var(--modal-bg);
    color: var(--white-color);
    z-index: 1100;
    transition: 0.5s all;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-open {
    width: 100%;
  }

  .menu-close {
    width: 0;
  }

  .menu-container {
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    margin: 0.5rem;
    width: 80%;
    text-align: center;
    height: 50px;
    display: grid;
    place-content: center;
    opacity: 0.8;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
  }

  a > button {
    width: 200px;
    height: 40px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: var(--bg-dark);
    background: var(--white-color);
    font-family: 'Space Mono', monospace;
    font-weight: 600;
  }

  button:hover {
    transition: 1s all;
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 68%,
      rgba(252, 176, 69, 1) 100%
    );
  }

  @media only screen and (min-width: 768px) {
    .menu-container {
      display: none;
    }

    .menu-open {
      width: 0;
    }

    .menu-close {
      width: 0;
    }
  }
`

export default Menu
