import React, { useRef, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useEditorStore } from '../store/editorStore';
import { TimelineTrack } from './TimelineTrack';

export const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { timeline, currentTime, playing, actions } = useEditorStore();

  const handleTimelineClick = (e: React.MouseEvent) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const newTime = (clickPosition / rect.width) * timeline[0]?.duration || 0;
    actions.setCurrentTime(newTime);
  };

  const togglePlayback = () => {
    actions.setPlaying(!playing);
  };

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        actions.setCurrentTime(currentTime + 0.1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [playing, currentTime]);

  return (
    <Box className="w-full h-64 bg-gray-900 relative">
      <Box className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-2">
        <IconButton onClick={togglePlayback} className="text-white">
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <Box className="text-white ml-2">{currentTime.toFixed(2)}s</Box>
      </Box>
      
      <Box
        ref={timelineRef}
        className="absolute top-8 left-0 right-0 bottom-0 overflow-auto"
        onClick={handleTimelineClick}
      >
        {timeline.map((track) => (
          <TimelineTrack key={track.id} track={track} />
        ))}
      </Box>
    </Box>
  );
};