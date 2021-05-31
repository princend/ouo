import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { PortalModule } from '@angular/cdk/portal';
import { ObserversModule } from '@angular/cdk/observers';
import { NxUiModule } from '@neux/ui';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { RenderCommonModule } from '@neux/render/common';
import { RendererModule } from '@neux/render/renderer';
import { UiModule } from '@neux/render/ui';
import { RenderTemplatesModule } from '@neux/render/renderer-templates';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromCmsReducer from '@neux/render/common';

const COMPONENTS = [
];

/** layout元件 @type {*} */
const CMS_RENDER_LAYOUT_COMPONENTS = [

]

const CMS_RENDER_COMPONENTS = [
  ...CMS_RENDER_LAYOUT_COMPONENTS,
];

@NgModule({
  imports: [
    PortalModule,
    LayoutModule,
    ObserversModule,
    FormsModule,
    NxUiModule,
    SwiperModule,
    RenderCommonModule,
    RendererModule,
    RenderTemplatesModule,
    UiModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromCmsReducer.cmsAppKey, fromCmsReducer.reducer),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  declarations: [
    ...COMPONENTS,
    ...CMS_RENDER_COMPONENTS
  ],
  providers: [
  ],
  exports: [
    ...COMPONENTS,
    ...CMS_RENDER_COMPONENTS,
  ]
})
export class OuoLibModule {
  static forRoot(providers = []): ModuleWithProviders<OuoLibModule> {
    return {
      ngModule: OuoLibModule,
      providers: [
        ...providers,
      ]
    };
  }
}
