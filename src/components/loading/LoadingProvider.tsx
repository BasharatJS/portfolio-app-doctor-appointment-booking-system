'use client'

import React, { useState, useEffect } from 'react'
import { Heart, Stethoscope, Shield, Activity, Baby } from 'lucide-react'
import styles from './LoadingScreen.module.css'

interface LoadingProviderProps {
  children: React.ReactNode
}

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('hasVisited')

    if (hasVisited) {
      setIsLoading(false)
      return
    }

    // Set loading duration (3.5 seconds)
    const timer = setTimeout(() => {
      setIsExiting(true)
      // Wait for exit animation to complete
      setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem('hasVisited', 'true')
      }, 800) // Match the exit animation duration
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) {
    return <>{children}</>
  }

  return (
    <div
      className={`${styles.loadingScreen} ${isExiting ? styles.exiting : ''}`}
    >
      {/* Background Animated Elements */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.floatingOrb} ${styles.orb1}`}></div>
        <div className={`${styles.floatingOrb} ${styles.orb2}`}></div>
        <div className={`${styles.floatingOrb} ${styles.orb3}`}></div>
      </div>

      {/* Medical Icons */}
      <div className={styles.medicalIcons}>
        <div className={`${styles.medicalIcon} ${styles.icon1}`}>
          <Stethoscope size={40} />
        </div>
        <div className={`${styles.medicalIcon} ${styles.icon2}`}>
          <Heart size={35} />
        </div>
        <div className={`${styles.medicalIcon} ${styles.icon3}`}>
          <Shield size={38} />
        </div>
        <div className={`${styles.medicalIcon} ${styles.icon4}`}>
          <Activity size={42} />
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <Baby size={40} />
          </div>
        </div>

        {/* Title with proper gap */}
        <h1 className={styles.title}>
          <span className={styles.titleAfroz}>Dr. Satya</span>
          <span className={styles.titlePediatrics}>Pediatrics</span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          Compassionate Pediatric Care for Your Child
        </p>

        {/* Loading Animation */}
        <div className={styles.loadingAnimation}>
          {/* Pulse Dots */}
          <div className={styles.pulseDots}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}></div>
          </div>

          {/* Loading Text */}
          <p className={styles.loadingText}>
            Preparing your healthcare experience...
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoadingProvider
