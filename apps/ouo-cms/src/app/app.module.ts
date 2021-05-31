import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { API_CONFIG_TOKEN, API_HEADER_TOKEN } from '@neux/core';
import { RENDER_ENVIROMENT_TOKEN } from '@neux/render/common';
import { CmsModule, CMS_ENVIROMENT_TOKEN, DatePickerModule, CMS_CUSTOM_ACTION_TOKEN, HTML_EDITOR_CONFIG_TOKEN } from '@neux/cms-core';
import { OuoLibModule, OUO_CMS_RENDER_CUSTOM_LAYOUT_MAPPINGS } from 'ouo-lib';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalHeader } from './global/common/global-header';
import { CUSTOM_ACTIONS } from './global/common/custom-action';
import { HTML_EDITOR_CONFIG_DEFAULT } from './global/common/html-editor-config-default';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RENDER_CUSTOM_COMPONENT_MAPPINGS_TOKEN } from '@neux/render/renderer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CmsModule.forRoot(),
    MatButtonModule,
    MatFormFieldModule,
    DatePickerModule,
    MatInputModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    OuoLibModule,
    EffectsModule.forRoot([])
  ],
  providers: [
    { provide: 'CMS_API_BASE_URL', useValue: environment.apiBaseUrl },
    { provide: 'RENDER_API_BASE_URL', useValue: environment.renderApiBaseUrl },
    { provide: HTML_EDITOR_CONFIG_TOKEN, useValue: HTML_EDITOR_CONFIG_DEFAULT, multi: true },
    { provide: RENDER_CUSTOM_COMPONENT_MAPPINGS_TOKEN, useValue: OUO_CMS_RENDER_CUSTOM_LAYOUT_MAPPINGS },
    { provide: CMS_ENVIROMENT_TOKEN, useValue: environment },
    { provide: RENDER_ENVIROMENT_TOKEN, useValue: environment },
    { provide: API_CONFIG_TOKEN, useValue: environment },
    { provide: API_HEADER_TOKEN, useExisting: GlobalHeader },
    { provide: CMS_CUSTOM_ACTION_TOKEN, useValue: CUSTOM_ACTIONS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
