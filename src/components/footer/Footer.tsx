'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Star,
  ExternalLink,
  ArrowRight,
} from 'lucide-react'
import {
  footerContainerVariants,
  footerColumnVariants,
  footerItemVariants,
  footerSocialVariants,
  footerBottomVariants,
  FooterProps,
  SocialLink,
  QuickLink,
  AddressInfo,
} from '@/types'
import styles from './Footer.module.css'

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const router = useRouter()

  const socialLinks: SocialLink[] = [
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://facebook.com/afrozpediatrics',
      icon: Facebook,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com/afrozpediatrics',
      icon: Instagram,
    },
    {
      id: 'twitter',
      name: 'Twitter',
      url: 'https://twitter.com/afrozpediatrics',
      icon: Twitter,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/afrozahmed',
      icon: Linkedin,
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: 'https://youtube.com/afrozpediatrics',
      icon: Youtube,
    },
  ]

  const quickLinks: QuickLink[] = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Dr. Afroz', path: '/about' },
    { id: 'services', label: 'Our Services', path: '/services' },
    { id: 'appointment', label: 'Book Appointment', path: '/appointment' },
    { id: 'chamber', label: 'Chamber Details', path: '/chamber-details' },
    { id: 'academic', label: 'Academic Activities', path: '/academic' },
    { id: 'media', label: 'Media Coverage', path: '/media' },
    { id: 'gallery', label: 'Photo Gallery', path: '/gallery' },
    { id: 'faq', label: 'FAQ', path: '/faq' },
    { id: 'contact', label: 'Contact Us', path: '/contactus' },
  ]

  const addressInfo: AddressInfo[] = [
    {
      id: 'location',
      type: 'location',
      label: 'Clinic Address',
      value:
        '123 Medical Center, Sector 15, Kolkata, West Bengal 700001, India',
      icon: MapPin,
    },
    {
      id: 'phone',
      type: 'phone',
      label: 'Phone Number',
      value: '+91 98765 43210',
      icon: Phone,
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email Address',
      value: 'afroz@gmail.com',
      icon: Mail,
    },
  ]

  const handleLinkClick = (path: string) => {
    router.push(path)
  }

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleGoogleReview = () => {
    window.open(
      'https://g.page/r/afrozpediatrics/review',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <footer ref={ref} className={`${styles.footer} ${className}`}>
      {/* Background Pattern */}
      <div className={styles.backgroundPattern} />

      {/* Main Footer Content */}
      <motion.div
        className={styles.footerMain}
        variants={footerContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Logo Column */}
            <motion.div
              className={styles.logoColumn}
              variants={footerColumnVariants}
            >
              <motion.div
                className={styles.logoSection}
                variants={footerItemVariants}
              >
                <motion.div
                  className={styles.logoIcon}
                  whileHover={{ y: -4, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart size={24} />
                </motion.div>
                <h2 className={styles.clinicName}>
                  <span className={styles.clinicNameAfroz}>Afroz </span>
                  <span className={styles.clinicNamePediatrics}>
                    Pediatrics
                  </span>
                </h2>
              </motion.div>

              <motion.div
                className={styles.doctorInfo}
                variants={footerItemVariants}
              >
                <h3 className={styles.doctorName}>Dr. Afroz Ahmed</h3>
                <p className={styles.doctorTitle}>
                  MBBS, MD (Pediatrics)
                  <br />
                  Consultant Pediatrician & Child Specialist
                  <br />
                  15+ Years of Experience in Child Healthcare
                </p>
              </motion.div>

              <motion.div
                className={styles.socialLinks}
                variants={footerItemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.id}
                    className={styles.socialLink}
                    onClick={() => handleSocialClick(social.url)}
                    variants={footerSocialVariants}
                    custom={index}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <social.icon size={20} />
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              className={styles.quickLinksColumn}
              variants={footerColumnVariants}
            >
              <motion.h3
                className={styles.columnTitle}
                variants={footerItemVariants}
              >
                Quick Links
              </motion.h3>
              <motion.div
                className={styles.linksList}
                variants={footerItemVariants}
              >
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    className={styles.footerLink}
                    onClick={() => handleLinkClick(link.path)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      delay: 0.5 + index * 0.05,
                      duration: 0.5,
                    }}
                    whileHover={{ x: 8 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* Address Column */}
            <motion.div
              className={styles.addressColumn}
              variants={footerColumnVariants}
            >
              <motion.h3
                className={styles.columnTitle}
                variants={footerItemVariants}
              >
                Contact Information
              </motion.h3>
              <motion.div
                className={styles.addressList}
                variants={footerItemVariants}
              >
                {addressInfo.map((info, index) => (
                  <motion.div
                    key={info.id}
                    className={styles.addressItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      delay: 0.6 + index * 0.1,
                      duration: 0.5,
                    }}
                    whileHover={{ y: -2 }}
                  >
                    <div className={styles.addressIcon}>
                      <info.icon size={20} />
                    </div>
                    <div className={styles.addressText}>
                      <span className={styles.addressLabel}>{info.label}</span>
                      <span className={styles.addressValue}>{info.value}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Google Reviews Column */}
            <motion.div
              className={styles.reviewsColumn}
              variants={footerColumnVariants}
            >
              <motion.h3
                className={styles.columnTitle}
                variants={footerItemVariants}
              >
                Patient Reviews
              </motion.h3>
              <motion.div
                className={styles.reviewsCard}
                variants={footerItemVariants}
                whileHover={{ y: -4 }}
              >
                <div className={styles.reviewsHeader}>
                  <div className={styles.googleIcon}>
                    <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                      G
                    </span>
                  </div>
                  <h4 className={styles.reviewsTitle}>Google Reviews</h4>
                </div>

                <div className={styles.reviewStats}>
                  <div className={styles.starRating}>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          delay: 1 + i * 0.1,
                          type: 'spring',
                          stiffness: 200,
                        }}
                      >
                        <Star
                          size={16}
                          className={styles.star}
                          fill="currentColor"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <span className={styles.reviewScore}>4.9</span>
                  <span className={styles.reviewCount}>(150+ reviews)</span>
                </div>

                <motion.button
                  className={styles.reviewButton}
                  onClick={handleGoogleReview}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Write a Review</span>
                  <ExternalLink size={16} />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className={styles.footerBottom}
        variants={footerBottomVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className={styles.container}>
          <div className={styles.footerBottomContent}>
            <motion.p
              className={styles.copyright}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              © 2024 Afroz Pediatrics. All rights reserved.
            </motion.p>
            <motion.div
              className={styles.footerBottomLinks}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <button
                className={styles.footerBottomLink}
                onClick={() => handleLinkClick('/privacy-policy')}
              >
                Privacy Policy
              </button>
              <button
                className={styles.footerBottomLink}
                onClick={() => handleLinkClick('/terms-of-service')}
              >
                Terms of Service
              </button>
              <button
                className={styles.footerBottomLink}
                onClick={() => handleLinkClick('/disclaimer')}
              >
                Medical Disclaimer
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
