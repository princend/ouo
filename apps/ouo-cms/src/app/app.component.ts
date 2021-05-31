import { Component, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { AppState, setAppVersionAction } from '@neux/render/common';
import { Store } from '@ngrx/store';
import { CmsEnviroment, CMS_ENVIROMENT_TOKEN } from '@neux/cms-core';

declare let require: any
const packagejson = require('../../../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private store: Store<AppState>,
    @Inject(CMS_ENVIROMENT_TOKEN) private environment: CmsEnviroment,
  ) {
    this.matIconRegistry.registerFontClassAlias('fontawasome', 'fa');

    // 從 package.json 拿到 app 版號，存進 store
    this.store.dispatch(setAppVersionAction({ payload: packagejson?.version ?? '' }));
  }
}
