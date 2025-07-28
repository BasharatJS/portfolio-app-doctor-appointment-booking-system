// types/about.ts

import { Variants } from 'framer-motion'

// ===========================
// ABOUT DOCTOR COMPONENT TYPES
// ===========================

export interface AboutDoctorProps {
  className?: string
}

export interface Achievement {
  id: string
  icon: React.ElementType
  title: string
  description: string
  color: string
}

export interface Hospital {
  id: string
  name: string
  role: string
}

// ===========================
// ANIMATION VARIANTS FOR ABOUT DOCTOR COMPONENT
// ===========================

export const aboutDoctorVariants: Variants = {
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

export const aboutContentVariants: Variants = {
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
      staggerChildren: 0.15,
    },
  },
}

export const aboutImageVariants: Variants = {
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

export const aboutItemVariants: Variants = {
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

export const aboutCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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

export const aboutCardHoverVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const aboutFloatingVariants: Variants = {
  animate: {
    y: [-5, 5, -5],
    rotate: [0, 10, 0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const aboutBadgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export const aboutGlowVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const aboutSectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1,
    },
  },
}

export const aboutListVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
}

export const aboutListItemVariants: Variants = {
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

// Export animation variants for AboutDoctor component
export const aboutMotionVariants = {
  aboutDoctor: aboutDoctorVariants,
  aboutContent: aboutContentVariants,
  aboutImage: aboutImageVariants,
  aboutItem: aboutItemVariants,
  aboutCard: aboutCardVariants,
  aboutCardHover: aboutCardHoverVariants,
  aboutFloating: aboutFloatingVariants,
  aboutBadge: aboutBadgeVariants,
  aboutGlow: aboutGlowVariants,
  aboutSection: aboutSectionVariants,
  aboutList: aboutListVariants,
  aboutListItem: aboutListItemVariants,
}
