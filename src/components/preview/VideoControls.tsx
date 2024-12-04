import React, { useState } from 'react';
import { Box, IconButton, Slider, Typography } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useEditorStore } from '../../store/editorStore';
import { formatTime } from '../../utils/time';
import { motion } from 'framer-motion';

export const VideoControls: React.FC = () => {
  const { currentTime, duration, playing, actions } = useEditorStore();
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4"
    >
      <Box className="space-y-2">
        <Slider
          value={(currentTime / duration) * 100}
          onChange={(_, value) => actions.setCurrentTime((value as number / 100) * duration)}
          className="text-purple-500"
        />
        
        <Box className="flex items-center justify-between text-white">
          <Box className="flex items-center space-x-2">
            <IconButton 
              onClick={() => actions.setPlaying(!playing)}
              className="text-white hover:text-purple-400"
            >
              {playing ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            
            <Typography>{formatTime(currentTime)}</Typography>
            
            <Box className="flex items-center ml-4">
              <IconButton 
                onClick={() => setMuted(!muted)}
                className="text-white hover:text-purple-400"
              >
                {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </IconButton>
              <Slider
                value={muted ? 0 : volume * 100}
                onChange={(_, value) => setVolume((value as number) / 100)}
                className="w-24 ml-2"
                size="small"
              />
            </Box>
          </Box>

          <Box className="flex items-center space-x-2">
            <Typography>{formatTime(duration)}</Typography>
            <IconButton className="text-white hover:text-purple-400">
              <FullscreenIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};