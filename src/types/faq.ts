// types/faq.ts

import { LucideIcon } from 'lucide-react'
import { Variants, Transition } from 'framer-motion'

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  icon: LucideIcon
  isPopular?: boolean
}

export interface FAQCategory {
  id: string
  title: string
  icon: LucideIcon
  color: string
  description: string
  count?: number
}

export interface DoctorFAQProps {
  className?: string
  onContactSupport?: () => void
  onSendEmail?: () => void
}

export interface SearchFilters {
  searchTerm: string
  selectedCategory: string
  showPopularOnly: boolean
}

export interface FAQStats {
  totalFAQs: number
  totalCategories: number
  popularFAQs: number
  recentlyUpdated: number
}

export type FAQAnimationState = 'idle' | 'searching' | 'filtering' | 'expanding'

export interface FAQContextType {
  faqs: FAQItem[]
  categories: FAQCategory[]
  filters: SearchFilters
  stats: FAQStats
  updateFilters: (filters: Partial<SearchFilters>) => void
  toggleFAQ: (id: string) => void
  openFAQ: string | null
}

// ===========================
// ANIMATION VARIANTS
// ===========================

export const faqContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const faqItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export const faqFloatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const faqHeaderVariants: Variants = {
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

export const faqSearchVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const faqCategoryVariants: Variants = {
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

export const faqCategoryHoverVariants: Variants = {
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

export const faqIconVariants: Variants = {
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

export const faqQuestionVariants: Variants = {
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

export const faqAnswerVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
}

export const faqToggleVariants: Variants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: 180,
    transition: {
      duration: 0.3,
    },
  },
}

export const faqBadgeVariants: Variants = {
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

export const faqStatsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const faqStatItemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const faqFilterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

export const faqNoResultsVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const faqCTAVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const faqButtonHoverVariants: Variants = {
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

export const faqCardHoverVariants: Variants = {
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

export const faqSelectionIndicatorVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

export const faqGeometricShapeVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

export const faqGeometricShape2Variants: Variants = {
  animate: {
    scale: [1.2, 1, 1.2],
    rotate: [360, 180, 0],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// Custom Transition Presets for FAQ
export const faqSpringTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

export const faqSmoothTransition: Transition = {
  duration: 0.3,
  ease: [0.6, -0.05, 0.01, 0.99],
}

export const faqQuickTransition: Transition = {
  duration: 0.2,
  ease: [0.6, -0.05, 0.01, 0.99],
}

// Export all FAQ variants for easy import
export const faqMotionVariants = {
  container: faqContainerVariants,
  item: faqItemVariants,
  floating: faqFloatingVariants,
  header: faqHeaderVariants,
  search: faqSearchVariants,
  category: faqCategoryVariants,
  categoryHover: faqCategoryHoverVariants,
  icon: faqIconVariants,
  question: faqQuestionVariants,
  answer: faqAnswerVariants,
  toggle: faqToggleVariants,
  badge: faqBadgeVariants,
  stats: faqStatsVariants,
  statItem: faqStatItemVariants,
  filter: faqFilterVariants,
  noResults: faqNoResultsVariants,
  cta: faqCTAVariants,
  buttonHover: faqButtonHoverVariants,
  cardHover: faqCardHoverVariants,
  selectionIndicator: faqSelectionIndicatorVariants,
  geometricShape: faqGeometricShapeVariants,
  geometricShape2: faqGeometricShape2Variants,
}

// Export all FAQ transitions
export const faqMotionTransitions = {
  spring: faqSpringTransition,
  smooth: faqSmoothTransition,
  quick: faqQuickTransition,
}
