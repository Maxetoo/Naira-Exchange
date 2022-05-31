import React from 'react'
import styled from 'styled-components'
import { MdOutlineCopyright } from 'react-icons/md'

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer-section'>
        <MdOutlineCopyright className='icon' /> Naira Exchange 2022. All rights
        reserved
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  .footer-section {
    width: 100%;
    background: var(--modal-bg);
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.75em;
    opacity: 0.8;
  }

  .icon {
    margin-right: 0.5rem;
    margin-top: 0.1rem;
  }
`

export default Footer
