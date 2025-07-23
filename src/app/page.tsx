'use client'

import DoctorIntro from '@/components/home-page-component/DoctorIntro'
import HeroSection from '@/components/home-page-component/HeroSection'
import PricingPlans from '@/components/home-page-component/PricingPlans'
import TreatmentsOffered from '@/components/home-page-component/Treatments'
import VideoConsultation from '@/components/home-page-component/VideoConsultation'
import WhyChooseUs from '@/components/home-page-component/WhyChooseUs'

export default function HomePage() {
  const handleBookAppointment = () => {
    console.log('Book Appointment clicked')
  }

  const handleExplorePlans = () => {
    console.log('Explore Plans clicked')
  }

  return (
    <div className="homepage">
      <HeroSection
        onBookAppointment={handleBookAppointment}
        onExplorePlans={handleExplorePlans}
      />
      <DoctorIntro />
      <WhyChooseUs />
      <TreatmentsOffered />
      {/* <PricingPlans /> */}
      <VideoConsultation />
    </div>
  )
}
