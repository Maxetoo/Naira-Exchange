import React from 'react'
import styled from 'styled-components'
import Ethereum from '../Assests/Ethereum Image.jpg'

const ImageSection = () => {
  return (
    <Wrapper>
      <div className='image-section'>
        <img src={Ethereum} alt='Ethereum' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .image-section {
    width: 100%;
    height: auto;
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
    margin-top: 5rem;
  }

  img {
    width: 70%;
    height: 300px;
    object-fit: cover;
  }

  @media only screen and (min-width: 992px) {
    .image-section {
      display: none;
    }
  }
`

export default ImageSection
