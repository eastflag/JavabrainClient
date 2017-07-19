import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AnswerComponent} from "./answer/answer.component";

const appRoutes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'answer', component: AnswerComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRouting { }
