import { setup } from '@twind/tailwind';
import tailwindConfig from '../tailwind.config.js';

// Exporting a function instead of calling setup() directly,
// to avoid modules with side effects.
// https://remix.run/docs/en/v1/guides/constraints#no-module-side-effects
export function setupTwind() {
  setup(tailwindConfig);
}
