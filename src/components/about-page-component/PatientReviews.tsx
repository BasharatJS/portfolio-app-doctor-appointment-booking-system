'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Star,
  Heart,
  MessageCircle,
  ThumbsUp,
  Award,
  Users,
  Clock,
  CheckCircle,
  Quote,
  Sparkles,
} from 'lucide-react'
import styles from './PatientReviews.module.css'
import { aboutMotionVariants } from '@/types/about'

// ===========================
// TYPES
// ===========================
interface PatientReviewsProps {
  className?: string
}

interface Review {
  id: string
  patientName: string
  patientAge: string
  condition: string
  rating: number
  review: string
  date: string
  verified: boolean
  helpful: number
}

interface Stats {
  id: string
  icon: React.ElementType
  value: string
  label: string
  color: string
  description: string
}

interface Rating {
  stars: number
  count: number
  percentage: number
}

// ===========================
// PATIENT REVIEWS COMPONENT
// ===========================
const PatientReviews: React.FC<PatientReviewsProps> = ({ className = '' }) => {
  // ===========================
  // HOOKS & STATE
  // ===========================
  const [isVisible, setIsVisible] = useState(false)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // ===========================
  // STATIC DATA
  // ===========================
  const overallRating = 4.8
  const totalReviews = 847

  const ratingBreakdown: Rating[] = [
    { stars: 5, count: 678, percentage: 80 },
    { stars: 4, count: 127, percentage: 15 },
    { stars: 3, count: 25, percentage: 3 },
    { stars: 2, count: 12, percentage: 1.5 },
    { stars: 1, count: 5, percentage: 0.5 },
  ]

  const stats: Stats[] = [
    {
      id: '1',
      icon: Users,
      value: '847',
      label: 'Total Reviews',
      color: '#059669',
      description: 'Patient feedback received',
    },
    {
      id: '2',
      icon: Heart,
      value: '98%',
      label: 'Satisfaction Rate',
      color: '#ea580c',
      description: 'Patients would recommend',
    },
    {
      id: '3',
      icon: Award,
      value: '4.8/5',
      label: 'Average Rating',
      color: '#7c3aed',
      description: 'Overall patient rating',
    },
  ]

  // Only one featured review now
  const featuredReviews: Review[] = [
    {
      id: '1',
      patientName: 'Sarah M.',
      patientAge: 'Mother of 7-year-old',
      condition: 'Pediatric Rheumatology',
      rating: 5,
      review:
        "Dr. Ahmed saved my daughter's life. She was suffering from juvenile arthritis and no one could diagnose properly. Dr. Ahmed not only diagnosed correctly but also provided excellent treatment. My daughter is now living a normal, happy life.",
      date: '2 weeks ago',
      verified: true,
      helpful: 24,
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
  // RENDER STARS
  // ===========================
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${styles.star} ${
          index < rating ? styles.filled : styles.empty
        }`}
        fill={index < rating ? '#fbbf24' : 'none'}
      />
    ))
  }

  // ===========================
  // RENDER
  // ===========================
  return (
    <section ref={ref} className={`${styles.reviewsSection} ${className}`}>
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
            <MessageCircle size={16} />
            Patient Feedback
          </motion.div>

          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            What Patients{' '}
            <span className={styles.highlightText}>Say About Us</span>
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
          {/* Overall Rating Card */}
          <motion.div
            className={`${styles.ratingCard} ${styles.card}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Star size={24} />
              </div>
              <h3 className={styles.cardTitle}>Overall Rating</h3>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.overallRating}>
                <div className={styles.ratingNumber}>{overallRating}</div>
                <div className={styles.ratingInfo}>
                  <div className={styles.stars}>
                    {renderStars(Math.floor(overallRating))}
                  </div>
                  <p className={styles.totalReviews}>
                    Based on {totalReviews} reviews
                  </p>
                </div>
              </div>

              <div className={styles.ratingBreakdown}>
                {ratingBreakdown.map((rating, index) => (
                  <motion.div
                    key={rating.stars}
                    className={styles.ratingRow}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <span className={styles.starCount}>{rating.stars}</span>
                    <Star
                      size={14}
                      className={styles.starIcon}
                      fill="#fbbf24"
                    />
                    <div className={styles.progressBar}>
                      <motion.div
                        className={styles.progressFill}
                        initial={{ width: 0 }}
                        animate={
                          isVisible
                            ? { width: `${rating.percentage}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                      />
                    </div>
                    <span className={styles.count}>{rating.count}</span>
                  </motion.div>
                ))}
              </div>

              {/* Rating Summary */}
              <motion.div
                className={styles.ratingSummary}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <div className={styles.summaryContent}>
                  <div className={styles.summaryStats}>
                    <div className={styles.summaryItem}>
                      <Sparkles size={16} className={styles.summaryIcon} />
                      <span className={styles.summaryText}>
                        Excellent Patient Care
                      </span>
                    </div>
                    <div className={styles.summaryItem}>
                      <Heart size={16} className={styles.summaryIcon} />
                      <span className={styles.summaryText}>
                        Highly Recommended
                      </span>
                    </div>
                  </div>
                  <p className={styles.summaryNote}>
                    Based on verified patient feedback and treatment outcomes
                  </p>
                </div>
              </motion.div>
            </div>
            <div className={styles.hoverEffect}></div>
          </motion.div>

          {/* Statistics Card */}
          <motion.div
            className={`${styles.statsCard} ${styles.card}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Award size={24} />
              </div>
              <h3 className={styles.cardTitle}>Patient Statistics</h3>
            </div>

            <div className={styles.cardContent}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <div
                    className={styles.statIcon}
                    style={{ backgroundColor: stat.color }}
                  >
                    <stat.icon size={20} color="white" />
                  </div>
                  <div className={styles.statDetails}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                    <div className={styles.statDescription}>
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.hoverEffect}></div>
          </motion.div>

          {/* Featured Reviews Card */}
          <motion.div
            className={`${styles.reviewsCard} ${styles.card}`}
            variants={aboutMotionVariants.aboutCard}
            whileHover="hover"
            initial="rest"
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Quote size={24} />
              </div>
              <h3 className={styles.cardTitle}>Featured Reviews</h3>
            </div>

            <div className={styles.cardContent}>
              {featuredReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className={styles.reviewItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <div className={styles.reviewHeader}>
                    <div className={styles.patientInfo}>
                      <div className={styles.patientName}>
                        {review.patientName}
                        {review.verified && (
                          <CheckCircle
                            size={14}
                            className={styles.verifiedIcon}
                          />
                        )}
                      </div>
                      <div className={styles.patientDetails}>
                        {review.patientAge} • {review.condition}
                      </div>
                    </div>
                    <div className={styles.reviewRating}>
                      {renderStars(review.rating)}
                    </div>
                  </div>

                  <p className={styles.reviewText}>"{review.review}"</p>

                  <div className={styles.reviewFooter}>
                    <span className={styles.reviewDate}>
                      <Clock size={12} />
                      {review.date}
                    </span>
                    <span className={styles.helpful}>
                      <ThumbsUp size={12} />
                      {review.helpful} found helpful
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Google Review Link */}
              <motion.div
                className={styles.googleReviewLink}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <div className={styles.googleReviewContent}>
                  <div className={styles.googleIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                  <div className={styles.googleReviewText}>
                    <h4>Share Your Experience</h4>
                    <p>
                      Help other families by sharing your experience with Dr.
                      Ahmed
                    </p>
                    <a
                      href="https://g.page/r/CdGoogleReviewLink/review"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.googleReviewButton}
                    >
                      Write a Google Review
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className={styles.hoverEffect}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PatientReviews
