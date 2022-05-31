import React, { useContext, useState, useRef } from 'react'
const AppProvider = React.createContext()

const AppWrapper = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const home = useRef(null)
  const about = useRef(null)
  const services = useRef(null)
  const trading = useRef(null)
  const faqs = useRef(null)
  const contact = useRef(null)
  const moreInfo = useRef(null)

  const handleFaqsToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: 'smooth',
    })
  }

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  const shareUrl = () => {
    window.navigator
      .share({
        url: window.location,
        title: 'Naira Exchange',
        text: 'Share our page',
      })
      .then(() => console.log('success'))
      .catch(() => 'Error')
  }

  return (
    <AppProvider.Provider
      value={{
        isExpanded,
        handleFaqsToggle,
        home,
        about,
        services,
        trading,
        faqs,
        contact,
        moreInfo,
        scrollToSection,
        menuOpen,
        toggleMenuOpen,
        shareUrl,
      }}
    >
      {children}
    </AppProvider.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppProvider)
}

export { AppWrapper }
