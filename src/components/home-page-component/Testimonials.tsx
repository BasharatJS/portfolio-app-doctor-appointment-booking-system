'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Calendar,
  User,
} from 'lucide-react'
import { motionVariants, motionTransitions } from '@/types'
import styles from './Testimonials.module.css'
import AppointmentModal from '@/components/modal/AppointmentModal'

interface TestimonialData {
  id: string
  name: string
  avatar?: string
  rating: number
  date: string
  review: string
  platform: 'google' | 'facebook' | 'local'
  verified?: boolean
  relationship?: string // e.g., "Parent of 5-year-old"
}

interface TestimonialsProps {
  className?: string
  autoScrollInterval?: number
  showNavigation?: boolean
}

// Dummy Google Reviews Data
const testimonialData: TestimonialData[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1698510047345-ff32de8a3b74',
    rating: 5,
    date: '2 days ago',
    review:
      'Dr. Afroz is an excellent pediatrician. He is full of academic knowledge as well as with practical experience. He listens to the problem carefully and gives proper guidance. Highly recommended for child care.',
    platform: 'google',
    verified: true,
    relationship: 'Mother of 3-year-old',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    avatar: 'https://images.unsplash.com/photo-1698510047345-ff32de8a3b74',
    rating: 5,
    date: '1 week ago',
    review:
      'Outstanding doctor! My daughter was having recurring fever and Dr. Afroz diagnosed the issue quickly. His treatment approach is very systematic and child-friendly. The clinic environment is also very welcoming.',
    platform: 'google',
    verified: true,
    relationship: 'Father of 7-year-old',
  },
  {
    id: '3',
    name: 'Sneha Patel',
    avatar: 'https://images.unsplash.com/photo-1698510047345-ff32de8a3b74',
    rating: 5,
    date: '2 weeks ago',
    review:
      'Very patient and caring doctor. He explains everything clearly and makes sure we understand the treatment plan. My son feels comfortable during visits. Excellent service and reasonable fees.',
    platform: 'google',
    verified: true,
    relationship: 'Mother of twins (5 years)',
  },
  {
    id: '4',
    name: 'Amit Deshmukh',
    avatar:
      'https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933',
    rating: 5,
    date: '3 weeks ago',
    review:
      'Best pediatrician in Pune! Dr. Afroz has been treating my kids for 2 years now. He is very knowledgeable and always available for emergencies. Highly recommend to all parents.',
    platform: 'google',
    verified: true,
    relationship: 'Father of 2 children',
  },
  {
    id: '5',
    name: 'Kavita Joshi',
    avatar:
      'https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933',
    rating: 5,
    date: '1 month ago',
    review:
      'Excellent experience! Dr. Afroz is very professional and caring. He takes time to explain everything and never rushes. My baby was completely comfortable during the vaccination. Thank you doctor!',
    platform: 'google',
    verified: true,
    relationship: 'Mother of 8-month-old',
  },
  {
    id: '6',
    name: 'Vikram Singh',
    avatar:
      'https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933',
    rating: 5,
    date: '1 month ago',
    review:
      'Dr. Afroz is amazing with children. He has a natural way of making kids feel at ease. His diagnosis is always accurate and treatment is effective. Blessed to have found such a great pediatrician.',
    platform: 'google',
    verified: true,
    relationship: 'Father of 4-year-old',
  },
  {
    id: '7',
    name: 'Amit Malviya',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    rating: 5,
    date: '3 weeks ago',
    review:
      'Best pediatrician in Pune! Dr. Afroz has been treating my kids for 2 years now. He is very knowledgeable and always available for emergencies. Highly recommend to all parents.',
    platform: 'google',
    verified: true,
    relationship: 'Father of 2 children',
  },
  {
    id: '8',
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    rating: 5,
    date: '1 month ago',
    review:
      'Excellent experience! Dr. Afroz is very professional and caring. He takes time to explain everything and never rushes. My baby was completely comfortable during the vaccination. Thank you doctor!',
    platform: 'google',
    verified: true,
    relationship: 'Mother of 8-month-old',
  },
  {
    id: '9',
    name: 'Jakob Lake',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    rating: 5,
    date: '1 month ago',
    review:
      'Dr. Afroz is amazing with children. He has a natural way of making kids feel at ease. His diagnosis is always accurate and treatment is effective. Blessed to have found such a great pediatrician.',
    platform: 'google',
    verified: true,
    relationship: 'Father of 4-year-old',
  },
]

