export interface VideoClip {
  id: string;
  url: string;
  startTime: number;
  endTime: number;
  duration: number;
}

export interface AudioTrack {
  id: string;
  url: string;
  volume: number;
}

export interface Effect {
  id: string;
  type: 'filter' | 'transition' | 'text';
  params: Record<string, any>;
}

export interface TimelineTrack {
  id: string;
  type: 'video' | 'audio' | 'effect';
  clips: (VideoClip | AudioTrack | Effect)[];
}