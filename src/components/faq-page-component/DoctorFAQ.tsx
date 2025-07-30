'use client'

import React, { useState, useEffect, useMemo } from 'react'
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import {
  ChevronDown,
  Search,
  HelpCircle,
  Smartphone,
  Calendar,
  Monitor,
  CreditCard,
  UserCheck,
  Headphones,
  Plus,
  Minus,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  Star,
  Users,
  Sparkles,
  Filter,
  TrendingUp,
  BookOpen,
  Zap,
  Heart,
  CheckCircle,
  AlertCircle,
  X,
  ArrowRight,
  Globe,
  Lock,
  Stethoscope,
} from 'lucide-react'
import {
  FAQItem,
  FAQCategory,
  DoctorFAQProps,
  faqMotionVariants,
} from '@/types/faq'
import styles from './DoctorFAQ.module.css'

// ===========================
// DOCTOR FAQ COMPONENT
// ===========================
const DoctorFAQ: React.FC<DoctorFAQProps> = ({
  className = '',
  onContactSupport,
  onSendEmail,
}) => {
  // ===========================
  // HOOKS & STATE
  // ===========================
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)
  const [showPopularOnly, setShowPopularOnly] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [searchFocused, setSearchFocused] = useState(false)

  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // ===========================
  // STATIC DATA
  // ===========================
  const categories: FAQCategory[] = [
    {
      id: 'all',
      title: 'All FAQs',
      icon: HelpCircle,
      color: '#6366f1',
      description: 'View all frequently asked questions',
      count: 20,
    },
    {
      id: 'general',
      title: 'General Info',
      icon: Smartphone,
      color: '#059669',
      description: 'App basics and general information',
      count: 4,
    },
    {
      id: 'booking',
      title: 'Appointments',
      icon: Calendar,
      color: '#0ea5e9',
      description: 'Booking and managing appointments',
      count: 5,
    },
    {
      id: 'consultation',
      title: 'Online Consults',
      icon: Monitor,
      color: '#8b5cf6',
      description: 'Video consultations and online care',
      count: 3,
    },
    {
      id: 'payment',
      title: 'Payments',
      icon: CreditCard,
      color: '#f59e0b',
      description: 'Payment methods and refunds',
      count: 3,
    },
    {
      id: 'doctors',
      title: 'Doctors',
      icon: UserCheck,
      color: '#ef4444',
      description: 'Doctor verification and availability',
      count: 3,
    },
    {
      id: 'support',
      title: 'Support',
      icon: Headphones,
      color: '#10b981',
      description: 'Technical help and customer support',
      count: 2,
    },
  ]

  const faqData: FAQItem[] = [
    // General App Information
    {
      id: '1',
      question: 'What is this app used for?',
      answer:
        'This app allows patients to find doctors, view their profiles, and book appointments online—either for in-clinic visits or online consultations. You can search by specialty, location, or doctor name to find the perfect healthcare provider for your needs.',
      category: 'general',
      icon: Smartphone,
      isPopular: true,
    },
    {
      id: '2',
      question: 'Is this app free to use?',
      answer:
        'Yes, the app is completely free for patients. You only pay the consultation fee charged by the doctor. There are no hidden charges, subscription fees, or booking fees from our platform.',
      category: 'general',
      icon: Star,
      isPopular: true,
    },
    {
      id: '3',
      question: 'Do I need to create an account to book an appointment?',
      answer:
        'Yes, you need to register to manage your bookings, receive reminders, and consult online. Registration is quick and secure, requiring only basic information to get started.',
      category: 'general',
      icon: Users,
    },
    {
      id: '4',
      question: 'What makes this app different from others?',
      answer:
        'Our app offers verified doctors, secure video consultations, flexible payment options, and 24/7 customer support. We prioritize patient safety and convenience with features like instant booking confirmations and automated reminders.',
      category: 'general',
      icon: Sparkles,
    },

    // Appointments & Booking
    {
      id: '5',
      question: 'How do I book an appointment?',
      answer:
        "Simply search for a doctor by specialty or location, view their profile and available slots, select your preferred time, and confirm your booking. You'll receive instant confirmation with all the details.",
      category: 'booking',
      icon: Calendar,
      isPopular: true,
    },
    {
      id: '6',
      question:
        'Can I book appointments for someone else (e.g., a family member)?',
      answer:
        "Yes, you can add family members to your profile and book appointments on their behalf. This feature is perfect for parents booking for children or managing elderly family members' healthcare.",
      category: 'booking',
      icon: Users,
    },
    {
      id: '7',
      question: 'What happens after I book an appointment?',
      answer:
        "You'll receive a confirmation email/SMS with the appointment details immediately. We'll also send you a reminder 24 hours before your visit, along with the doctor's clinic location and any preparation instructions.",
      category: 'booking',
      icon: MessageCircle,
    },
    {
      id: '8',
      question: 'Can I reschedule or cancel an appointment?',
      answer:
        'Yes, go to "My Appointments," select the appointment you wish to change, and choose reschedule or cancel. Please note that cancellation policies vary by doctor, and some may have minimum notice requirements.',
      category: 'booking',
      icon: Clock,
    },
    {
      id: '9',
      question: 'How far in advance can I book an appointment?',
      answer:
        "You can book appointments up to 3 months in advance, depending on the doctor's availability. For urgent consultations, many doctors offer same-day or next-day slots.",
      category: 'booking',
      icon: Calendar,
    },

    // Online Consultations
    {
      id: '10',
      question: 'Do you support online video consultations?',
      answer:
        'Yes, many doctors offer secure video consultations through our platform. These are clearly marked in their profiles with a "Video Consultation Available" badge.',
      category: 'consultation',
      icon: Monitor,
      isPopular: true,
    },
    {
      id: '11',
      question: 'How do I join a video consultation?',
      answer:
        'Log in 5-10 minutes before your appointment time and click the "Join Call" button from your dashboard. Make sure you have a stable internet connection and test your camera/microphone beforehand.',
      category: 'consultation',
      icon: Phone,
    },
    {
      id: '12',
      question: 'Is my medical information shared during video consults safe?',
      answer:
        'Absolutely. All communications are end-to-end encrypted and comply with healthcare data privacy regulations. Your personal health information is never stored on our servers and remains completely confidential.',
      category: 'consultation',
      icon: Shield,
    },

    // Payments & Refunds
    {
      id: '13',
      question: 'What payment methods are accepted?',
      answer:
        'We accept UPI, debit/credit cards, net banking, and popular digital wallets like Paytm, PhonePe, and Google Pay. All transactions are secured with bank-level encryption.',
      category: 'payment',
      icon: CreditCard,
    },
    {
      id: '14',
      question: 'Will I get a refund if I cancel an appointment?',
      answer:
        "If you cancel before the doctor's specified cancellation window (usually 24 hours), you'll receive a full refund. Partial refunds may apply for shorter notice periods, depending on the doctor's policy.",
      category: 'payment',
      icon: CreditCard,
    },
    {
      id: '15',
      question: 'Can I pay at the clinic instead of online?',
      answer:
        'Yes, if the doctor allows "Pay at Clinic" option, you\'ll see this choice during booking. However, online payment is recommended to avoid any complications and to secure your slot.',
      category: 'payment',
      icon: CreditCard,
    },

    // Doctor Information & Availability
    {
      id: '16',
      question: 'How do I know if a doctor is available today?',
      answer:
        "Each doctor's profile displays their real-time availability with a live status indicator. You can see their next available slots and book instantly if they have openings.",
      category: 'doctors',
      icon: UserCheck,
    },
    {
      id: '17',
      question:
        'How do I find specialists (e.g., pediatricians, dermatologists)?',
      answer:
        'Use the search bar and select your desired specialty from the dropdown menu. You can also filter by location, experience, ratings, and consultation fees to find the perfect specialist.',
      category: 'doctors',
      icon: Search,
    },
    {
      id: '18',
      question: 'Are the doctors verified?',
      answer:
        'Yes, all doctors undergo a rigorous verification process including medical license validation, credential checks, and background verification before being listed on our platform.',
      category: 'doctors',
      icon: Shield,
      isPopular: true,
    },

    // Technical & Support
    {
      id: '19',
      question:
        "I didn't receive my OTP or confirmation email—what should I do?",
      answer:
        "First, check your spam/junk folder. If it's not there, ensure you've entered the correct email/phone number. You can also request a new OTP or contact our support team for immediate assistance.",
      category: 'support',
      icon: Mail,
    },
    {
      id: '20',
      question: 'Is the app available for iOS and Android?',
      answer:
        'Yes, our app is available on both Google Play Store and Apple App Store. You can also access all features through our responsive web platform on any device.',
      category: 'support',
      icon: Smartphone,
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
  // FILTERED FAQs
  // ===========================
  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === 'all' || faq.category === selectedCategory
      const matchesPopular = !showPopularOnly || faq.isPopular
      return matchesSearch && matchesCategory && matchesPopular
    })
  }, [searchTerm, selectedCategory, showPopularOnly])

  // ===========================
  // STATS
  // ===========================
  const stats = useMemo(
    () => ({
      totalFAQs: faqData.length,
      popularFAQs: faqData.filter((faq) => faq.isPopular).length,
      totalCategories: categories.length - 1, // Exclude 'all'
      answeredToday: 47,
    }),
    []
  )

  // ===========================
  // HANDLERS
  // ===========================
  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setShowPopularOnly(false)
  }

  const handleContactSupport = () => {
    if (onContactSupport) {
      onContactSupport()
    } else {
      window.open('mailto:support@doctorapp.com', '_blank')
    }
  }

  const handleSendEmail = () => {
    if (onSendEmail) {
      onSendEmail()
    } else {
      window.open('mailto:support@doctorapp.com?subject=FAQ Inquiry', '_blank')
    }
  }

  // Animation variants imported from types/faq.ts
  const {
    container: containerVariants,
    item: itemVariants,
    floating: floatingVariants,
    categoryHover: categoryHoverVariants,
    icon: iconVariants,
    buttonHover: buttonHoverVariants,
    cardHover: cardHoverVariants,
    selectionIndicator: selectionIndicatorVariants,
    geometricShape: geometricShapeVariants,
    geometricShape2: geometricShape2Variants,
    stats: statsVariants,
    statItem: statItemVariants,
    header: headerVariants,
    search: searchVariants,
    filter: filterVariants,
    category: categoryVariants,
    question: questionVariants,
    answer: answerVariants,
    toggle: toggleVariants,
    badge: badgeVariants,
    noResults: noResultsVariants,
    cta: ctaVariants,
  } = faqMotionVariants

  // ===========================
  // RENDER
  // ===========================
  return (
    <section ref={ref} className={`${styles.faqSection} ${className}`}>
      {/* Animated Background */}
      <div className={styles.backgroundWrapper}>
        <motion.div
          className={styles.backgroundOverlay}
          style={{ y: backgroundY }}
        >
          {/* Floating Medical Icons */}
          <motion.div
            className={`${styles.floatingIcon} ${styles.icon1}`}
            variants={faqMotionVariants.floating}
            animate="animate"
          >
            <Stethoscope size={40} />
          </motion.div>
          <motion.div
            className={`${styles.floatingIcon} ${styles.icon2}`}
            variants={faqMotionVariants.floating}
            animate="animate"
            transition={{ delay: 1 }}
          >
            <Heart size={35} />
          </motion.div>
          <motion.div
            className={`${styles.floatingIcon} ${styles.icon3}`}
            variants={faqMotionVariants.floating}
            animate="animate"
            transition={{ delay: 2 }}
          >
            <Shield size={30} />
          </motion.div>
          <motion.div
            className={`${styles.floatingIcon} ${styles.icon4}`}
            variants={faqMotionVariants.floating}
            animate="animate"
            transition={{ delay: 0.5 }}
          >
            <Sparkles size={25} />
          </motion.div>
        </motion.div>

        {/* Geometric Shapes */}
        <motion.div
          className={`${styles.geometricShape} ${styles.shape1}`}
          variants={faqMotionVariants.geometricShape}
          animate="animate"
        />
        <motion.div
          className={`${styles.geometricShape} ${styles.shape2}`}
          variants={faqMotionVariants.geometricShape2}
          animate="animate"
        />
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className={styles.contentWrapper}
        >
          {/* Header Section */}
          <motion.div
            variants={faqMotionVariants.item}
            className={styles.headerSection}
          >
            <motion.div
              className={styles.headerBadge}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HelpCircle size={18} />
              Frequently Asked Questions
            </motion.div>

            <motion.h1
              className={styles.headerTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              How Can We{' '}
              <span className={styles.titleHighlight}>Help You?</span>
            </motion.h1>

            <motion.div
              className={styles.titleUnderline}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={
                isVisible
                  ? { scaleX: 1, opacity: 1 }
                  : { scaleX: 0, opacity: 0 }
              }
              transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
            />

            <motion.p
              className={styles.headerDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Find answers to common questions about our doctor appointment app.
              Can't find what you're looking for? Our support team is here to
              help!
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className={styles.statsGrid}
              variants={statsVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              {[
                {
                  label: 'Total FAQs',
                  value: stats.totalFAQs,
                  icon: BookOpen,
                  color: 'blue',
                },
                {
                  label: 'Categories',
                  value: stats.totalCategories,
                  icon: Filter,
                  color: 'green',
                },
                {
                  label: 'Popular',
                  value: stats.popularFAQs,
                  icon: TrendingUp,
                  color: 'purple',
                },
                {
                  label: 'Answered Today',
                  value: stats.answeredToday,
                  icon: CheckCircle,
                  color: 'orange',
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  variants={faqMotionVariants.statItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <stat.icon
                    size={20}
                    className={
                      styles[
                        `statIcon${
                          stat.color.charAt(0).toUpperCase() +
                          stat.color.slice(1)
                        }`
                      ]
                    }
                  />
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            variants={faqMotionVariants.item}
            className={styles.filtersSection}
          >
            {/* Search Bar */}
            <div className={styles.searchWrapper}>
              <motion.div
                className={`${styles.searchContainer} ${
                  searchFocused ? styles.searchFocused : ''
                }`}
              >
                <Search
                  size={24}
                  className={`${styles.searchIcon} ${
                    searchFocused ? styles.searchIconFocused : ''
                  }`}
                />
                <input
                  type="text"
                  placeholder="Search FAQs... (e.g., 'booking', 'payment', 'video call')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={styles.searchInput}
                />
                <AnimatePresence>
                  {searchTerm && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className={styles.clearSearchButton}
                      onClick={() => setSearchTerm('')}
                    >
                      <X size={16} />
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Filter Toggles */}
            <div className={styles.filterToggles}>
              <motion.button
                className={`${styles.filterToggle} ${
                  showPopularOnly ? styles.filterToggleActive : ''
                }`}
                onClick={() => setShowPopularOnly(!showPopularOnly)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star size={16} />
                Popular Only
              </motion.button>

              {(searchTerm ||
                selectedCategory !== 'all' ||
                showPopularOnly) && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={styles.clearFiltersButton}
                  onClick={clearFilters}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={16} />
                  Clear Filters
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Categories Grid */}
          <motion.div variants={faqMotionVariants.item}>
            <div className={styles.categoriesGrid}>
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  className={`${styles.categoryCard} ${
                    selectedCategory === category.id
                      ? styles.categoryCardActive
                      : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  variants={faqMotionVariants.category}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={styles.categoryContent}>
                    <motion.div
                      className={styles.categoryIcon}
                      style={{ backgroundColor: category.color }}
                      variants={faqMotionVariants.icon}
                      initial="rest"
                      animate={
                        hoveredCategory === category.id ? 'hover' : 'rest'
                      }
                    >
                      <category.icon size={24} />
                    </motion.div>

                    <div className={styles.categoryInfo}>
                      <h3 className={styles.categoryTitle}>{category.title}</h3>
                      <p className={styles.categoryDescription}>
                        {category.description}
                      </p>
                      {category.count && (
                        <motion.span
                          className={styles.categoryCount}
                          variants={faqMotionVariants.badge}
                          initial="hidden"
                          animate="visible"
                        >
                          {category.count} FAQs
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  <AnimatePresence>
                    {selectedCategory === category.id && (
                      <motion.div
                        className={styles.selectionIndicator}
                        variants={faqMotionVariants.selectionIndicator}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <CheckCircle size={16} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* FAQ Results */}
          <motion.div
            variants={faqMotionVariants.item}
            className={styles.faqResultsSection}
          >
            {/* Results Header */}
            <div className={styles.resultsHeader}>
              <motion.h2
                className={styles.resultsTitle}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {filteredFAQs.length}{' '}
                {filteredFAQs.length === 1 ? 'Question' : 'Questions'} Found
              </motion.h2>

              {selectedCategory !== 'all' && (
                <motion.div
                  className={styles.activeFilter}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Filter size={14} />
                  {categories.find((cat) => cat.id === selectedCategory)?.title}
                </motion.div>
              )}
            </div>

            {/* FAQ List */}
            <div className={styles.faqContainer}>
              <AnimatePresence mode="wait">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      className={styles.faqItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      layout
                    >
                      <motion.button
                        className={`${styles.faqQuestion} ${
                          openFAQ === faq.id ? styles.faqQuestionActive : ''
                        }`}
                        onClick={() => toggleFAQ(faq.id)}
                        whileHover={{
                          backgroundColor: 'rgba(99, 102, 241, 0.05)',
                        }}
                      >
                        <div className={styles.faqQuestionContent}>
                          <div className={styles.faqQuestionIcon}>
                            <faq.icon size={20} />
                          </div>
                          <span className={styles.faqQuestionText}>
                            {faq.question}
                          </span>
                          {faq.isPopular && (
                            <span className={styles.popularBadge}>
                              <Star size={12} />
                              Popular
                            </span>
                          )}
                        </div>
                        <motion.div
                          className={styles.faqToggleIcon}
                          variants={faqMotionVariants.toggle}
                          animate={openFAQ === faq.id ? 'open' : 'closed'}
                        >
                          {openFAQ === faq.id ? (
                            <Minus size={20} />
                          ) : (
                            <Plus size={20} />
                          )}
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {openFAQ === faq.id && (
                          <motion.div
                            className={styles.faqAnswer}
                            variants={faqMotionVariants.answer}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <motion.div
                              className={styles.faqAnswerContent}
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              {faq.answer}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    className={styles.noResults}
                    variants={faqMotionVariants.noResults}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Sparkles size={48} />
                    <h3>No FAQs found</h3>
                    <p>
                      Try adjusting your search or browse different categories
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            variants={faqMotionVariants.cta}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className={styles.contactCTA}
          >
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Still have questions?</h3>
              <p className={styles.ctaDescription}>
                Reach out to our support team anytime — we're here to help!
              </p>
              <div className={styles.ctaButtons}>
                <motion.button
                  className={`${styles.ctaButton} ${styles.primaryCTA}`}
                  onClick={handleContactSupport}
                  variants={faqMotionVariants.buttonHover}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <MessageCircle size={18} />
                  Chat with Support
                </motion.button>
                <motion.button
                  className={`${styles.ctaButton} ${styles.secondaryCTA}`}
                  onClick={handleSendEmail}
                  variants={faqMotionVariants.buttonHover}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Mail size={18} />
                  Send Email
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DoctorFAQ
