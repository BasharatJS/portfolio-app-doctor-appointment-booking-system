'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Award,
  Calendar,
  Users,
  Heart,
  Shield,
  Star,
  CheckCircle,
  Clock,
  Stethoscope, // NEW: Changed from Activity to Stethoscope
  Phone, // NEW: For Emergency Care
  MapPin, // NEW: For Convenient Location
} from 'lucide-react'
import styles from './WhyChooseUs.module.css'
import {
  WhyChooseUsProps,
  WhyChooseUsFeature,
  motionVariants,
  motionTransitions,
} from '@/types'

// ===========================
// WHY CHOOSE US COMPONENT
// ===========================
const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ className = '' }) => {
  // ===========================
  // HOOKS & STATE
  // ===========================
  const [isVisible, setIsVisible] = useState(false)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // ===========================
  // STATIC DATA - EXPANDED TO 6 CARDS
  // ===========================
  const features: WhyChooseUsFeature[] = [
    {
      id: 'experienced',
      icon: Award,
      title: 'Experienced Doctor',
      description:
        'Dr. Afroz brings over 10+ years of specialized pediatric expertise with proven track record in child healthcare.',
      stats: '10+ Years',
      color: '#059669',
      colorClass: 'green',
      benefits: [
        'MBBS, MD Pediatrics',
        'Specialized Training',
        'Continuous Learning',
      ],
    },
    {
      id: 'booking',
      icon: Calendar,
      title: 'Online Booking',
      description:
        'Schedule appointments effortlessly with our user-friendly online booking system available 24/7 for your convenience.',
      stats: '24/7 Available',
      color: '#0369a1',
      colorClass: 'blue',
      benefits: [
        'Instant Confirmation',
        'Flexible Scheduling',
        'Easy Rescheduling',
      ],
    },
    {
      id: 'trusted',
      icon: Users,
      title: 'Trusted by Thousands',
      description:
        "Join our community of 500+ satisfied families who trust us with their children's health and wellbeing.",
      stats: '500+ Families',
      color: '#7c3aed',
      colorClass: 'purple',
      benefits: ['High Success Rate', 'Positive Reviews', 'Family Referrals'],
    },
    {
      id: 'childcare',
      icon: Heart,
      title: 'Child-Friendly Care',
      description:
        'Creating a warm, welcoming environment where children feel safe and comfortable during their medical visits.',
      stats: '98% Comfort',
      color: '#ea580c',
      colorClass: 'orange',
      benefits: [
        'Gentle Approach',
        'Kid-Friendly Environment',
        'Parent Involvement',
      ],
    },
    // NEW: 5th Card - Emergency Care
    {
      id: 'emergency',
      icon: Phone,
      title: 'Emergency Support',
      description:
        'Round-the-clock emergency consultation and guidance for urgent pediatric concerns and health emergencies.',
      stats: '24/7 Support',
      color: '#dc2626',
      colorClass: 'red',
      benefits: [
        'Immediate Response',
        'Expert Guidance',
        'Emergency Protocols',
      ],
    },
    // NEW: 6th Card - Convenient Location
    {
      id: 'location',
      icon: MapPin,
      title: 'Convenient Location',
      description:
        'Easily accessible clinic location with ample parking, public transport connectivity, and modern facilities.',
      stats: 'Prime Location',
      color: '#059669',
      colorClass: 'teal',
      benefits: ['Easy Accessibility', 'Ample Parking', 'Modern Facilities'],
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
  // ANIMATION VARIANTS
  // ===========================
  const containerVariants = motionVariants.whyChooseUsContainer
  const cardVariants = motionVariants.whyChooseUsCard

  // ===========================
  // RENDER
  // ===========================
  return (
    <section ref={ref} className={`${styles.whyChooseUsSection} ${className}`}>
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
          {/* Section Badge */}
          <motion.div
            className={styles.sectionBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Shield size={16} />
            Why Choose Afroz Pediatrics
          </motion.div>

          {/* NEW: Rotating Medical Icon */}
          <motion.div
            className={styles.headerIcon}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className={styles.rotatingIcon}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Stethoscope size={40} />
            </motion.div>
          </motion.div>

          {/* UPDATED: Title Container with Gradient Line */}
          <div className={styles.titleContainer}>
            {/* Main Title */}
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Excellence in{' '}
              <span className={styles.highlightText}>Pediatric Care</span>
            </motion.h2>

            {/* NEW: Gradient Line */}
            <motion.div
              className={styles.titleGradientLine}
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
          </div>

          {/* Subtitle */}
          <motion.p
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Discover what makes our pediatric practice the preferred choice for
            families seeking exceptional healthcare for their children.
          </motion.p>
        </motion.div>

        {/* Features Grid - Updated for 6 Cards */}
        <motion.div
          className={styles.featuresGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              className={styles.cardWrapper}
            >
              <motion.div
                className={`${styles.featureCard} ${
                  styles[
                    `card${
                      feature.colorClass.charAt(0).toUpperCase() +
                      feature.colorClass.slice(1)
                    }`
                  ]
                }`}
                variants={motionVariants.whyChooseUsCardHover}
                initial="rest"
                whileHover="hover"
              >
                {/* Background Glow Effect */}
                <motion.div
                  className={`${styles.cardGlow} ${
                    styles[
                      `glow${
                        feature.colorClass.charAt(0).toUpperCase() +
                        feature.colorClass.slice(1)
                      }`
                    ]
                  }`}
                  variants={motionVariants.whyChooseUsGlow}
                />

                {/* Card Content */}
                <div className={styles.cardContent}>
                  {/* Icon Section */}
                  <div className={styles.iconSection}>
                    <motion.div
                      className={`${styles.iconWrapper} ${
                        styles[
                          `icon${
                            feature.colorClass.charAt(0).toUpperCase() +
                            feature.colorClass.slice(1)
                          }`
                        ]
                      }`}
                      variants={motionVariants.whyChooseUsIcon}
                    >
                      <feature.icon size={28} color="white" />
                    </motion.div>

                    {/* Stats Badge */}
                    <div
                      className={`${styles.statsBadge} ${
                        styles[
                          `stats${
                            feature.colorClass.charAt(0).toUpperCase() +
                            feature.colorClass.slice(1)
                          }`
                        ]
                      }`}
                      style={{ color: feature.color }}
                    >
                      {feature.stats}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={styles.cardTitle}>{feature.title}</h3>

                  {/* Description */}
                  <p className={styles.cardDescription}>
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className={styles.benefitsList}>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefitIndex}
                        className={styles.benefitItem}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          isVisible
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: 0.6 + index * 0.1 + benefitIndex * 0.1,
                        }}
                      >
                        <CheckCircle size={16} color={feature.color} />
                        <span className={styles.benefitText}>{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating Icon */}
                <motion.div
                  className={`${styles.floatingIcon} ${
                    styles[
                      `floating${
                        feature.colorClass.charAt(0).toUpperCase() +
                        feature.colorClass.slice(1)
                      }`
                    ]
                  }`}
                  animate={{
                    y: [-2, 2, -2],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Star size={16} color={feature.color} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Clock size={24} className={styles.ctaIcon} />
          <h3 className={styles.ctaTitle}>
            Ready to Experience the Difference?
          </h3>
          <p className={styles.ctaDescription}>
            Join hundreds of families who trust us with their children's health
            and wellbeing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
