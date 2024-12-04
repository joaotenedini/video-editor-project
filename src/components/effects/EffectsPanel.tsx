import React, { useState } from 'react';
import { Box, Typography, Slider, TextField, Tab, Tabs } from '@mui/material';
import { HexColorPicker } from 'react-colorful';
import { motion } from 'framer-motion';
import { FilterPresets } from './FilterPresets';
import { TransitionEffects } from './TransitionEffects';

export const EffectsPanel: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [effects, setEffects] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
  });

  const handleEffectChange = (effect: keyof typeof effects) => (_: Event, value: number | number[]) => {
    setEffects(prev => ({ ...prev, [effect]: value }));
  };

  const handlePresetSelect = (values: typeof effects) => {
    setEffects(values);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 p-4 rounded-lg"
    >
      <Typography variant="h6" className="mb-4">Effects</Typography>
      
      <Tabs
        value={currentTab}
        onChange={(_, value) => setCurrentTab(value)}
        className="mb-4"
        textColor="inherit"
        indicatorColor="primary"
      >
        <Tab label="Filters" />
        <Tab label="Text" />
        <Tab label="Transitions" />
      </Tabs>

      {currentTab === 0 && (
        <Box className="space-y-4">
          <FilterPresets onPresetSelect={handlePresetSelect} />
          
          <Box>
            <Typography variant="subtitle2">Brightness</Typography>
            <Slider
              value={effects.brightness}
              onChange={handleEffectChange('brightness')}
              min={0}
              max={200}
              valueLabelDisplay="auto"
            />
          </Box>

          <Box>
            <Typography variant="subtitle2">Contrast</Typography>
            <Slider
              value={effects.contrast}
              onChange={handleEffectChange('contrast')}
              min={0}
              max={200}
              valueLabelDisplay="auto"
            />
          </Box>

          <Box>
            <Typography variant="subtitle2">Saturation</Typography>
            <Slider
              value={effects.saturation}
              onChange={handleEffectChange('saturation')}
              min={0}
              max={200}
              valueLabelDisplay="auto"
            />
          </Box>
        </Box>
      )}

      {currentTab === 1 && (
        <Box className="space-y-4">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Enter text..."
            className="mb-4"
          />
          <Box>
            <Typography variant="subtitle2" className="mb-2">Text Color</Typography>
            <HexColorPicker className="w-full" />
          </Box>
          <Box>
            <Typography variant="subtitle2">Font Size</Typography>
            <Slider
              defaultValue={16}
              min={8}
              max={72}
              valueLabelDisplay="auto"
            />
          </Box>
        </Box>
      )}

      {currentTab === 2 && (
        <TransitionEffects />
      )}
    </motion.div>
  );
};