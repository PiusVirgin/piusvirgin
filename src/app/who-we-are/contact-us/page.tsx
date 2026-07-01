import BusinessHours from '@/components/who-we-are/contact-us/business-hours'
import ContactForm from '@/components/who-we-are/contact-us/contact-form'
import ContactInfo from '@/components/who-we-are/contact-us/contact-info'
import Headquarters from '@/components/who-we-are/contact-us/headquarters'
import Hero from '@/components/who-we-are/contact-us/hero'


const ContactUsPage = () => {
  return (
    <>
      <Hero />
      <ContactInfo />
      <ContactForm />
      <BusinessHours />
      <Headquarters/>
    </>
  )
}

export default ContactUsPage
