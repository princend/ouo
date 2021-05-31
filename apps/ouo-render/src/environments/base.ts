import 'reflect-metadata';
import { API_URL as GARDEN_API_URL, API_TYPE as GARDEN_API_TYPE } from '@neux/render/data-access';

export const RENDER_ENVIRONMENT_BASE = {
  ApiTimeout: 60 * 1000,
  API_URL: {
    ...GARDEN_API_URL,
  },
  API_TYPE: {
    ...GARDEN_API_TYPE,
  },
  SERVER_DIST_FOLDER: 'opt/ouo-render/browser',
  LOG_DIR: '/logs'
};
