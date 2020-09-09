import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacexlpRoutingModule } from './spacexlp-routing.module';
import { SpacexlpComponent } from './spacexlp.component';

@NgModule({
  declarations: [SpacexlpComponent],
  imports: [
    CommonModule,
    SpacexlpRoutingModule
  ]
})
export class SpacexlpModule { }
