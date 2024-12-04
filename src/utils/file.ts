export const createFileUrl = (file: File): string => {
  return URL.createObjectURL(file);
};

export const validateVideoFile = (file: File): boolean => {
  return file.type.startsWith('video/');
};

export const validateAudioFile = (file: File): boolean => {
  return file.type.startsWith('audio/');
};