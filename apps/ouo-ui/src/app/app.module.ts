import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { OuoLibModule } from 'ouo-lib';
import { ComponentsDemoComponent } from './components-demo/components-demo.component';
import { TemplatesDemoComponent } from './templates-demo/templates-demo.component';
import { UiModule } from '@neux/render/ui';
import { RenderCommonModule, RENDER_ENVIROMENT_TOKEN } from '@neux/render/common';
import { RendererModule } from '@neux/render/renderer';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsDemoComponent,
    TemplatesDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    OuoLibModule,
    RenderCommonModule,
    UiModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RendererModule,
  ],
  providers: [{ provide: RENDER_ENVIROMENT_TOKEN, useValue: environment },],
  bootstrap: [AppComponent]
})
export class AppModule { }
