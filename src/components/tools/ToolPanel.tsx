import React from 'react';
import { Box } from '@mui/material';
import { MediaImport } from './MediaImport';
import { ToolButtons } from './ToolButtons';

export const ToolPanel: React.FC = () => {
  return (
    <Box className="w-64 bg-gray-800 p-4">
      <MediaImport />
      <ToolButtons />
    </Box>
  );
};