import AboutDoctor from '@/components/about-page-component/AboutDoctor'
import DoctorCTA from '@/components/about-page-component/DoctorCTA'
import EducationQualifications from '@/components/about-page-component/Education'
import PatientReviews from '@/components/about-page-component/PatientReviews'
import TreatmentPhilosophy from '@/components/about-page-component/TreatmentPhilosophy'
import React from 'react'

function AboutPage() {
  return (
    <div>
      <AboutDoctor />
      <EducationQualifications />
      <TreatmentPhilosophy />
      <PatientReviews />
      <DoctorCTA />
    </div>
  )
}

export default AboutPage
