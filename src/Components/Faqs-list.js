import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlineDownCircle } from 'react-icons/ai'

const FaqsList = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleFaqsToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='faqs-list' onClick={handleFaqsToggle}>
      <div className={`faqs-display ${isExpanded ? 'display-active' : null}`}>
        <span className='faqs-caption'>{question}</span>
        <span className='faqs-icon'>
          {isExpanded ? <MdOutlineCancel /> : <AiOutlineDownCircle />}
        </span>
      </div>
      {isExpanded && (
        <div className={`faqs-details ${isExpanded ? 'details-active' : null}`}>
          {answer}
        </div>
      )}
    </div>
  )
}

export default FaqsList
