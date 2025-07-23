'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Stethoscope,
  Shield,
  HeartPulse,
  Apple,
  Activity,
  Baby,
  Sparkles,
  ArrowRight,
  Plus,
} from 'lucide-react'
import {
  treatmentContainerVariants,
  treatmentCardVariants,
  treatmentHeaderVariants,
  treatmentIconVariants,
  treatmentFeatureVariants,
  Treatment,
  TreatmentsOfferedProps,
} from '@/types'
import styles from './Treatments.module.css'

const TreatmentsOffered: React.FC<TreatmentsOfferedProps> = ({
  className = '',
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const treatments: Treatment[] = [
    {
      id: 'routine',
      title: 'Routine Check-ups',
      description:
        "Comprehensive health monitoring to track your child's development and growth milestones with regular assessments.",
      icon: Stethoscope,
      colorVariant: 'green',
      features: [
        'Growth Tracking',
        'Development Assessment',
        'Health Screening',
      ],
    },
    {
      id: 'vaccination',
      title: 'Vaccination Programs',
      description:
        'Complete immunization schedules to protect your child against preventable diseases and ensure timely vaccinations.',
      icon: Shield,
      colorVariant: 'blue',
      features: [
        'Scheduled Vaccines',
        'Travel Immunizations',
        'Catch-up Schedules',
      ],
    },
    {
      id: 'illnesses',
      title: 'Pediatric Illnesses',
      description:
        'Expert diagnosis and treatment for common childhood conditions, infections, fevers, and urgent health concerns.',
      icon: HeartPulse,
      colorVariant: 'orange',
      features: ['Fever Management', 'Respiratory Care', 'Infection Treatment'],
    },
    {
      id: 'nutrition',
      title: 'Nutritional Guidance',
      description:
        'Personalized dietary planning and nutrition counseling for optimal child development and healthy eating habits.',
      icon: Apple,
      colorVariant: 'red',
      features: ['Diet Planning', 'Growth Support', 'Allergy Management'],
    },
    {
      id: 'intensive',
      title: 'Pediatric Intensive Care',
      description:
        'Advanced critical care services for children with severe and life-threatening conditions requiring specialized treatment.',
      icon: Activity,
      colorVariant: 'purple',
      features: ['Critical Care', '24/7 Monitoring', 'Emergency Response'],
    },
    {
      id: 'newborn',
      title: 'Newborn Care',
      description:
        'Comprehensive care for newborns including feeding guidance, sleep patterns, and early health monitoring for healthy development.',
      icon: Baby,
      colorVariant: 'pink',
      features: ['Feeding Support', 'Sleep Guidance', 'Health Monitoring'],
    },
  ]

  return (
    <section ref={ref} className={`${styles.treatmentsSection} ${className}`}>
      {/* Background Elements */}
      <div className={styles.backgroundPattern} />
      <div className={styles.floatingOrbs}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          variants={treatmentHeaderVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Badge */}
          <motion.div
            className={styles.sectionBadge}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Sparkles size={16} />
            <span>Comprehensive Healthcare</span>
          </motion.div>

          {/* Title */}
          <motion.h2 className={styles.title}>
            Treatments We <span className={styles.gradientText}>Offer</span>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            className={styles.titleGradientLine}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
          />

          <motion.p className={styles.subtitle}>
            Here are the comprehensive treatments offered by our expert
            pediatricians for your child's optimal health, growth, and
            development.
          </motion.p>
        </motion.div>

        {/* Treatment Cards Grid */}
        <motion.div
          className={styles.treatmentsGrid}
          variants={treatmentContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              variants={treatmentCardVariants}
              className={`${styles.treatmentCard} ${
                styles[treatment.colorVariant]
              }`}
              onHoverStart={() => setHoveredCard(treatment.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              {/* Card glow effect */}
              <div className={styles.cardGlow} />

              {/* Icon */}
              <motion.div
                className={styles.iconContainer}
                variants={treatmentIconVariants}
                initial="rest"
                animate={hoveredCard === treatment.id ? 'hover' : 'rest'}
              >
                <treatment.icon size={28} />
              </motion.div>

              {/* Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.treatmentTitle}>{treatment.title}</h3>

                <p className={styles.treatmentDescription}>
                  {treatment.description}
                </p>

                {/* Features */}
                <div className={styles.features}>
                  {treatment.features.map((feature: string, idx: number) => (
                    <motion.div
                      key={idx}
                      className={styles.feature}
                      variants={treatmentFeatureVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      transition={{ delay: 0.5 + index * 0.1 + idx * 0.1 }}
                    >
                      <div className={styles.featureDot} />
                      <span className={styles.featureText}>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={styles.ctaButton}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={hoveredCard === treatment.id ? { x: 4 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button>
              </div>

              {/* Floating elements */}
              <motion.div
                className={styles.floatingElement}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className={styles.bottomCtaCard}>
            <Plus size={20} />
            <p className={styles.bottomCtaText}>
              Need specialized care?
              <a href="#contact" className={styles.bottomCtaLink}>
                Contact our experts
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TreatmentsOffered
