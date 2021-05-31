import 'reflect-metadata';
import { API_URL as CMS_API_URL, API_TYPE as CMS_API_TYPE } from '@neux/cms-core';
import { API_URL as GARDEN_API_URL, API_TYPE as GARDEN_API_TYPE } from '@neux/render/data-access';
// import { API_URL as OUO_CMS_CMS_API_URL, API_TYPE as OUO_CMS_CMS_API_TYPE } from '../app/global/api/neuxAPI/config';

export const CMS_ENVIRONMENT_BASE = {
  ApiTimeout: 60 * 1000,
  API_URL: {
    ...CMS_API_URL,
    ...GARDEN_API_URL,
    //...OUO_CMS_CMS_API_URL,
  },
  API_TYPE: {
    ...CMS_API_TYPE,
    ...GARDEN_API_TYPE,
    //...OUO_CMS_CMS_API_TYPE,
  },
  chatbot: {
    apiUrl: ''
  }
};
