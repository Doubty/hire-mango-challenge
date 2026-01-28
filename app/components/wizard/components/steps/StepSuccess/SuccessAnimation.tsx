'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle } from '@mui/icons-material';

export default function SuccessAnimation() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 4,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <CheckCircle
            sx={{
              fontSize: 80,
              color: 'success.main',
            }}
          />
        </motion.div>
      </motion.div>
    </Box>
  );
}
