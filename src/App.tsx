import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { VideoPreview } from './components/preview/VideoPreview';
import { Timeline } from './components/timeline/Timeline';
import { ToolPanel } from './components/tools/ToolPanel';
import { Header } from './components/Header';
import { EffectsPanel } from './components/effects/EffectsPanel';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Toaster position="top-right" />
      <Box className="h-screen flex flex-col bg-gray-900">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 flex"
        >
          <ToolPanel />
          <Box className="flex-1 p-4">
            <VideoPreview />
          </Box>
          <Box className="w-80 p-4">
            <EffectsPanel />
          </Box>
        </motion.div>
        <Timeline />
      </Box>
    </ThemeProvider>
  );
}

export default App;