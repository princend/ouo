// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { RENDER_ENVIRONMENT_BASE } from './base';

const BASE_URL = 'https://ouo-sit.walkflow.biz/portal-api';
const RESOUCE_BASE_URL = 'https://ouo-sit.walkflow.biz/cms-api';

export const environment = {
  ...RENDER_ENVIRONMENT_BASE,
  SERVER_DIST_FOLDER: '/home/jboss/opt/ouo-render/browser',
  production: false,
  isShowDebugTools: false,
  apiBaseUrl: BASE_URL,
  resourceBaseUrl: RESOUCE_BASE_URL,
  siteWhitelist: [],  //跨站白名單
  csso: {
    actionUrl: `${BASE_URL}/CSSO/Login`,
  },
  google: {
    GA_TRACKING_ID: 'UA-175666152-1',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