const Testimonials: React.FC<TestimonialsProps> = ({
  className = '',
  autoScrollInterval = 10000,
  showNavigation = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const itemsPerView = 3
  const totalSlides = Math.ceil(testimonialData.length / itemsPerView)

  // Auto scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || isPaused) return

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, autoScrollInterval)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoScrolling, isPaused, totalSlides, autoScrollInterval])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${styles.star} ${
          index < rating ? styles.filled : styles.empty
        }`}
        fill={index < rating ? 'currentColor' : 'none'}
      />
    ))
  }

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * itemsPerView
    return testimonialData.slice(startIndex, startIndex + itemsPerView)
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  const handleAppointmentClick = () => {
    setIsAppointmentModalOpen(true)
  }

  const handleModalClose = () => {
    setIsAppointmentModalOpen(false)
  }

  return (
    <section className={`${styles.testimonialsSection} ${className}`}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headerContent}>
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Star className={styles.badgeIcon} size={16} />
              Patient Reviews
            </motion.div>

            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              What Parents Say About
              <span className={styles.gradientText}> Dr. Satya Sadhan Ray</span>
            </motion.h2>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Real experiences from families who trust us with their children's
              health
            </motion.p>
          </div>

          {/* Google Reviews Integration Info */}
          <motion.div
            className={styles.googleInfo}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className={styles.googleBadge}>
              <div className={styles.googleIcon}>G</div>
              <div className={styles.googleText}>
                <span className={styles.googleTitle}>Google Reviews</span>
                <div className={styles.googleRating}>
                  <div className={styles.googleStars}>{renderStars(5)}</div>
                  <span className={styles.ratingText}>4.9 • 150+ reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className={styles.carouselContainer}>
          {/* Navigation Arrows */}
          {showNavigation && (
            <>
              <motion.button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={handlePrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={motionTransitions.quick}
              >
                <ChevronLeft size={20} />
              </motion.button>

              <motion.button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={motionTransitions.quick}
              >
                <ChevronRight size={20} />
              </motion.button>
            </>
          )}

          {/* Testimonials Grid */}
          <motion.div
            className={styles.testimonialsGrid}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            layout
          >
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  className={styles.testimonialCard}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Quote Icon */}
                  <div className={styles.quoteIcon}>
                    <Quote size={24} />
                  </div>

                  {/* Card Header */}
                  <div className={styles.cardHeader}>
                    <div className={styles.userInfo}>
                      <div className={styles.avatar}>
                        {testimonial.avatar ? (
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        ) : (
                          <div className={styles.avatarPlaceholder}>
                            {getInitials(testimonial.name)}
                          </div>
                        )}
                      </div>
                      <div className={styles.userDetails}>
                        <h4 className={styles.userName}>{testimonial.name}</h4>
                        {testimonial.relationship && (
                          <p className={styles.userRelation}>
                            {testimonial.relationship}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={styles.platformBadge}>
                      <div className={styles.googleIconSmall}>G</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className={styles.rating}>
                    <div className={styles.stars}>
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className={styles.date}>
                      <Calendar size={12} />
                      {testimonial.date}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className={styles.reviewText}>{testimonial.review}</p>

                  {/* Verified Badge */}
                  {testimonial.verified && (
                    <div className={styles.verifiedBadge}>
                      <div className={styles.verifiedIcon}>✓</div>
                      <span>Verified Review</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.active : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className={styles.ctaText}>
            Join hundreds of satisfied families. Experience the best pediatric
            care in Pune.
          </p>
          <motion.button
            className={styles.ctaButton}
            onClick={handleAppointmentClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={motionTransitions.quick}
          >
            Book Your Appointment
          </motion.button>
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

export default Testimonials
