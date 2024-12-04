import React from 'react';
import { Box } from '@mui/material';
import { TimelineControls } from './TimelineControls';
import { TimelineRuler } from './TimelineRuler';
import { TimelineTracks } from './TimelineTracks';

export const Timeline: React.FC = () => {
  return (
    <Box className="w-full h-64 bg-gray-900 flex flex-col">
      <TimelineControls />
      <TimelineRuler />
      <TimelineTracks />
    </Box>
  );
};