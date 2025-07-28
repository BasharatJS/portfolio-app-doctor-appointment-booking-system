'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Calendar,
  Clock,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Users,
  Heart,
  Shield,
  Sparkles,
} from 'lucide-react'
import styles from './DoctorCTA.module.css'
import AppointmentModal from '@/components/modal/AppointmentModal'

// ===========================
// TYPES
// ===========================
interface DoctorCTAProps {
  className?: string
}

interface CTAStat {
  id: string
  icon: React.ElementType
  value: string
  label: string
  color: string
}

// ===========================
// DOCTOR CTA COMPONENT
// ===========================
const DoctorCTA: React.FC<DoctorCTAProps> = ({ className = '' }) => {
  // ===========================
  // HOOKS & STATE
  // ===========================
  const [isVisible, setIsVisible] = useState(false)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // ===========================
  // STATIC DATA
  // ===========================
  const ctaStats: CTAStat[] = [
    {
      id: '1',
      icon: Users,
      value: '1500+',
      label: 'Happy Patients',
      color: '#10b981',
    },
    {
      id: '2',
      icon: Star,
      value: '4.8/5',
      label: 'Patient Rating',
      color: '#fbbf24',
    },
    {
      id: '3',
      icon: Shield,
      value: '15+',
      label: 'Years Experience',
      color: '#0ea5e9',
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

  const handleAppointmentClick = () => {
    setIsAppointmentModalOpen(true)
  }

  const handleModalClose = () => {
    setIsAppointmentModalOpen(false)
  }

  // ===========================
  // RENDER
  // ===========================
  return (
    <section ref={ref} className={`${styles.ctaSection} ${className}`}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.bgShape} ${styles.shape1}`} />
        <div className={`${styles.bgShape} ${styles.shape2}`} />
        <div className={`${styles.bgShape} ${styles.shape3}`} />

        {/* Floating Medical Icons */}
        <motion.div
          className={`${styles.floatingIcon} ${styles.icon1}`}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Heart size={20} />
        </motion.div>

        <motion.div
          className={`${styles.floatingIcon} ${styles.icon2}`}
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles size={18} />
        </motion.div>

        <motion.div
          className={`${styles.floatingIcon} ${styles.icon3}`}
          animate={{
            y: [-8, 8, -8],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Calendar size={22} />
        </motion.div>
      </div>

      {/* Main Container */}
      <div className={styles.container}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            className={styles.ctaBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Calendar size={16} />
            Book Your Consultation
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to Give Your Child the{' '}
            <span className={styles.highlightText}>Best Care?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className={styles.ctaDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Schedule your appointment with Dr. Afroz Ahmed today and take the
            first step towards your child's healthier, happier future. Expert
            care is just one click away.
          </motion.p>

          {/* Stats */}
          {/* <motion.div
            className={styles.ctaStats}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {ctaStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className={styles.statItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div
                  className={styles.statIcon}
                  style={{ backgroundColor: stat.color }}
                >
                  <stat.icon size={20} color="white" />
                </div>
                <div className={styles.statDetails}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Primary Button */}
            <motion.button
              className={`${styles.ctaButton} ${styles.primaryButton}`}
              onClick={handleAppointmentClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar size={20} />
              <span>Book Appointment Now</span>
              <motion.div
                className={styles.buttonArrow}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              className={`${styles.ctaButton} ${styles.secondaryButton}`}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Phone size={18} />
              <span>Call Now</span>
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className={styles.contactItem}>
              <Clock size={16} />
              <span>Available Mon-Sat: 9:00 AM - 6:00 PM</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={16} />
              <span>Institute of Child Health, Kolkata</span>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className={styles.trustIndicators}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className={styles.trustItem}>
              <Shield size={14} />
              <span>Safe & Secure</span>
            </div>
            <div className={styles.trustItem}>
              <Star size={14} />
              <span>Highly Rated</span>
            </div>
            <div className={styles.trustItem}>
              <Heart size={14} />
              <span>Compassionate Care</span>
            </div>
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

export default DoctorCTA
