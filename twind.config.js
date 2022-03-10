import { defineConfig } from 'twind';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import tailwindConfig from './tailwind.config.js';

export default defineConfig({
  ...tailwindConfig,
  presets: [presetAutoprefix(), presetTailwind()],
});
