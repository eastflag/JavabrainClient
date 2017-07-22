import { NgModule } from '@angular/core';
import {PrismComponent} from "./prism.component";

@NgModule({
  declarations: [
    PrismComponent,
  ],
  exports: [
    PrismComponent,
   ],
  providers: [ ]
})
export class SharedModule { }
