'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Video,
  Clock,
  Download,
  Phone,
  Calendar,
  Monitor,
  Mic,
  MicOff,
  VideoOff,
  PhoneOff,
  User,
  UserCheck,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import {
  videoConsultationVariants,
  videoLeftContentVariants,
  videoRightContentVariants,
  videoItemVariants,
  videoDeviceVariants,
  videoFloatingVariants,
  VideoConsultationProps,
} from '@/types'
import styles from './VideoConsultation.module.css'

const VideoConsultation: React.FC<VideoConsultationProps> = ({
  className = '',
  doctorName = 'Dr. Afroz Ahmed',
  appLink = 'https://bit.ly/docon-app',
  timings = 'Monday to Sunday 9:15 pm to 10:15 pm',
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className={`${styles.videoSection} ${className}`}>
      {/* Background Elements */}
      <div className={styles.backgroundPattern} />
      <div className={styles.floatingElements}>
        <motion.div
          className={`${styles.floatingElement} ${styles.element1}`}
          variants={videoFloatingVariants}
          animate="animate"
        />
        <motion.div
          className={`${styles.floatingElement} ${styles.element2}`}
          variants={videoFloatingVariants}
          animate="animate"
        />
        <motion.div
          className={`${styles.floatingElement} ${styles.element3}`}
          variants={videoFloatingVariants}
          animate="animate"
        />
        <motion.div
          className={`${styles.floatingElement} ${styles.element4}`}
          variants={videoFloatingVariants}
          animate="animate"
        />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={videoConsultationVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Content */}
          <motion.div
            className={styles.leftContent}
            variants={videoLeftContentVariants}
          >
            {/* Badge */}
            <motion.div className={styles.badge} variants={videoItemVariants}>
              <Video size={16} />
              <span>Telemedicine Available</span>
            </motion.div>

            {/* Title */}
            <motion.h2 className={styles.title} variants={videoItemVariants}>
              Online Video{' '}
              <span className={styles.titleHighlight}>Consultation</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className={styles.description}
              variants={videoItemVariants}
            >
              <span className={styles.doctorName}>{doctorName}</span> is now
              available for video consultation. You can book the appointment and
              consult with {doctorName.split(' ')[1]} through a video call.
              Please download Docon App from{' '}
              <a
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.appLink}
              >
                {appLink}
              </a>{' '}
              and book your appointment.
            </motion.p>

            {/* Timings Section */}
            <motion.div
              className={styles.timingsSection}
              variants={videoItemVariants}
            >
              <h3 className={styles.timingsTitle}>
                <Clock size={20} />
                Available Timings
              </h3>
              <p className={styles.timingsText}>{timings}</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className={styles.ctaButtons}
              variants={videoItemVariants}
            >
              <motion.button
                className={styles.primaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} />
                <span>Book Appointment</span>
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                className={styles.secondaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download App</span>
                <ExternalLink size={16} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Device Mockup */}
          <motion.div
            className={styles.rightContent}
            variants={videoRightContentVariants}
          >
            <motion.div
              className={styles.deviceMockup}
              variants={videoDeviceVariants}
            >
              {/* Computer Frame */}
              <div className={styles.computerFrame}>
                {/* Screen Container */}
                <div className={styles.screenContainer}>
                  {/* Status Indicators */}
                  <div className={styles.statusIndicators}>
                    <motion.div
                      className={`${styles.statusDot} ${styles.online}`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className={`${styles.statusDot} ${styles.recording}`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                      className={`${styles.statusDot} ${styles.secure}`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </div>

                  {/* Video Call Interface */}
                  <div className={styles.videoCallInterface}>
                    {/* Doctor Avatar */}
                    <motion.div
                      className={styles.doctorAvatar}
                      animate={{
                        boxShadow: [
                          '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(16, 185, 129, 0.4)',
                          '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 20px rgba(16, 185, 129, 0)',
                          '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(16, 185, 129, 0.4)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <UserCheck size={32} />
                    </motion.div>

                    {/* Patient View */}
                    <div className={styles.patientView}>
                      <motion.div
                        className={styles.patientAvatar}
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <User size={24} />
                      </motion.div>
                    </div>

                    {/* Controls Bar */}
                    <div className={styles.controlsBar}>
                      <motion.button
                        className={`${styles.controlButton} ${styles.videoButton}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Video size={18} />
                      </motion.button>

                      <motion.button
                        className={`${styles.controlButton} ${styles.audioButton}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mic size={18} />
                      </motion.button>

                      <motion.button
                        className={`${styles.controlButton} ${styles.endButton}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <PhoneOff size={18} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Keyboard */}
                <motion.div
                  className={styles.keyboard}
                  animate={{
                    boxShadow: [
                      '0 4px 12px rgba(0, 0, 0, 0.1)',
                      '0 6px 16px rgba(0, 0, 0, 0.15)',
                      '0 4px 12px rgba(0, 0, 0, 0.1)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Mouse */}
                <motion.div
                  className={styles.mouse}
                  animate={{
                    y: [0, -2, 0],
                    boxShadow: [
                      '0 4px 12px rgba(0, 0, 0, 0.1)',
                      '0 6px 16px rgba(0, 0, 0, 0.15)',
                      '0 4px 12px rgba(0, 0, 0, 0.1)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoConsultation
