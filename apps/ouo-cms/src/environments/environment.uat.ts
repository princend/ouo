// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { CMS_ENVIRONMENT_BASE } from './base';

const BASE_URL = '';
const RESOUCE_BASE_URL = '';


const CMS_API_URL = 'http://192.168.27.101:8080/cms-api';
const RENDER_API_URL = 'http://192.168.27.101:9080/portal-api';

export const environment = {
  ...CMS_ENVIRONMENT_BASE,
  production: false,
  isShowDebugTools: false,
  apiBaseUrl: CMS_API_URL,
  resourceBaseUrl: CMS_API_URL,
  renderApiBaseUrl: RENDER_API_URL
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
