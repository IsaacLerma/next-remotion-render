'use client';

import { Player } from '@remotion/player';
import {
  COMP_NAME,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_ID,
  VIDEO_WIDTH,
} from '../lib/constants';
import { MyComposition } from '../remotion/Composition';
import { COMPOSITION_DATA } from '../lib/my-data';
import { useState } from 'react';
import type { CompositionProps, RenderVideoBody } from '@/types/types';

export default function Home() {
  const [isRendering, setIsRendering] = useState(false);
  const url = process.env.RENDER_VIDEO_URL;

  const handleClick = async () => {
    setIsRendering(true);
    const body: RenderVideoBody<CompositionProps> = {
      composition_id: COMP_NAME,
      input_props: COMPOSITION_DATA[0],
    };
    const res = await fetch(`${url}studio/render-video/${VIDEO_ID}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    alert(data.message);
    if (data.url) {
      window.open(data.url, '_blank');
    }
    setIsRendering(false);
  };

  return (
    <div>
      <div className="max-w-screen-md m-auto mb-5">
        <h1 className="text-2xl font-bold">Remotion Player</h1>
        <div className="overflow-hidden rounded-geist shadow-[0_0_200px_rgba(0,0,0,0.15)] mb-10 mt-16">
          <Player
            component={MyComposition}
            inputProps={COMPOSITION_DATA[0]}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            style={{
              // Can't use tailwind class for width since player's default styles take presedence over tailwind's,
              // but not over inline styles
              width: '100%',
            }}
            controls
            autoPlay
            loop
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md mx-auto flex justify-center"
          onClick={handleClick}
          disabled={isRendering}>
          Render Video
        </button>
      </div>
    </div>
  );
}
