'use client';

import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useCurrentStep } from '@/app/store/wizardStore';

interface WizardContainerProps {
  children: React.ReactNode;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function WizardContainer({ children }: WizardContainerProps) {
  const currentStep = useCurrentStep();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: 400,
        width: '100%',
      }}
    >
      <AnimatePresence mode="wait" custom={currentStep}>
        <motion.div
          key={currentStep}
          custom={currentStep}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
