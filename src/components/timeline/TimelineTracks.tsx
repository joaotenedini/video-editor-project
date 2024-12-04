import React from 'react';
import { Box } from '@mui/material';
import { TimelineTrack } from './TimelineTracks';
import { useEditorStore } from '../../store/editorStore';

export const TimelineTracks: React.FC = () => {
  const { timeline } = useEditorStore();

  return (
    <Box className="flex-1 overflow-auto">
      {timeline.map((track) => (
        <TimelineTrack key={track.id} track={track} />
      ))}
    </Box>
  );
};