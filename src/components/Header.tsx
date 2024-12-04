import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" className="bg-gradient-to-r from-purple-600 to-blue-500">
      <Toolbar>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" className="font-bold">
            Video Editor Pro
          </Typography>
        </motion.div>
        <Box className="flex-1" />
        <Box className="space-x-2">
          <Button
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="bg-white/10 hover:bg-white/20"
          >
            Save Project
          </Button>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            className="bg-green-500 hover:bg-green-600"
          >
            Export Video
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};