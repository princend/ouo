import { NgModule, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { API_CONFIG_TOKEN, API_HEADER_TOKEN } from '@neux/core';
import { RENDER_APP_SHELL_NO_RENDER_COMPONENT_IDS_TOKEN } from '@neux/render/renderer';
import { RENDER_ENVIROMENT_TOKEN } from '@neux/render/common';
import { ServerAppModule, BrowserStateInterceptor, GTagService } from '@neux/render/server-app';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RENDER_APP_SHELL_NO_RENDER_COMPONENT_IDS } from './global/common/render-app-shell-no-render-component-ids';
import { ErrorPageComponent } from './global/component/error-page/error-page.component';
import { environment } from './../environments/environment';
import { GlobalHeader } from './global/common/global-header';
import { FormsModule } from '@angular/forms';
import { OuoLibModule } from 'ouo-lib';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TransferHttpCacheModule,
    OuoLibModule,
  ],
  providers: [
    ...ServerAppModule.forRoot().providers,
    { provide: 'RENDER_API_BASE_URL', useValue: environment.apiBaseUrl },
    { provide: RENDER_APP_SHELL_NO_RENDER_COMPONENT_IDS_TOKEN, useValue: RENDER_APP_SHELL_NO_RENDER_COMPONENT_IDS },
    { provide: API_CONFIG_TOKEN, useValue: environment },
    { provide: RENDER_ENVIROMENT_TOKEN, useValue: environment },
    { provide: API_HEADER_TOKEN, useExisting: GlobalHeader },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrowserStateInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) platformId: any,
    gTagService: GTagService,
  ) {
    gTagService.init(platformId, environment?.google?.GA_TRACKING_ID);
  }
}
