// types/index.ts

import { Variants, Transition } from 'framer-motion'

// Header Component Types
export interface HeaderProps {
  activeNav?: string
  onNavChange?: (nav: string) => void
}

export interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

// Navigation Types
export interface NavigationItem {
  label: string
  path: string
  isActive?: boolean
}

// Animation Variants Types
export const headerVariants: Variants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Page Animation Variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Button Hover Variants
export const buttonHoverVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Card Hover Variants
export const cardHoverVariants: Variants = {
  initial: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Theme Toggle Variants
export const themeToggleVariants: Variants = {
  light: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  dark: {
    x: 28,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Why Choose Us Component Variants
export const whyChooseUsContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const whyChooseUsCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const whyChooseUsIconVariants: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const whyChooseUsCardHoverVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const whyChooseUsGlowVariants: Variants = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 0.1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

// Pricing Plans Component Variants
export const pricingContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const pricingCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const pricingCardHoverVariants: Variants = {
  initial: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const pricingFeatureVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Custom Transition Presets
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

export const smoothTransition: Transition = {
  duration: 0.3,
  ease: [0.6, -0.05, 0.01, 0.99],
}

export const quickTransition: Transition = {
  duration: 0.2,
  ease: [0.6, -0.05, 0.01, 0.99],
}

// Plan Types for Homepage
export interface PlanFeature {
  text: string
  included: boolean
  icon?: React.ElementType
}

export interface Plan {
  id: string
  name: string
  price: number
  period: string
  badge?: string
  features: PlanFeature[]
  popular?: boolean
}

// Pricing Plans Component Types
export interface PricingPlanFeature {
  text: string
  icon: React.ElementType
  included: boolean
}

export interface PricingPlan {
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
  features: PricingPlanFeature[]
  buttonText: string
  gradient: string
  glowColor: string
}

export interface PricingPlansProps {
  className?: string
}

// Service Types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

// Stats Types
export interface Stat {
  id: string
  number: string
  label: string
  color: string
}

// Feature Types
export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  gradient: string
}

// Why Choose Us Types
export interface WhyChooseUsFeature {
  id: string
  icon: React.ElementType
  title: string
  description: string
  stats: string
  color: string
  colorClass: string
  benefits: string[]
}

export interface WhyChooseUsProps {
  className?: string
}

// Form Types
export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  appointmentDate?: string
  preferredTime?: string
}

export interface AppointmentForm {
  patientName: string
  parentName: string
  email: string
  phone: string
  age: number
  appointmentDate: string
  preferredTime: string
  appointmentType: 'consultation' | 'vaccination' | 'emergency' | 'follow-up'
  symptoms?: string
  notes?: string
}

// Error Types
export interface ApiError {
  message: string
  code?: string
  field?: string
}

export interface FormErrors {
  [key: string]: string | undefined
}

// Loading States
export interface LoadingState {
  isLoading: boolean
  error?: string | null
  success?: boolean
}

// Theme Types
export type ThemeType = 'light' | 'dark'

export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  foreground: string
  card: string
  border: string
}

// Hero Section Variants
export const heroContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const heroItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Treatment Animation Variants
export const treatmentContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const treatmentCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
}

export const treatmentHeaderVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export const treatmentIconVariants: Variants = {
  rest: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: -10,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const treatmentFeatureVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Video Consultation Component Types
export interface VideoConsultationProps {
  className?: string
  doctorName?: string
  appLink?: string
  timings?: string
}

// Video Consultation Animation Variants
export const videoConsultationVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const videoLeftContentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.2,
    },
  },
}

export const videoRightContentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const videoItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const videoDeviceVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 0.3,
    },
  },
}

export const videoFloatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Footer Component Types
export interface FooterProps {
  className?: string
}

export interface SocialLink {
  id: string
  name: string
  url: string
  icon: React.ElementType
}

export interface QuickLink {
  id: string
  label: string
  path: string
}

export interface AddressInfo {
  id: string
  type: 'location' | 'phone' | 'email'
  label: string
  value: string
  icon: React.ElementType
}

// Footer Animation Variants
export const footerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const footerColumnVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const footerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const footerSocialVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
}

export const footerBottomVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Export all variants for easy import
export const motionVariants = {
  header: headerVariants,
  nav: navVariants,
  item: itemVariants,
  mobileMenu: mobileMenuVariants,
  page: pageVariants,
  container: containerVariants,
  fadeIn: fadeInVariants,
  buttonHover: buttonHoverVariants,
  cardHover: cardHoverVariants,
  themeToggle: themeToggleVariants,
  heroContainer: heroContainerVariants,
  heroItem: heroItemVariants,
  floating: floatingVariants,
  // Why Choose Us variants
  whyChooseUsContainer: whyChooseUsContainerVariants,
  whyChooseUsCard: whyChooseUsCardVariants,
  whyChooseUsIcon: whyChooseUsIconVariants,
  whyChooseUsCardHover: whyChooseUsCardHoverVariants,
  whyChooseUsGlow: whyChooseUsGlowVariants,
  // Pricing Plans variants
  pricingContainer: pricingContainerVariants,
  pricingCard: pricingCardVariants,
  pricingCardHover: pricingCardHoverVariants,
  pricingFeature: pricingFeatureVariants,
  // Treatment variants
  treatmentContainer: treatmentContainerVariants,
  treatmentCard: treatmentCardVariants,
  treatmentHeader: treatmentHeaderVariants,
  treatmentIcon: treatmentIconVariants,
  treatmentFeature: treatmentFeatureVariants,
  // Video Consultation variants
  videoConsultation: videoConsultationVariants,
  videoLeftContent: videoLeftContentVariants,
  videoRightContent: videoRightContentVariants,
  videoItem: videoItemVariants,
  videoDevice: videoDeviceVariants,
  videoFloating: videoFloatingVariants,
  // Footer variants
  footerContainer: footerContainerVariants,
  footerColumn: footerColumnVariants,
  footerItem: footerItemVariants,
  footerSocial: footerSocialVariants,
  footerBottom: footerBottomVariants,
}

// Export all transitions
export const motionTransitions = {
  spring: springTransition,
  smooth: smoothTransition,
  quick: quickTransition,
}

// Add these interfaces to your existing types/index.ts file

// Treatment Component Types
export interface Treatment {
  id: string
  title: string
  description: string
  icon: React.ElementType
  features: string[]
  colorVariant: 'green' | 'blue' | 'orange' | 'red' | 'purple' | 'pink'
}

export interface TreatmentsOfferedProps {
  className?: string
}

// Add to the existing motionVariants export
// export const motionVariants = {
//   // ... existing variants

//   // Treatment variants
//   treatmentContainer: treatmentContainerVariants,
//   treatmentCard: treatmentCardVariants,
//   treatmentHeader: treatmentHeaderVariants,
//   treatmentIcon: treatmentIconVariants,
//   treatmentFeature: treatmentFeatureVariants,
// }
