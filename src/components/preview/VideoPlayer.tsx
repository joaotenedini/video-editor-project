import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useEditorStore } from '../../store/editorStore';
import { Box } from '@mui/material';

export const VideoPlayer: React.FC = () => {
  const playerRef = useRef<ReactPlayer>(null);
  const { currentTime, playing, timeline, volume } = useEditorStore();

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(currentTime, 'seconds');
    }
  }, [currentTime]);

  return (
    <Box className="relative w-full h-full bg-black">
      <ReactPlayer
        ref={playerRef}
        url={timeline[0]?.clips[0]?.url}
        playing={playing}
        volume={volume}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        onProgress={({ playedSeconds }) => {
          if (Math.abs(playedSeconds - currentTime) > 0.5) {
            useEditorStore.getState().actions.setCurrentTime(playedSeconds);
          }
        }}
      />
    </Box>
  );
};