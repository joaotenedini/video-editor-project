import React from 'react';
import { Box } from '@mui/material';
import { VideoPlayer } from './VideoPlayer';
import { VideoControls } from './VideoControls';

export const VideoPreview: React.FC = () => {
  return (
    <Box className="w-full aspect-video bg-black relative">
      <VideoPlayer />
      <VideoControls />
    </Box>
  );
};