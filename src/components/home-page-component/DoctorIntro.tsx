'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import {
  Award,
  BookOpen,
  Heart,
  Users,
  GraduationCap,
  Stethoscope,
  Star,
  CheckCircle,
  Activity,
} from 'lucide-react'
import styles from './DoctorIntro.module.css'

interface DoctorIntroProps {
  className?: string
}

interface Highlight {
  id: string
  icon: React.ElementType
  number: string
  label: string
  color: string
}

const DoctorIntro: React.FC<DoctorIntroProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Updated highlights with beautiful purple color combinations
  const highlights: Highlight[] = [
    {
      id: 'papers',
      icon: BookOpen,
      number: '50+',
      label: 'Research Papers',
      color: '#7c3aed', // Primary Purple
    },
    {
      id: 'experience',
      icon: Award,
      number: '10+',
      label: 'Years Experience',
      color: '#6366f1', // Indigo Blue
    },
    {
      id: 'teaching',
      icon: GraduationCap,
      number: '100+',
      label: 'Students Taught',
      color: '#a855f7', // Light Purple
    },
    {
      id: 'patients',
      icon: Heart,
      number: '500+',
      label: 'Happy Patients',
      color: '#8b5cf6', // Medium Purple
    },
  ]

  const services = [
    'Routine Check-ups',
    'Pediatric Intensive Care',
    'Vaccinations',
    'All Pediatric Illness',
    'Emergency Care',
    'Growth Monitoring',
  ]

  const qualifications = [
    'MBBS, MD Pediatrics',
    'Post Graduate Teacher',
    'DCH & MD Training',
    'Research & Publications',
  ]

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  // Fixed: Define local variants with proper Variants type
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const localItemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const highlightVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={ref} className={`${styles.doctorIntroSection} ${className}`}>
      <div className={styles.backgroundPattern} />
      <div className={`${styles.floatingElement} ${styles.element1}`}>
        <Stethoscope size={24} />
      </div>
      <div className={`${styles.floatingElement} ${styles.element2}`}>
        <Heart size={20} />
      </div>
      <div className={`${styles.floatingElement} ${styles.element3}`}>
        <Star size={18} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* FIXED: Rotating Medical Icon with reduced spacing */}
          <motion.div
            className={styles.doctorIcon}
            variants={localItemVariants}
          >
            <motion.div
              className={styles.rotatingIcon}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Activity size={50} />
            </motion.div>
          </motion.div>

          {/* FIXED: Main Title with reduced spacing and animated gradient line */}
          <motion.div
            className={styles.titleSection}
            variants={localItemVariants}
          >
            <h2 className={styles.mainTitle}>
              <span className={styles.doctorName}>Dr. Satya Sadhan Ray</span>

              {/* FIXED: Three-color animated gradient line - Now Purple themed */}
              <motion.div
                className={styles.gradientLine}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={
                  isVisible
                    ? { scaleX: 1, opacity: 1 }
                    : { scaleX: 0, opacity: 0 }
                }
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                  ease: 'easeInOut',
                }}
              />

              <span className={styles.titleDescription}>
                Best Pediatrician in Kolkata
              </span>
            </h2>
          </motion.div>

          {/* Description Container */}
          <motion.div
            className={styles.descriptionContainer}
            variants={localItemVariants}
          >
            <div className={styles.introText}>
              <p className={styles.paragraph}>
                Dr. Satya Sadhan Ray is a{' '}
                <span className={styles.highlight}>
                  highly qualified and experienced pediatrician based in Kolkata
                </span>
                . With years of expertise in the field of child healthcare, Dr.
                Satya Sadhan Ray is renowned for providing the best possible
                care to young patients. As a specialist in pediatric medicine,
                Dr. Satya Sadhan Ray offers a wide range of services including
                routine check-ups, pediatric intensive care, vaccinations, and
                all sorts of pediatric illness.
              </p>
              <p className={styles.paragraph}>
                Dr. Afroz has a patient-centric approach, which means putting
                the needs of young patients and their families first. Dr. Afroz
                takes the time to explain procedures, diagnoses, and treatment
                options in simple terms that parents can understand, ensuring
                that they are fully informed and involved in the healthcare
                process.
              </p>
              <p className={styles.paragraph}>
                As an expert{' '}
                <span className={styles.highlight}>
                  pediatric doctor in Kolkata
                </span>
                , Dr. Satya Sadhan Ray is also actively involved in research and
                education in the field of pediatric medicine. Regular attendance
                at conferences and seminars ensures staying up-to-date with the
                latest developments, ensuring patients receive the most
                effective and innovative care available. Dr. Satya Sadhan Ray
                has published more than 50 research papers in different national
                and international peer-reviewed journals and contributed
                chapters in many books. As a post graduate teacher, Dr. Satya
                Sadhan Ray teaches DCH and MD Pediatric Medicine trainees.
              </p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className={styles.servicesSection}
            variants={localItemVariants}
          >
            <h3 className={styles.sectionTitle}>
              <Stethoscope size={24} />
              Specialized Services
            </h3>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className={styles.serviceItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.8 + index * 0.1,
                  }}
                >
                  <CheckCircle size={16} />
                  <span>{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Qualifications */}
          <motion.div
            className={styles.qualificationsSection}
            variants={localItemVariants}
          >
            <h3 className={styles.sectionTitle}>
              <GraduationCap size={24} />
              Qualifications & Expertise
            </h3>
            <div className={styles.qualificationsGrid}>
              {qualifications.map((qualification, index) => (
                <motion.div
                  key={qualification}
                  className={styles.qualificationItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isVisible
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 1.2 + index * 0.1,
                  }}
                >
                  <Award size={16} />
                  <span>{qualification}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Stats */}
          <motion.div
            className={styles.highlightsSection}
            variants={localItemVariants}
          >
            <div className={styles.highlightsGrid}>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.id}
                  className={styles.highlightCard}
                  variants={highlightVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  style={
                    {
                      '--highlight-color': highlight.color,
                    } as React.CSSProperties
                  }
                >
                  <div className={styles.highlightIcon}>
                    <highlight.icon size={24} />
                  </div>
                  <div className={styles.highlightContent}>
                    <div className={styles.highlightNumber}>
                      {highlight.number}
                    </div>
                    <div className={styles.highlightLabel}>
                      {highlight.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className={styles.ctaSection}
            variants={localItemVariants}
          >
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>
                Experience Compassionate Pediatric Care
              </h3>
              <p className={styles.ctaDescription}>
                Trust your child's health to an experienced professional
                dedicated to providing the highest quality healthcare with a
                gentle, family-centered approach.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DoctorIntro
