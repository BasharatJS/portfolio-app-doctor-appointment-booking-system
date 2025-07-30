'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  Heart,
  Shield,
  Star,
  Play,
  ArrowRight,
  Users,
  Calendar,
  Award,
  Plus,
} from 'lucide-react'
import styles from './HeroSection.module.css'
import { motionVariants, motionTransitions } from '@/types'
import AppointmentModal from '@/components/modal/AppointmentModal'

// ===========================
// COMPONENT INTERFACES
// ===========================
interface HeroSectionProps {
  onBookAppointment?: () => void
  onExplorePlans?: () => void
}

// ===========================
// HERO SECTION COMPONENT
// ===========================
const HeroSection: React.FC<HeroSectionProps> = ({
  onBookAppointment,
  onExplorePlans,
}) => {
  // ===========================
  // HOOKS & STATE
  // ===========================
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  // ===========================
  // STATIC DATA
  // ===========================
  const quickStats = [
    { icon: Users, number: '500+', label: 'Happy Patients' },
    { icon: Calendar, number: '10+', label: 'Years Experience' },
    { icon: Award, number: '98%', label: 'Success Rate' },
    { icon: Heart, number: '24/7', label: 'Emergency Care' },
  ]

  // ===========================
  // EFFECTS
  // ===========================
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // ===========================
  // EVENT HANDLERS
  // ===========================
  const handleAppointmentClick = () => {
    setIsAppointmentModalOpen(true)
  }

  const handleModalClose = () => {
    setIsAppointmentModalOpen(false)
  }

  const handleExplorePlans = () => {
    onExplorePlans?.()
    const plansSection = document.getElementById('plans-section')
    plansSection?.scrollIntoView({ behavior: 'smooth' })
  }

  // ===========================
  // RENDER
  // ===========================
  return (
    <section className={styles.heroSection}>
      {/* Main Content Container */}
      <div className={styles.container}>
        <motion.div
          className={styles.heroContent}
          variants={motionVariants.heroContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* ===========================
              LEFT CONTENT SECTION
              =========================== */}
          <div className={styles.leftContent}>
            {/* Trust Badge */}
            <motion.div
              className={styles.badge}
              variants={motionVariants.heroItem}
            >
              <Shield size={16} />
              <span>Trusted Healthcare Provider</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className={styles.heroTitle}
              variants={motionVariants.heroItem}
            >
              Compassionate{' '}
              <span className={styles.highlightText}>Pediatric Care</span> You
              Can Trust
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              className={styles.heroSubtitle}
              variants={motionVariants.heroItem}
            >
              Providing exceptional healthcare services for children with a
              focus on compassionate care, medical excellence, and
              family-centered approach. Your child's health and happiness is our
              top priority.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
              className={styles.ctaButtons}
              variants={motionVariants.heroItem}
            >
              <motion.button
                className={`${styles.primaryBtn} ${styles.ctaBtn}`}
                onClick={handleAppointmentClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={motionTransitions.smooth}
              >
                <Calendar size={20} />
                Book Appointment
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                className={`${styles.secondaryBtn} ${styles.ctaBtn}`}
                onClick={handleExplorePlans}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={motionTransitions.smooth}
              >
                <Play size={18} />
                Explore Plans
              </motion.button>
            </motion.div>

            {/* Quick Statistics Grid */}
            <motion.div
              className={styles.quickStats}
              variants={motionVariants.heroItem}
            >
              {quickStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className={styles.statItem}
                  whileHover={{ y: -5 }}
                  transition={motionTransitions.quick}
                >
                  <stat.icon size={24} className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ===========================
              RIGHT CONTENT SECTION
              =========================== */}
          <motion.div
            className={styles.rightContent}
            variants={motionVariants.heroItem}
          >
            {/* Doctor Profile Card */}
            <motion.div
              className={styles.doctorCard}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={motionTransitions.smooth}
            >
              {/* Doctor Image Section */}
              <div className={styles.doctorImageContainer}>
                <div className={styles.doctorImage}>
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face&auto=format&q=80"
                    alt="Dr Satya Sadhan Ray - Pediatric Specialist"
                    className={styles.doctorPhoto}
                  />

                  {/* Floating Medical Icons Around Doctor */}
                  <motion.div
                    className={styles.floatingIcon}
                    style={{ top: '10%', right: '10%' }}
                    animate={{
                      y: [-5, 5, -5],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Shield size={24} />
                  </motion.div>

                  <motion.div
                    className={styles.floatingIcon}
                    style={{ bottom: '20%', left: '5%' }}
                    animate={{
                      y: [5, -5, 5],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                  >
                    <Star size={20} />
                  </motion.div>

                  <motion.div
                    className={styles.floatingIcon}
                    style={{ top: '60%', right: '-5%' }}
                    animate={{
                      y: [-3, 3, -3],
                      x: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 2,
                    }}
                  >
                    <Heart size={18} />
                  </motion.div>
                </div>
              </div>

              {/* Doctor Information */}
              <div className={styles.doctorInfo}>
                <h3 className={styles.doctorName}>Dr. Satya Sadhan Ray</h3>
                <p className={styles.doctorSpecialty}>Pediatric Specialist</p>

                {/* Credentials */}
                <div className={styles.doctorCredentials}>
                  <span className={styles.credential}>MBBS, MD Pediatrics</span>
                  <span className={styles.credential}>
                    10+ Years Experience
                  </span>
                </div>

                {/* Rating Section */}
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 1 + i * 0.1 },
                      }}
                    >
                      <Star size={16} className={styles.ratingStarFilled} />
                    </motion.div>
                  ))}
                  <span className={styles.ratingText}>5.0 (500+ reviews)</span>
                </div>
              </div>

              {/* Availability Status Badge */}
              <motion.div
                className={styles.availabilityBadge}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className={styles.statusDot}></div>
                Available Now
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleModalClose}
      />
    </section>
  )
}

export default HeroSection
