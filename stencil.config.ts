import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'revogrid-starter',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
