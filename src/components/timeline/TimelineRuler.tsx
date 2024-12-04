import React from 'react';
import { Box } from '@mui/material';
import { useEditorStore } from '../../store/editorStore';
import { formatTime } from '../../utils/time';

export const TimelineRuler: React.FC = () => {
  const { duration, zoom } = useEditorStore();
  const marks = [];
  const markInterval = 1; // 1 second intervals

  for (let time = 0; time <= duration; time += markInterval) {
    const position = time * (100 * zoom);
    marks.push(
      <Box
        key={time}
        className="absolute h-4 border-l border-gray-600"
        style={{ left: `${position}px` }}
      >
        <span className="text-xs text-gray-400 ml-1">{formatTime(time)}</span>
      </Box>
    );
  }

  return (
    <Box className="h-6 bg-gray-800 relative border-b border-gray-700">
      {marks}
    </Box>
  );
};