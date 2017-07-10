import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {JavaComponent} from "./java/java.component";
import {JavaMainComponent} from "./java/java.main.component";
import {JavaAnonymousComponent} from "./java/java.anonymous.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'java', component: JavaComponent, children: [
    {path: '', component: JavaMainComponent},
    {path: 'anonymous', component: JavaAnonymousComponent},
  ]}

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
