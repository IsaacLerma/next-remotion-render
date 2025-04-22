import { selectComposition, renderMedia } from '@remotion/renderer';
import { bundle } from '@remotion/bundler';
import { COMPOSITION_DATA } from '../lib/my-data';
import { COMP_NAME } from '@/lib/constants';

export const renderVideoWithDataSet = async () => {
  const bundleLocation = await bundle({
    entryPoint: './src/remotion/index.ts',
  });

  for (const entry of COMPOSITION_DATA) {
    const composition = await selectComposition({
      serveUrl: bundleLocation,
      id: COMP_NAME,
      inputProps: entry,
    });

    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: 'h264',
      outputLocation: `public/renders/${entry.name}.mp4`,
      inputProps: entry,
    });
  }
};
