import React, { useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { useEditorStore } from '../../store/editorStore';
import { createFileUrl, validateVideoFile, validateAudioFile } from '../../utils/file';
import { calculateDuration } from '../../utils/time';
import toast from 'react-hot-toast';

export const MediaImport: React.FC = () => {
  const { actions } = useEditorStore();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (validateVideoFile(file) || validateAudioFile(file)) {
      toast.promise(
        (async () => {
          const url = createFileUrl(file);
          const duration = await calculateDuration(file);
          
          const newClip = {
            id: crypto.randomUUID(),
            url,
            startTime: 0,
            duration,
            type: validateVideoFile(file) ? 'video' : 'audio'
          };

          actions.addClip({ id: 'main', type: 'video', clips: [] }, newClip);
        })(),
        {
          loading: 'Importing media...',
          success: 'Media imported successfully!',
          error: 'Failed to import media'
        }
      );
    } else {
      toast.error('Invalid file type. Please upload a video or audio file.');
    }
  }, [actions]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': [],
      'audio/*': []
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4"
    >
      <Box
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-purple-500 bg-purple-500/10' : 'border-gray-600 hover:border-purple-500'}`}
      >
        <input {...getInputProps()} />
        <Typography className="text-gray-300">
          {isDragActive
            ? 'Drop your media here...'
            : 'Drag & drop media here, or click to select'}
        </Typography>
      </Box>
    </motion.div>
  );
};