import { NgModule } from '@angular/core';

import {PrismComponent} from "angular-prism/dist/src/prism.component";
import {AnswerViewComponent} from "./answer/answer.view.component";

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
