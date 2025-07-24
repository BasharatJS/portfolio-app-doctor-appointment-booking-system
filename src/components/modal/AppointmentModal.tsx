'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  Send,
  Heart,
} from 'lucide-react'
import {
  AppointmentModalProps,
  AppointmentFormData,
  ChamberOption,
  motionVariants,
  motionTransitions,
} from '@/types'
import styles from './AppointmentModal.module.css'

const chambersInPune: ChamberOption[] = [
  { value: '', label: 'Select Chamber Location' },
  { value: 'koregaon-park', label: 'Koregaon Park Clinic' },
  { value: 'camp-area', label: 'Camp Area Medical Center' },
  { value: 'baner-clinic', label: 'Baner Pediatric Clinic' },
  { value: 'kalyani-nagar', label: 'Kalyani Nagar Chamber' },
]

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    mobile: '',
    email: '',
    chamber: '',
    symptoms: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitSuccess(true)

      setTimeout(() => {
        setFormData({
          name: '',
          mobile: '',
          email: '',
          chamber: '',
          symptoms: '',
        })
        setSubmitSuccess(false)
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Error submitting appointment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid =
    formData.name && formData.mobile && formData.email && formData.chamber

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.appointmentModalOverlay}
          variants={motionVariants.modalOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={styles.appointmentModal}
            // style={{ backgroundColor: 'white' }}
            variants={motionVariants.modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderContent}>
                <div className={styles.modalIcon}>
                  <Heart className={styles.heartIcon} size={24} />
                </div>
                <div className={styles.modalTitleSection}>
                  <h2 className={styles.modalTitle}>Make an Appointment</h2>
                  <p className={styles.modalSubtitle}>
                    Schedule your child's consultation with our pediatric
                    specialist
                  </p>
                </div>
              </div>
              <motion.button
                className={styles.closeButton}
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={motionTransitions.quick}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Modal Body */}
            <div className={styles.modalBody}>
              {submitSuccess ? (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className={styles.successIcon}>
                    <Heart className={styles.successHeart} size={48} />
                  </div>
                  <h3>Appointment Requested Successfully!</h3>
                  <p>
                    We'll contact you shortly to confirm your appointment
                    details.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={styles.appointmentForm}
                >
                  <motion.div
                    className={styles.formContainer}
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.1 }}
                  >
                    {/* Name Field */}
                    <motion.div
                      className={styles.formGroup}
                      variants={motionVariants.formItem}
                    >
                      <label htmlFor="name" className={styles.formLabel}>
                        <User size={16} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="Enter child's full name"
                        required
                      />
                    </motion.div>

                    {/* Mobile Field */}
                    <motion.div
                      className={styles.formGroup}
                      variants={motionVariants.formItem}
                    >
                      <label htmlFor="mobile" className={styles.formLabel}>
                        <Phone size={16} />
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      className={styles.formGroup}
                      variants={motionVariants.formItem}
                    >
                      <label htmlFor="email" className={styles.formLabel}>
                        <Mail size={16} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="your.email@example.com"
                        required
                      />
                    </motion.div>

                    {/* Chamber Selection */}
                    <motion.div
                      className={styles.formGroup}
                      variants={motionVariants.formItem}
                    >
                      <label htmlFor="chamber" className={styles.formLabel}>
                        <MapPin size={16} />
                        Chamber for Appointment *
                      </label>
                      <select
                        id="chamber"
                        name="chamber"
                        value={formData.chamber}
                        onChange={handleInputChange}
                        className={styles.formSelect}
                        required
                      >
                        {chambersInPune.map((chamber) => (
                          <option key={chamber.value} value={chamber.value}>
                            {chamber.label}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    {/* Symptoms Field */}
                    <motion.div
                      className={`${styles.formGroup} ${styles.fullWidth}`}
                      variants={motionVariants.formItem}
                    >
                      <label htmlFor="symptoms" className={styles.formLabel}>
                        <FileText size={16} />
                        Symptoms of Child
                      </label>
                      <textarea
                        id="symptoms"
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleInputChange}
                        className={styles.formTextarea}
                        placeholder="Please describe the symptoms or reason for consultation..."
                        rows={4}
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      className={styles.formActions}
                      variants={motionVariants.formItem}
                    >
                      <motion.button
                        type="submit"
                        className={`${styles.submitButton} ${
                          isSubmitting ? styles.submitting : ''
                        }`}
                        disabled={!isFormValid || isSubmitting}
                        whileHover={isFormValid ? { scale: 1.02, y: -2 } : {}}
                        whileTap={isFormValid ? { scale: 0.98 } : {}}
                        transition={motionTransitions.quick}
                      >
                        {isSubmitting ? (
                          <>
                            <div className={styles.spinner}></div>
                            Booking Appointment...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Book Appointment
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AppointmentModal
