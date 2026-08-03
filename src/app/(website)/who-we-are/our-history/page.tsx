
import Hero from '@/components/who-we-are/history/hero'
import QuickBit from '@/components/who-we-are/history/quick-bit'
import CompanyProfile from '@/components/who-we-are/history/company-profile'
import Journey from '@/components/who-we-are/history/journey'
import Beliefs from '@/components/who-we-are/history/beliefs'
import WhatWeDoSection from "@/components/who-we-are/history/what-we-do";
import HowWeWork from '@/components/who-we-are/history/how-we-work'
import Values from '@/components/who-we-are/history/values'
import HistoryCTA from '@/components/who-we-are/history/history-cta'


const OurHistoryPage = () => {
  return (
    <>
      <Hero />
      <QuickBit/>
      <CompanyProfile />
      <Journey />
      <Beliefs />
      <WhatWeDoSection />
      <HowWeWork />
      <Values/>
      <HistoryCTA/>
    </>
  )
}

export default OurHistoryPage
