import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'launches',
    loadChildren: () => import('./spacexlp/spacexlp.module').then(m => m.SpacexlpModule),
    pathMatch: 'full'
  }
  , {
    path: '**',
    redirectTo: 'launches'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
