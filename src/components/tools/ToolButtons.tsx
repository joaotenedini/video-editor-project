import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import FilterIcon from '@mui/icons-material/Filter';
import TransitionVideoIcon from '@mui/icons-material/Animation';
import CropIcon from '@mui/icons-material/Crop';
import SpeedIcon from '@mui/icons-material/Speed';

export const ToolButtons: React.FC = () => {
  return (
    <Box className="grid grid-cols-3 gap-2">
      <Tooltip title="Add Audio Track">
        <IconButton className="text-white">
          <AudiotrackIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add Text">
        <IconButton className="text-white">
          <TextFieldsIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add Filter">
        <IconButton className="text-white">
          <FilterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add Transition">
        <IconButton className="text-white">
          <TransitionVideoIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Crop Video">
        <IconButton className="text-white">
          <CropIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Adjust Speed">
        <IconButton className="text-white">
          <SpeedIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};