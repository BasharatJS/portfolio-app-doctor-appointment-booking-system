'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Star,
  Clock,
  Users,
  Trophy,
  Sparkles,
} from 'lucide-react'
import styles from './Education.module.css'
import { aboutMotionVariants } from '@/types/about'

// ===========================
// TYPES
// ===========================
interface EducationQualificationsProps {
  className?: string
}

interface Education {
  id: string
  degree: string
  institution: string
  location: string
  year: string
  specialization?: string
  grade?: string
  icon: React.ElementType
  color: string
}

interface Certification {
  id: string
  title: string
  organization: string
  year: string
  status: 'Active' | 'Renewed' | 'Lifetime'
  icon: React.ElementType
  color: string
}

interface Training {
  id: string
  title: string
  institution: string
  duration: string
  type: 'Fellowship' | 'Residency' | 'Specialization'
  icon: React.ElementType
  color: string
}

// ===========================
// EDUCATION & QUALIFICATIONS COMPONENT
// ===========================
const EducationQualifications: React.FC<EducationQualificationsProps> = ({
  className = '',
}) => {
  // ===========================
  // HOOKS & STATE
  // ===========================
  const [isVisible, setIsVisible] = useState(false)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // ===========================
  // STATIC DATA
  // ===========================
  const educationData: Education[] = [
    {
      id: '1',
      degree: 'MBBS (Honours)',
      institution: 'University of Kolkata',
      location: 'Kolkata, India',
      year: '2005',
      specialization: 'Medicine & Surgery',
      grade: 'First Class Honours',
      icon: GraduationCap,
      color: '#059669',
    },
    {
      id: '2',
      degree: 'MD in Pediatrics',
      institution: 'Institute of Post Graduate Medical Education',
      location: 'Kolkata, India',
      year: '2009',
      specialization: 'Pediatric Medicine',
      grade: 'Distinction',
      icon: BookOpen,
      color: '#0369a1',
    },
    {
      id: '3',
      degree: 'DCH (Diploma in Child Health)',
      institution: 'West Bengal University of Health Sciences',
      location: 'Kolkata, India',
      year: '2007',
      specialization: 'Child Health & Development',
      grade: 'Merit',
      icon: Users,
      color: '#7c3aed',
    },
    {
      id: '4',
      degree: 'DNBE (Pediatrics)',
      institution: 'National Board of Examinations',
      location: 'New Delhi, India',
      year: '2010',
      specialization: 'Pediatric Medicine',
      grade: 'First Class',
      icon: Award,
      color: '#ea580c',
    },
  ]

  const certifications: Certification[] = [
    {
      id: '1',
      title: 'MRCPCH (UK)',
      organization: 'Royal College of Paediatrics and Child Health',
      year: '2012',
      status: 'Active',
      icon: Award,
      color: '#7c3aed',
    },
    {
      id: '2',
      title: 'FRCPCH (UK)',
      organization: 'Royal College of Paediatrics and Child Health',
      year: '2016',
      status: 'Lifetime',
      icon: Trophy,
      color: '#ea580c',
    },
    {
      id: '3',
      title: 'Pediatric Life Support (PLS)',
      organization: 'European Resuscitation Council',
      year: '2023',
      status: 'Renewed',
      icon: Star,
      color: '#059669',
    },
    {
      id: '4',
      title: 'Advanced Pediatric Life Support',
      organization: 'American Heart Association',
      year: '2023',
      status: 'Active',
      icon: Sparkles,
      color: '#0369a1',
    },
  ]

  const trainings: Training[] = [
    {
      id: '1',
      title: 'Pediatric Intensive Care Fellowship',
      institution: 'Great Ormond Street Hospital',
      duration: '2010-2012',
      type: 'Fellowship',
      icon: Users,
      color: '#059669',
    },
    {
      id: '2',
      title: 'Pediatric Rheumatology Training',
      institution: 'Birmingham Children Hospital',
      duration: '2013-2014',
      type: 'Specialization',
      icon: Clock,
      color: '#7c3aed',
    },
    {
      id: '3',
      title: 'Neonatal Intensive Care Fellowship',
      institution: 'Alder Hey Children Hospital',
      duration: '2014-2015',
      type: 'Fellowship',
      icon: Star,
      color: '#0369a1',
    },
    {
      id: '4',
      title: 'Pediatric Emergency Medicine',
      institution: 'Royal Manchester Children Hospital',
      duration: '2015-2016',
      type: 'Specialization',
      icon: Trophy,
      color: '#ea580c',
    },
  ]

  // ===========================
  // EFFECTS
  // ===========================
  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  // ===========================
  // RENDER
  // ===========================
  return (
    <section ref={ref} className={`${styles.educationSection} ${className}`}>
      {/* Background Decoration */}
      <div
        className={`${styles.backgroundDecoration} ${styles.leftDecoration}`}
      />
      <div
        className={`${styles.backgroundDecoration} ${styles.rightDecoration}`}
      />

      {/* Main Container */}
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className={styles.sectionBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GraduationCap size={16} />
            Academic Excellence
          </motion.div>

          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Education &{' '}
            <span className={styles.highlightText}>Qualifications</span>
          </motion.h2>

          <motion.div
            className={styles.titleGradientLine}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              isVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
            }
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Three Cards Section */}
        <motion.div
          className={styles.cardsSection}
          variants={aboutMotionVariants.aboutSection}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Education Card */}
          <motion.div
            className={`${styles.educationCard} ${styles.card}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <GraduationCap size={24} />
              </div>
              <h3 className={styles.cardTitle}>Education</h3>
            </div>

            <div className={styles.cardContent}>
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className={styles.educationItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div
                    className={styles.timelineDot}
                    style={{ backgroundColor: edu.color }}
                  >
                    <edu.icon size={16} color="white" />
                  </div>
                  <div className={styles.educationDetails}>
                    <h4 className={styles.degreeTitle}>{edu.degree}</h4>
                    <p className={styles.institution}>{edu.institution}</p>
                    <div className={styles.metadata}>
                      <span className={styles.location}>
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                      <span className={styles.year}>
                        <Calendar size={12} />
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.hoverEffect}></div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            className={`${styles.certificationsCard} ${styles.card}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Award size={24} />
              </div>
              <h3 className={styles.cardTitle}>Certifications</h3>
            </div>

            <div className={styles.cardContent}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className={styles.certificationItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <div
                    className={styles.certIcon}
                    style={{ backgroundColor: cert.color }}
                  >
                    <cert.icon size={16} color="white" />
                  </div>
                  <div className={styles.certDetails}>
                    <h4 className={styles.certTitle}>{cert.title}</h4>
                    <p className={styles.organization}>{cert.organization}</p>
                    <div className={styles.certMeta}>
                      <span className={styles.certYear}>{cert.year}</span>
                      <span
                        className={`${styles.status} ${
                          styles[cert.status.toLowerCase()]
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.hoverEffect}></div>
          </motion.div>

          {/* Training & Fellowship Card */}
          <motion.div
            className={`${styles.trainingCard} ${styles.card}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <BookOpen size={24} />
              </div>
              <h3 className={styles.cardTitle}>Training & Fellowship</h3>
            </div>

            <div className={styles.cardContent}>
              {trainings.map((training, index) => (
                <motion.div
                  key={training.id}
                  className={styles.trainingItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <div
                    className={styles.trainingIcon}
                    style={{ backgroundColor: training.color }}
                  >
                    <training.icon size={16} color="white" />
                  </div>
                  <div className={styles.trainingDetails}>
                    <h4 className={styles.trainingTitle}>{training.title}</h4>
                    <p className={styles.trainingInstitution}>
                      {training.institution}
                    </p>
                    <div className={styles.trainingMeta}>
                      <span className={styles.duration}>
                        <Clock size={12} />
                        {training.duration}
                      </span>
                      <span
                        className={`${styles.type} ${
                          styles[training.type.toLowerCase()]
                        }`}
                      >
                        {training.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.hoverEffect}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EducationQualifications
