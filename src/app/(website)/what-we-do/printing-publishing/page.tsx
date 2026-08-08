import CTA from '@/components/printing-publishing/cta'
import EditorialMarquee from '@/components/printing-publishing/editorial-marquee'
import Hero from '@/components/printing-publishing/hero'
import Impact from '@/components/printing-publishing/impact'
import PrintingProcess from '@/components/printing-publishing/printing-process'
import PrintingShowcase from '@/components/printing-publishing/printing-showcase'
import Publications from '@/components/printing-publishing/publications'
import PrintingServices from '@/components/printing-publishing/services'


const  PrintingPublishing = () => {
  return (
    <div>
      <Hero />
      <Publications/>
      {/* <PrintingServices /> */}
      <PrintingProcess />
      <EditorialMarquee />
      {/* <PrintingShowcase /> */}
      {/* <Impact /> */}
      <CTA/>

    </div>
  )
}

export default  PrintingPublishing
