import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexlpComponent } from './spacexlp.component';

const routes: Routes = [
  { path: '', component: SpacexlpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacexlpRoutingModule { }
