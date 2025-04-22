import type React from 'react';
import { Composition } from 'remotion';
import { MyComposition } from './Composition';
import { COMPOSITION_DATA } from '@/lib/my-data';
import {
  COMP_NAME,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from '@/lib/constants';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={COMP_NAME}
        component={MyComposition}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={COMPOSITION_DATA[1]}
      />
    </>
  );
};
