'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Heart,
  Shield,
  Users,
  Brain,
  Lightbulb,
  Target,
  Smile,
  Clock,
  HandHeart,
  Stethoscope,
  CheckCircle,
  Sparkles,
} from 'lucide-react'
import styles from './TreatmentPhilosophy.module.css'
import { aboutMotionVariants } from '@/types/about'

// ===========================
// TYPES
// ===========================
interface TreatmentPhilosophyProps {
  className?: string
}

interface Philosophy {
  id: string
  title: string
  description: string
  icon: React.ElementType
  color: string
  principles: string[]
}

interface Approach {
  id: string
  title: string
  description: string
  icon: React.ElementType
  color: string
  benefits: string[]
}

interface CoreValue {
  id: string
  title: string
  description: string
  icon: React.ElementType
  color: string
  details: string
}

// ===========================
// TREATMENT PHILOSOPHY COMPONENT
// ===========================
const TreatmentPhilosophy: React.FC<TreatmentPhilosophyProps> = ({
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
  const philosophy: Philosophy = {
    id: '1',
    title: 'Compassionate Care Philosophy',
    description: '', // Removed the long description
    icon: Heart,
    color: '#ea580c',
    principles: [
      'Every child deserves personalized, compassionate care',
      'Families are partners in the healing process',
      'Prevention is as important as treatment',
      'Evidence-based medicine with human touch',
      'Continuous learning and adaptation',
      'Building trust through transparent communication',
      // 'Culturally respectful and inclusive care for all families',
    ],
  }

  const approaches: Approach[] = [
    {
      id: '1',
      title: 'Evidence-Based Medicine',
      description:
        'Combining the latest medical research with clinical expertise to provide the most effective treatments available.',
      icon: Brain,
      color: '#059669',
      benefits: [
        'Latest treatment protocols',
        'Research-backed decisions',
        'Continuous medical education',
        'International best practices',
      ],
    },
    {
      id: '2',
      title: 'Family-Centered Care',
      description:
        "Recognizing that families are essential partners in their child's healthcare journey and recovery process.",
      icon: Users,
      color: '#7c3aed',
      benefits: [
        'Open communication',
        'Family involvement in care plans',
        'Cultural sensitivity',
        'Emotional support',
      ],
    },
  ]

  const coreValues: CoreValue[] = [
    {
      id: '1',
      title: 'Safety First',
      description: 'Patient safety is our top priority',
      icon: Shield,
      color: '#059669',
      details: 'Implementing highest safety standards',
    },
    {
      id: '2',
      title: 'Excellence',
      description: 'Striving for medical excellence',
      icon: Target,
      color: '#0369a1',
      details: 'Continuous improvement in practices',
    },
    {
      id: '3',
      title: 'Empathy',
      description: 'Understanding and caring',
      icon: HandHeart,
      color: '#ea580c',
      details: 'Emotional support for families',
    },
    {
      id: '4',
      title: 'Innovation',
      description: 'Embracing medical innovations',
      icon: Lightbulb,
      color: '#7c3aed',
      details: 'Adopting latest medical technologies',
    },
  ] // Kept 4 core values

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
    <section ref={ref} className={`${styles.philosophySection} ${className}`}>
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
            Our Philosophy
          </motion.div>

          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Treatment Philosophy &{' '}
            <span className={styles.highlightText}>Approach</span>
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
          {/* Philosophy Card */}
          <motion.div
            className={`${styles.philosophyCard} ${styles.card}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <philosophy.icon size={24} />
              </div>
              <h3 className={styles.cardTitle}>{philosophy.title}</h3>
            </div>

            <div className={styles.cardContent}>
              {/* Removed the philosophy description paragraph */}

              <div className={styles.principlesList}>
                <h4 className={styles.listTitle}>
                  <Sparkles size={16} />
                  Core Principles
                </h4>
                {philosophy.principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    className={styles.principleItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <CheckCircle size={16} className={styles.checkIcon} />
                    <span>{principle}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className={styles.hoverEffect}></div>
          </motion.div>

          {/* Approaches Card */}
          <motion.div
            className={`${styles.approachesCard} ${styles.card}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Brain size={24} />
              </div>
              <h3 className={styles.cardTitle}>Treatment Approaches</h3>
            </div>

            <div className={styles.cardContent}>
              {approaches.map((approach, index) => (
                <motion.div
                  key={approach.id}
                  className={styles.approachItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                >
                  <div className={styles.approachHeader}>
                    <div
                      className={styles.approachIcon}
                      style={{ backgroundColor: approach.color }}
                    >
                      <approach.icon size={20} color="white" />
                    </div>
                    <div className={styles.approachInfo}>
                      <h4 className={styles.approachTitle}>{approach.title}</h4>
                      <p className={styles.approachDescription}>
                        {approach.description}
                      </p>
                    </div>
                  </div>

                  <div className={styles.benefitsList}>
                    {approach.benefits.map((benefit, benefitIndex) => (
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
                          duration: 0.3,
                          delay: 1.4 + index * 0.2 + benefitIndex * 0.05,
                        }}
                      >
                        <div
                          className={styles.benefitDot}
                          style={{ backgroundColor: approach.color }}
                        ></div>
                        <span>{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.hoverEffect}></div>
          </motion.div>

          {/* Core Values Card */}
          <motion.div
            className={`${styles.valuesCard} ${styles.card}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Target size={24} />
              </div>
              <h3 className={styles.cardTitle}>Core Values</h3>
            </div>

            <div className={styles.cardContent}>
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.id}
                  className={styles.valueItem}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isVisible
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <div
                    className={styles.valueIcon}
                    style={{ backgroundColor: value.color }}
                  >
                    <value.icon size={24} color="white" />
                  </div>
                  <div className={styles.valueContent}>
                    <h4 className={styles.valueTitle}>{value.title}</h4>
                    <p className={styles.valueDescription}>
                      {value.description}
                    </p>
                    <span className={styles.valueDetails}>{value.details}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.hoverEffect}></div>
          </motion.div>
        </motion.div>

        {/* Bottom Quote Section */}
        <motion.div
          className={styles.quoteSection}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <div className={styles.quote}>
            <div className={styles.quoteIcon}>
              <Smile size={32} />
            </div>
            <blockquote className={styles.quoteText}>
              "Every child deserves the best possible care, delivered with
              compassion, expertise, and hope. Our mission is to not just treat
              illness, but to nurture wellness and bring smiles back to little
              faces."
            </blockquote>
            <cite className={styles.quoteAuthor}>- Dr. Satya Sadha Ray</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TreatmentPhilosophy
