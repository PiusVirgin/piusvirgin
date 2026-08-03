import Hero from '@/components/who-we-are/contact-us/hero'
import ContactCards from '@/components/who-we-are/contact-us/contact-cards'
import OfficeInfo from '@/components/who-we-are/contact-us/office-info'
import Locations from '@/components/who-we-are/contact-us/locations'
import ContactForm from '@/components/who-we-are/contact-us/contact-form'
import ContactCTA from '@/components/who-we-are/contact-us/contact-cta'

const ContactUsPage = () => {
  return (
    <>
      <Hero />
      <ContactCards />
      <OfficeInfo />
      <Locations />
      <ContactForm />
      <ContactCTA/>

    </>
  );
}

export default ContactUsPage
