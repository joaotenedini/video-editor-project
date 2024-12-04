import React from 'react';
import { Box } from '@mui/material';
import { Rnd } from 'react-rnd';
import { TimelineTrack as ITimelineTrack } from '../types';
import { useEditorStore } from '../store/editorStore';

interface TimelineTrackProps {
  track: ITimelineTrack;
}

export const TimelineTrack: React.FC<TimelineTrackProps> = ({ track }) => {
  const { zoom, actions } = useEditorStore();

  const handleClipResize = (clipId: string, d: { width: number }) => {
    const newDuration = d.width / (100 * zoom);
    actions.updateClip(track.id, clipId, { duration: newDuration });
  };

  return (
    <Box className="h-20 border-b border-gray-700 relative">
      {track.clips.map((clip) => (
        <Rnd
          key={clip.id}
          className="bg-blue-500 h-full cursor-pointer hover:bg-blue-600"
          bounds="parent"
          enableResizing={{ right: true }}
          onResize={(e, direction, ref, delta, position) =>
            handleClipResize(clip.id, { width: parseFloat(ref.style.width) })
          }
          default={{
            x: clip.startTime * (100 * zoom),
            y: 0,
            width: clip.duration * (100 * zoom),
            height: '100%',
          }}
        >
          <Box className="p-2 text-white text-sm truncate">
            {clip.id}
          </Box>
        </Rnd>
      ))}
    </Box>
  );
};