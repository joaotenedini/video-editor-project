import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import FilterIcon from '@mui/icons-material/Filter';
import TransitionVideoIcon from '@mui/icons-material/Animation';

export const ToolPanel: React.FC = () => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      // Handle file upload logic
    }
  };

  return (
    <Box className="w-64 bg-gray-800 p-4">
      <input
        type="file"
        accept="video/*,audio/*"
        className="hidden"
        id="media-upload"
        onChange={handleFileUpload}
      />
      
      <Button
        variant="contained"
        component="label"
        htmlFor="media-upload"
        startIcon={<VideoLibraryIcon />}
        fullWidth
        className="mb-4"
      >
        Import Media
      </Button>

      <Box className="grid grid-cols-3 gap-2">
        <IconButton className="text-white">
          <AudiotrackIcon />
        </IconButton>
        <IconButton className="text-white">
          <TextFieldsIcon />
        </IconButton>
        <IconButton className="text-white">
          <FilterIcon />
        </IconButton>
        <IconButton className="text-white">
          <TransitionVideoIcon />
        </IconButton>
      </Box>
    </Box>
  );
};