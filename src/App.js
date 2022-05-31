import React from 'react'
import {
  HeaderSmall,
  Menu,
  HeaderLarge,
  HomeSection,
  Trades,
  About,
  Service,
  HowToTrade,
  Faqs,
  MoreInfo,
  Contact,
  Scroller,
  Footer,
} from './Components'
import { useGlobalContext } from './context'
const App = () => {
  const { home, about, services, trading, faqs, contact, moreInfo } =
    useGlobalContext()
  return (
    <main className='main-app'>
      <HeaderSmall />
      <Menu />
      <HeaderLarge />
      <HomeSection homeSection={home} />
      <Trades />
      <About aboutSection={about} />
      <Service serviceSection={services} />
      <HowToTrade tradingSection={trading} />
      <Faqs faqsSection={faqs} />
      <MoreInfo moreInfo={moreInfo} />
      <Contact contactSection={contact} />
      <Scroller />
      <Footer />
    </main>
  )
}

export default App
