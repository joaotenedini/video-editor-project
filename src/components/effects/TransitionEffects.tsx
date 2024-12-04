import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const transitions = [
  { name: 'Fade', icon: '🌅' },
  { name: 'Slide', icon: '➡️' },
  { name: 'Zoom', icon: '🔍' },
  { name: 'Dissolve', icon: '💫' },
  { name: 'Wipe', icon: '↔️' },
  { name: 'Cross', icon: '✨' },
];

export const TransitionEffects: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {transitions.map((transition, index) => (
        <Grid item xs={6} key={transition.name}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Paper
              className="p-3 cursor-pointer hover:bg-gray-700 transition-colors text-center"
              elevation={2}
            >
              <Typography variant="h5" className="mb-1">{transition.icon}</Typography>
              <Typography variant="body2">{transition.name}</Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};