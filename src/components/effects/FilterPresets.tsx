import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const presets = [
  { name: 'Cinematic', values: { brightness: 110, contrast: 120, saturation: 90 } },
  { name: 'Vintage', values: { brightness: 95, contrast: 110, saturation: 80 } },
  { name: 'Dramatic', values: { brightness: 105, contrast: 130, saturation: 85 } },
  { name: 'Vibrant', values: { brightness: 115, contrast: 115, saturation: 130 } },
];

interface FilterPresetsProps {
  onPresetSelect: (values: typeof presets[0]['values']) => void;
}

export const FilterPresets: React.FC<FilterPresetsProps> = ({ onPresetSelect }) => {
  return (
    <Box className="mb-6">
      <Typography variant="subtitle2" className="mb-2">Presets</Typography>
      <Box className="grid grid-cols-2 gap-2">
        {presets.map((preset, index) => (
          <motion.div
            key={preset.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Paper
              className="p-2 cursor-pointer text-center hover:bg-gray-700 transition-colors"
              onClick={() => onPresetSelect(preset.values)}
            >
              <Typography variant="body2">{preset.name}</Typography>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};