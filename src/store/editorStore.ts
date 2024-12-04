import create from 'zustand';
import { VideoClip, AudioTrack, Effect, TimelineTrack } from '../types';

interface EditorState {
  timeline: TimelineTrack[];
  currentTime: number;
  duration: number;
  playing: boolean;
  selectedClipId: string | null;
  zoom: number;
  volume: number;
  effects: {
    brightness: number;
    contrast: number;
    saturation: number;
  };
  actions: {
    addClip: (track: TimelineTrack, clip: VideoClip | AudioTrack | Effect) => void;
    removeClip: (trackId: string, clipId: string) => void;
    updateClip: (trackId: string, clipId: string, updates: Partial<VideoClip | AudioTrack | Effect>) => void;
    setCurrentTime: (time: number) => void;
    setPlaying: (playing: boolean) => void;
    setSelectedClip: (clipId: string | null) => void;
    setZoom: (zoom: number) => void;
    setVolume: (volume: number) => void;
    setEffects: (effects: Partial<EditorState['effects']>) => void;
  };
}

export const useEditorStore = create<EditorState>((set) => ({
  timeline: [],
  currentTime: 0,
  duration: 0,
  playing: false,
  selectedClipId: null,
  zoom: 1,
  volume: 1,
  effects: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
  },
  actions: {
    addClip: (track, clip) =>
      set((state) => ({
        timeline: state.timeline.map((t) =>
          t.id === track.id ? { ...t, clips: [...t.clips, clip] } : t
        ),
      })),
    removeClip: (trackId, clipId) =>
      set((state) => ({
        timeline: state.timeline.map((track) =>
          track.id === trackId
            ? { ...track, clips: track.clips.filter((clip) => clip.id !== clipId) }
            : track
        ),
      })),
    updateClip: (trackId, clipId, updates) =>
      set((state) => ({
        timeline: state.timeline.map((track) =>
          track.id === trackId
            ? {
                ...track,
                clips: track.clips.map((clip) =>
                  clip.id === clipId ? { ...clip, ...updates } : clip
                ),
              }
            : track
        ),
      })),
    setCurrentTime: (time) => set({ currentTime: time }),
    setPlaying: (playing) => set({ playing }),
    setSelectedClip: (clipId) => set({ selectedClipId: clipId }),
    setZoom: (zoom) => set({ zoom }),
    setVolume: (volume) => set({ volume }),
    setEffects: (effects) =>
      set((state) => ({
        effects: { ...state.effects, ...effects },
      })),
  },
}));