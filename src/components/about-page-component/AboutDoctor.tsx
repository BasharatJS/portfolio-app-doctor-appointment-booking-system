'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  Award,
  GraduationCap,
  Heart,
  Users,
  BookOpen,
  Building2,
  Stethoscope,
  Star,
  Calendar,
  MapPin,
  CheckCircle,
  Sparkles,
} from 'lucide-react'
import styles from './AboutDoctor.module.css'
import { motionVariants, motionTransitions } from '@/types'
import {
  AboutDoctorProps,
  Achievement,
  Hospital,
  aboutMotionVariants,
} from '@/types/about'

// ===========================
// ABOUT DOCTOR COMPONENT
// ===========================
const AboutDoctor: React.FC<AboutDoctorProps> = ({ className = '' }) => {
  // ===========================
  // HOOKS & STATE
  // ===========================
  const [isVisible, setIsVisible] = useState(false)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // ===========================
  // STATIC DATA
  // ===========================
  const achievements: Achievement[] = [
    {
      id: 'experience',
      icon: Calendar,
      title: '10+ Years Experience',
      description: 'Extensive experience in managing critical pediatric cases',
      color: '#059669',
    },
    {
      id: 'patients',
      icon: Users,
      title: '1500+ Patients',
      description: 'Successfully treated and ventilated sick children',
      color: '#0369a1',
    },
    {
      id: 'publications',
      icon: BookOpen,
      title: '50+ Publications',
      description: 'National and international research publications',
      color: '#7c3aed',
    },
    {
      id: 'conferences',
      icon: Award,
      title: '20+ Conferences',
      description: 'Speaker and faculty at medical conferences',
      color: '#ea580c',
    },
  ]

  const affiliations: Hospital[] = [
    {
      id: '1',
      name: 'Institute Of Child Health (ICH)',
      role: 'Associate Professor & PICU In-Charge',
    },
    {
      id: '2',
      name: 'AMRI Hospitals',
      role: 'Consultant Visiting Pediatrician',
    },
    {
      id: '3',
      name: 'Ruby General Hospital',
      role: 'Consultant Visiting Pediatrician',
    },
    {
      id: '4',
      name: 'EEDF (Sri Aurovinda Seva Kendra)',
      role: 'Consultant Visiting Pediatrician',
    },
    {
      id: '5',
      name: 'Repose Nursing Home',
      role: 'Consultant Visiting Pediatrician',
    },
  ]

  const specializations: string[] = [
    'Pediatric Intensive Care',
    'Pediatric Rheumatology',
    'Pediatric Infectious Disease',
    'Pediatric Dysmorphology',
    'Critical Care Management',
    'Vaccination Services',
  ]

  const qualifications: string[] = [
    'MBBS (Kolkata) (HONS)',
    'MD (Pediatrics)',
    'MRCPCH (UK)',
    'FRCPCH (UK)',
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
    <section ref={ref} className={`${styles.aboutDoctorSection} ${className}`}>
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
            <Stethoscope size={16} />
            Meet Our Specialist
          </motion.div>

          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            About <span className={styles.highlightText}>Dr. Afroz Ahmed</span>
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

        {/* Top Section - Doctor Details & Image */}
        <motion.div
          className={styles.topSection}
          variants={aboutMotionVariants.aboutDoctor}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Left Content - Doctor Details */}
          <motion.div
            className={styles.doctorDetails}
            variants={aboutMotionVariants.aboutContent}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <div className={styles.doctorTitle}>
              <h3 className={styles.doctorName}>Dr. Afroz Ahmed</h3>
              <div className={styles.qualificationsList}>
                {qualifications.map((qual, index) => (
                  <motion.span
                    key={index}
                    className={styles.qualification}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isVisible
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    {qual}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.p
              className={styles.doctorDescription}
              variants={aboutMotionVariants.aboutItem}
            >
              Dr. Afroz Ahmed is a distinguished Consultant Pediatrician and
              Pediatric Intensive Care Specialist with exceptional expertise in
              managing critical pediatric cases. Currently serving as Associate
              Professor of Pediatrics and In-Charge of the Pediatric Intensive
              Care Unit (PICU) at the Institute Of Child Health (ICH), he has
              been instrumental in establishing world-class pediatric care
              standards.
            </motion.p>

            <motion.p
              className={styles.doctorExtraInfo}
              variants={aboutMotionVariants.aboutItem}
            >
              He was the key instrumental person to build up the 12 bedded
              tertiary level 3 PICU at ICH in 2014. Dr Ahmed has extensive
              experience in managing very sick, critical and complicated
              patients in PICU settings. ICH PICU has ventilated more than 1500
              sick kids under his leadership.
            </motion.p>
          </motion.div>

          {/* Right Content - Doctor Image */}
          <motion.div
            className={styles.doctorImageSection}
            variants={aboutMotionVariants.aboutImage}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <div className={styles.imageContainer}>
              {/* Floating Medical Icons */}
              <motion.div
                className={styles.floatingIcon}
                style={{ top: '10%', left: '10%' }}
                variants={aboutMotionVariants.aboutFloating}
                animate="animate"
              >
                <GraduationCap size={24} />
              </motion.div>

              <motion.div
                className={styles.floatingIcon}
                style={{ top: '20%', right: '5%' }}
                variants={aboutMotionVariants.aboutFloating}
                animate="animate"
              >
                <Star size={20} />
              </motion.div>

              <motion.div
                className={styles.floatingIcon}
                style={{ bottom: '25%', left: '5%' }}
                variants={aboutMotionVariants.aboutFloating}
                animate="animate"
              >
                <Sparkles size={18} />
              </motion.div>

              {/* Main Doctor Image */}
              <motion.div
                className={styles.doctorImageWrapper}
                variants={aboutMotionVariants.aboutBadge}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.imageGradientBorder}>
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&fit=crop&crop=face&auto=format&q=80"
                    alt="Dr. Afroz Ahmed - Pediatric Specialist"
                    className={styles.doctorImage}
                  />
                </div>

                {/* Experience Badge */}
                <motion.div
                  className={styles.experienceBadge}
                  variants={aboutMotionVariants.aboutBadge}
                  initial="hidden"
                  animate={isVisible ? 'visible' : 'hidden'}
                >
                  <div className={styles.badgeContent}>
                    <span className={styles.badgeNumber}>10+</span>
                    <span className={styles.badgeText}>Years</span>
                  </div>
                </motion.div>

                {/* Achievement Badge */}
                <motion.div
                  className={styles.achievementBadge}
                  variants={aboutMotionVariants.aboutBadge}
                  initial="hidden"
                  animate={isVisible ? 'visible' : 'hidden'}
                >
                  <Award size={20} />
                  <span>Expert Pediatrician</span>
                </motion.div>
              </motion.div>

              {/* Background Glow Effect */}
              <motion.div
                className={styles.imageGlow}
                variants={aboutMotionVariants.aboutGlow}
                animate="animate"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Three Cards */}
        <motion.div
          className={styles.bottomSection}
          variants={aboutMotionVariants.aboutSection}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Key Achievements Card */}
          <motion.div
            className={`${styles.infoCard} ${styles.achievementsCard}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Award size={24} />
              </div>
              <h4 className={styles.cardTitle}>Key Achievements</h4>
            </div>
            <div className={styles.cardContent}>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className={styles.achievementItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                >
                  <div
                    className={styles.achievementIcon}
                    style={{ backgroundColor: achievement.color }}
                  >
                    <achievement.icon size={16} color="white" />
                  </div>
                  <div className={styles.achievementText}>
                    <h5>{achievement.title}</h5>
                    <p>{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.hoverEffect}></div>
          </motion.div>

          {/* Areas of Specialization Card */}
          <motion.div
            className={`${styles.infoCard} ${styles.specializationsCard}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Heart size={24} />
              </div>
              <h4 className={styles.cardTitle}>Areas of Specialization</h4>
            </div>
            <div className={styles.cardContent}>
              {specializations.map((spec, index) => (
                <motion.div
                  key={index}
                  className={styles.specializationItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
                >
                  <CheckCircle size={16} className={styles.checkIcon} />
                  <span>{spec}</span>
                </motion.div>
              ))}
            </div>
            <div className={styles.hoverEffect}></div>
          </motion.div>

          {/* Hospital Affiliations Card */}
          <motion.div
            className={`${styles.infoCard} ${styles.affiliationsCard}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Building2 size={24} />
              </div>
              <h4 className={styles.cardTitle}>Hospital Affiliations</h4>
            </div>
            <div className={styles.cardContent}>
              {affiliations.map((hospital, index) => (
                <motion.div
                  key={hospital.id}
                  className={styles.affiliationItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
                >
                  <MapPin size={16} className={styles.locationIcon} />
                  <div className={styles.affiliationText}>
                    <h5>{hospital.name}</h5>
                    <p>{hospital.role}</p>
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

export default AboutDoctor
