import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { GoChevronUp } from 'react-icons/go'

const Scroll = () => {
  const [displayIcon, setDisplayIcon] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 600) {
        setDisplayIcon(true)
      } else {
        setDisplayIcon(false)
      }
    })
  }, [displayIcon])

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Wrapper>
      <div
        className={`scroll-icon ${displayIcon ? 'active' : 'inactive'}`}
        onClick={scrolltoTop}
      >
        <GoChevronUp />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .scroll-icon {
    background: var(--white-color);
    color: var(--bg-dark);
    width: 40px;
    height: 40px;
    border-radius: 10px;
    position: fixed;
    bottom: 10%;
    z-index: 1000;
    left: 80%;
    display: grid;
    place-content: center;
    cursor: pointer;
    font-size: 1.1em;
    opacity: 0.9;
    transition: 0.5s all;
  }
  .active {
    opacity: 1;
  }
  .inactive {
    opacity: 0;
  }
  @media only screen and (max-width: 600px) {
    .scroll-icon {
      left: 80%;
    }
  }
  @media only screen and (min-width: 600px) {
    .scroll-icon {
      left: 90%;
    }
  }
  @media only screen and (min-width: 768px) {
    .scroll-icon {
      left: 90%;
    }
  }
  @media only screen and (min-width: 992px) {
    .scroll-icon {
      left: 90%;
    }
  }
  @media only screen and (min-width: 1200px) {
    .scroll-icon {
      left: 90%;
    }
  }
`

export default Scroll
