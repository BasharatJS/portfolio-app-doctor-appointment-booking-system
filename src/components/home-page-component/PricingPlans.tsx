'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Check,
  Star,
  Zap,
  Crown,
  Video,
  MessageCircle,
  Bell,
  Smartphone,
  BarChart3,
  Calendar,
  User,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
  Gift,
} from 'lucide-react'
import { containerVariants, fadeInVariants, cardHoverVariants } from '@/types'
import styles from './PricingPlans.module.css'

interface PricingPlansProps {
  className?: string
}

interface PlanFeature {
  text: string
  icon: React.ElementType
  included: boolean
}

interface PricingPlan {
  id: string
  name: string
  tagline: string
  price: string
  originalPrice?: string
  discount?: string
  period: string
  icon: React.ElementType
  popular?: boolean
  premium?: boolean
  features: PlanFeature[]
  buttonText: string
  gradient: string
  glowColor: string
}

const PricingPlans: React.FC<PricingPlansProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const plans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Basic Care',
      tagline: 'Perfect for new patients',
      price: '₹499',
      period: '/month',
      icon: User,
      features: [
        { text: 'Patient Profile Management', icon: User, included: true },
        {
          text: 'Limited Appointments (5/month)',
          icon: Calendar,
          included: true,
        },
        { text: 'Basic Health Records', icon: Shield, included: true },
        { text: 'Email Support', icon: MessageCircle, included: true },
        { text: 'Video Consultations', icon: Video, included: false },
        { text: 'Live Chat Support', icon: MessageCircle, included: false },
        { text: 'Mobile App Access', icon: Smartphone, included: false },
        { text: 'Analytics Dashboard', icon: BarChart3, included: false },
      ],
      buttonText: 'Get Started',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      glowColor: '#10b981',
    },
    {
      id: 'standard',
      name: 'Standard Care',
      tagline: 'Most popular choice',
      price: '₹999',
      originalPrice: '₹1,299',
      discount: '25% OFF',
      period: '/month',
      icon: Video,
      popular: true,
      features: [
        { text: 'Everything in Basic', icon: Check, included: true },
        { text: 'Unlimited Appointments', icon: Calendar, included: true },
        { text: 'HD Video Consultations', icon: Video, included: true },
        { text: 'Priority Scheduling', icon: Clock, included: true },
        { text: 'Advanced Health Reports', icon: Shield, included: true },
        { text: 'Phone Support', icon: MessageCircle, included: true },
        { text: 'Live Chat Support', icon: MessageCircle, included: false },
        { text: 'Mobile App Access', icon: Smartphone, included: false },
      ],
      buttonText: 'Most Popular',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
      glowColor: '#0ea5e9',
    },
    {
      id: 'premium',
      name: 'Premium Care',
      tagline: 'Complete healthcare solution',
      price: '₹1,999',
      originalPrice: '₹2,499',
      discount: '20% OFF',
      period: '/month',
      icon: Crown,
      premium: true,
      features: [
        { text: 'Everything in Standard', icon: Check, included: true },
        { text: '24/7 Live Chat Support', icon: MessageCircle, included: true },
        { text: 'Push Notifications', icon: Bell, included: true },
        { text: 'Mobile App Access', icon: Smartphone, included: true },
        {
          text: 'Advanced Analytics Dashboard',
          icon: BarChart3,
          included: true,
        },
        { text: 'AI Health Insights', icon: Sparkles, included: true },
        { text: 'Family Health Management', icon: User, included: true },
        { text: 'Dedicated Account Manager', icon: Crown, included: true },
      ],
      buttonText: 'Go Premium',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
      glowColor: '#a855f7',
    },
  ]

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  return (
    <section ref={ref} className={`${styles.pricingSection} ${className}`}>
      {/* Background Elements */}
      <div className={styles.backgroundPattern} />
      <div className={styles.floatingOrbs}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Header Section */}
          <motion.div className={styles.header} variants={fadeInVariants}>
            {/* NEW: Section Badge */}
            <motion.div
              className={styles.sectionBadge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isVisible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Shield size={16} />
              Premium Healthcare Solutions
            </motion.div>

            <motion.div
              className={styles.headerIcon}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Zap size={40} />
            </motion.div>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>
                Choose Your{' '}
                <span className={styles.gradientText}>Healthcare Plan</span>
              </h2>
              {/* Gradient Line */}
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
            <p className={styles.subtitle}>
              Select the perfect plan for your healthcare needs. Upgrade or
              downgrade at any time.
            </p>
            <motion.div
              className={styles.trustBadge}
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            >
              <Shield size={16} />
              <span>Trusted by 10,000+ patients</span>
            </motion.div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div className={styles.plansGrid} variants={fadeInVariants}>
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`${styles.planCard} ${
                  plan.popular ? styles.popular : ''
                } ${plan.premium ? styles.premium : ''}`}
                variants={cardHoverVariants}
                initial="initial"
                animate="initial"
                whileHover="hover"
                onHoverStart={() => setHoveredPlan(plan.id)}
                onHoverEnd={() => setHoveredPlan(null)}
                style={
                  {
                    '--plan-gradient': plan.gradient,
                    '--glow-color': plan.glowColor,
                  } as React.CSSProperties
                }
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    className={styles.popularBadge}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    <Star size={16} />
                    <span>Most Popular</span>
                  </motion.div>
                )}

                {/* Premium Badge */}
                {plan.premium && (
                  <motion.div
                    className={styles.premiumBadge}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    <Crown size={16} />
                    <span>Premium</span>
                  </motion.div>
                )}

                {/* Discount Badge */}
                {plan.discount && (
                  <motion.div
                    className={styles.discountBadge}
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7 + index * 0.2, type: 'spring' }}
                  >
                    <Gift size={14} />
                    <span>{plan.discount}</span>
                  </motion.div>
                )}

                <div className={styles.cardHeader}>
                  <motion.div
                    className={styles.planIcon}
                    animate={
                      hoveredPlan === plan.id
                        ? {
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.1, 1],
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <plan.icon size={32} />
                  </motion.div>

                  <div className={styles.planInfo}>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <p className={styles.planTagline}>{plan.tagline}</p>
                  </div>
                </div>

                <div className={styles.pricing}>
                  {plan.originalPrice && (
                    <span className={styles.originalPrice}>
                      {plan.originalPrice}
                    </span>
                  )}
                  <div className={styles.currentPrice}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </div>
                </div>

                <div className={styles.features}>
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className={`${styles.feature} ${
                        !feature.included ? styles.disabled : ''
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isVisible
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{
                        delay: 1 + index * 0.1 + featureIndex * 0.05,
                      }}
                    >
                      <div className={styles.featureIcon}>
                        {feature.included ? (
                          <Check size={16} />
                        ) : (
                          <feature.icon size={16} />
                        )}
                      </div>
                      <span className={styles.featureText}>{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className={styles.ctaButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div className={styles.bottomCta} variants={fadeInVariants}>
            <p>
              Need a custom plan? <a href="#contact">Contact us</a> for
              enterprise solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingPlans
