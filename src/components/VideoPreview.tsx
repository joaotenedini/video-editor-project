import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { useEditorStore } from '../store/editorStore';

export const VideoPreview: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentTime, playing, timeline } = useEditorStore();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = currentTime;
      if (playing) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentTime, playing]);

  return (
    <Box className="w-full aspect-video bg-black relative">
      <video
        ref={videoRef}
        className="w-full h-full"
        src={timeline[0]?.clips[0]?.url}
      />
    </Box>
  );
};