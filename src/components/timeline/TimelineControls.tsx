import React from 'react';
import { Box, IconButton, Slider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { useEditorStore } from '../../store/editorStore';
import { formatTime } from '../../utils/time';

export const TimelineControls: React.FC = () => {
  const { currentTime, playing, zoom, actions } = useEditorStore();

  const handleZoomChange = (_: Event, newValue: number | number[]) => {
    actions.setZoom(newValue as number);
  };

  return (
    <Box className="h-12 bg-gray-800 flex items-center px-4 border-b border-gray-700">
      <IconButton 
        onClick={() => actions.setPlaying(!playing)}
        className="text-white"
      >
        {playing ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      
      <Box className="text-white ml-4">
        {formatTime(currentTime)}
      </Box>

      <Box className="flex items-center ml-8">
        <ZoomOutIcon className="text-gray-400" />
        <Slider
          value={zoom}
          onChange={handleZoomChange}
          min={0.1}
          max={2}
          step={0.1}
          className="w-32 mx-4"
        />
        <ZoomInIcon className="text-gray-400" />
      </Box>
    </Box>
  );
};