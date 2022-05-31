import React from 'react'
import styled from 'styled-components'
import Question from '../Assests/man-thinking-while-doing-work-in-laptop.png'
import { faqsData } from '../Helpers.js/Faqs-data'
import FaqsList from './Faqs-list'

const Faqs = ({ faqsSection }) => {
  return (
    <Wrapper>
      <div className='faqs-main-section' ref={faqsSection}>
        <div className='faqs-header'>
          <h3>Frquently Asked Questions</h3>
          <img src={Question} alt='question-illustration' />
        </div>
        <div className='faqs-lists-container'>
          {faqsData.map((value) => {
            return <FaqsList {...value} key={value.id} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .faqs-main-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--white-smoke);
    font-size: 1.5em;
    align-items: center;
    padding: 2.5rem;
    padding-bottom: 5rem;
    color: var(--bg-dark);
  }

  .faqs-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    text-align: center;
    margin-top: 2rem;
  }

  img {
    width: 80%;
    height: 300px;
    object-fit: cover;
    margin-top: -3rem;
  }

  .faqs-lists-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .faqs-list {
    width: 100%;
    margin-top: 1.5rem;
    font-size: 0.7em;
    cursor: pointer;
    user-select: none;
  }

  .faqs-display {
    padding: 1.2rem;
    background: var(--white-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 2px 3px var(--shadow);
  }

  .faqs-details {
    border-top: solid 1px black;
    padding: 1.5rem;
    background: var(--white-color);
    border-radius: 0 0 10px 10px;
    font-size: 0.8em;
    opacity: 0.8;
  }

  .active {
    color: var(--hightlight);
    transition: all 0.5s;
  }

  .display-active {
    border-radius: 10px 10px 0 0;
    box-shadow: none;
    color: var(--hightlight);
    transition: all 0.5s;
  }

  .details-active {
    box-shadow: 1px 2px 3px var(--shadow);
  }

  @media only screen and (min-width: 768px) {
    img {
      margin-top: 3rem;
    }
  }

  @media only screen and (min-width: 992px) {
    .faqs-header {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }

    h3 {
      margin-left: 3rem;
    }

    img {
      width: 50%;
      margin-top: -3rem;
    }

    .faqs-list {
      width: 80%;
    }
  }
`

export default Faqs
