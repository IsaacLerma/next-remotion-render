import { selectComposition, renderMedia } from '@remotion/renderer';
import { bundle } from '@remotion/bundler';
import { COMPOSITION_NAME, DATASET } from './config.mjs';

const compositionId = COMPOSITION_NAME;

const bundleLocation = await bundle({
  entryPoint: './src/remotion/index.ts',
  // If you have a webpack override in remotion.config.ts, pass it here as well.
  // webpackOverride: webpackOverride,
});

for (const entry of DATASET) {
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: compositionId,
    inputProps: entry,
  });

  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: 'h264',
    outputLocation: `out/${entry.name}.mp4`,
    inputProps: entry,
  });
}
