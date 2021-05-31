import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsDemoComponent } from './components-demo/components-demo.component';
import { TemplatesDemoComponent } from './templates-demo/templates-demo.component';


const routes: Routes = [
  {
    path: 'components-demo',
    component: ComponentsDemoComponent
  },
  {
    path: 'templates-demo',
    component: TemplatesDemoComponent
  },
  {
    path: '**',
    redirectTo: 'templates-demo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
