import { NgModule } from '@angular/core';

import {PrismComponent} from "angular-prism/dist/src/prism.component";

@NgModule({
  declarations: [
    PrismComponent
  ],
  exports: [
    PrismComponent
   ],
  providers: [ ]
})
export class SharedModule { }
