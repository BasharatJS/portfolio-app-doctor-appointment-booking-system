'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { Mail, Menu, X, Sun, Moon, Heart, Calendar, Phone } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import AppointmentModal from '@/components/modal/AppointmentModal'
import styles from './Header.module.css'
import { HeaderProps, motionVariants, motionTransitions } from '@/types'

const Header: React.FC<HeaderProps> = ({ activeNav, onNavChange }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false) // Add modal state
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const navigationItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'ACADEMIC ACTIVITIES', path: '/academic' },
    { label: 'MEDIA COVERAGE', path: '/media' },
    { label: 'ACHIEVEMENTS', path: '/achievements' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'CONTACT US', path: '/contactus' },
    { label: 'BLOG', path: '/blog' },
  ]

  // Consistent contact information
  const contactInfo = {
    email: 'drsatyasadhan1971@gmail.com',
    phone: '+91 9434078214',
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (item: { label: string; path: string }) => {
    router.push(item.path)
    setIsMobileMenuOpen(false)
    onNavChange?.(item.label)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  // Handle appointment modal
  const handleAppointmentClick = () => {
    setIsAppointmentModalOpen(true)
    setIsMobileMenuOpen(false) // Close mobile menu if open
  }

  const handleModalClose = () => {
    setIsAppointmentModalOpen(false)
  }

  return (
    <>
      <motion.header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        variants={motionVariants.header}
        initial="initial"
        animate="animate"
      >
        {/* Main Header */}
        <div className={styles.mainHeader}>
          <div className={styles.container}>
            {/* Left Section - Logo & Name */}
            <motion.div
              className={styles.logoSection}
              whileHover={{ scale: 1.02 }}
              transition={motionTransitions.quick}
              onClick={() => router.push('/')}
            >
              <div className={styles.logoIcon}>
                <Heart size={28} className={styles.heartIcon} />
              </div>
              <div className={styles.clinicName}>
                <h1>Satya Pediatrics</h1>
              </div>
            </motion.div>

            {/* Middle Section - Contact Info */}
            <motion.div
              className={styles.contactSection}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, ...motionTransitions.smooth }}
            >
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={16} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>EMAIL</span>
                  <span className={styles.contactValue}>
                    {contactInfo.email}
                  </span>
                </div>
              </div>
              <div className={styles.contactDivider}></div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={16} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>PHONE</span>
                  <span className={styles.contactValue}>
                    {contactInfo.phone}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Buttons & Theme Toggle */}
            <motion.div
              className={styles.actionsSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, ...motionTransitions.smooth }}
            >
              <motion.button
                className={`${styles.actionBtn} ${styles.chamberBtn}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/chambers')}
              >
                <Calendar size={16} />
                Chamber Details
              </motion.button>

              {/* Updated appointment button to open modal instead of navigation */}
              <motion.button
                className={`${styles.actionBtn} ${styles.appointmentBtn}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAppointmentClick}
              >
                <Phone size={16} />
                Book Appointment
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                className={styles.themeToggle}
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </motion.button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className={styles.mobileMenuToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Navigation Bar */}
        <motion.nav
          className={styles.navigationBar}
          variants={motionVariants.nav}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.containerNav}>
            <div className={styles.navWrapper}>
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  className={`${styles.navItem} ${
                    isActive(item.path) ? styles.active : ''
                  }`}
                  onClick={() => handleNavClick(item)}
                  variants={motionVariants.item}
                  whileHover={{ y: -2 }}
                  transition={motionTransitions.quick}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <div className={styles.activeIndicator}></div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={styles.mobileNav}
              variants={motionVariants.mobileMenu}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className={styles.mobileNavContent}>
                {/* Mobile Contact Info - Now consistent with desktop */}
                <div className={styles.mobileContact}>
                  <div className={styles.mobileContactItem}>
                    <Mail size={16} />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className={styles.mobileContactItem}>
                    <Phone size={16} />
                    <span>{contactInfo.phone}</span>
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                <div className={styles.mobileNavItems}>
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      className={`${styles.mobileNavItem} ${
                        isActive(item.path) ? styles.active : ''
                      }`}
                      onClick={() => handleNavClick(item)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: index * 0.05,
                          ...motionTransitions.smooth,
                        },
                      }}
                      whileHover={{ x: 8 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className={styles.mobileActions}>
                  {/* Updated mobile appointment button to open modal */}
                  <motion.button
                    className={`${styles.mobileActionBtn} ${styles.primary}`}
                    onClick={handleAppointmentClick}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone size={16} />
                    Book Appointment
                  </motion.button>
                  <motion.button
                    className={`${styles.mobileActionBtn} ${styles.secondary}`}
                    onClick={() => {
                      router.push('/chambers')
                      setIsMobileMenuOpen(false)
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Calendar size={16} />
                    Chamber Details
                  </motion.button>
                </div>

                {/* Mobile Theme Toggle */}
                <div className={styles.mobileThemeSection}>
                  <span className={styles.themeLabel}>
                    {theme === 'light' ? 'Light' : 'Dark'} Mode
                  </span>
                  <motion.button
                    className={styles.mobileThemeToggle}
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.05 }}
                  >
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleModalClose}
      />
    </>
  )
}

export default Header
