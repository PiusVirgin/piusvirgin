import CTA from '@/components/art-gallery/cta'
import EditorialQuote from '@/components/art-gallery/editorial-quote'
import FeaturedArtwork from '@/components/art-gallery/featured'
import GalleryPreview from '@/components/art-gallery/gallery-preview'
import Hero from '@/components/art-gallery/hero'

const ArtGalleryPage = () => {
  return (
    <>
      <Hero />
      <FeaturedArtwork />
      <GalleryPreview />
      <EditorialQuote />
      <CTA/>
    </>
  )
}

export default ArtGalleryPage
