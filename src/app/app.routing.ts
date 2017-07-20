import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {JavaComponent} from "./java/java.component";
import {JavaMainComponent} from "./java/main/java.main.component";
import {AnonymousComponent} from "./java/anonymous/anonymous.component";
import {CollectionComponent} from "./java/collection/collection.component";
import {StreamComponent} from "./java/stream/stream.component";
import {ThreadComponent} from "./java/thread/thread.component";
import {GenericComponent} from "./java/generic/generic.component";
import {JavascriptComponent} from "./javascript/javascript.component";
import {JavascriptMainComponent} from "./javascript/main/javascript.main.component";
import {ArrayComponent} from "./javascript/array/array.component";
import {ObjectComponent} from "./javascript/object/object.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'java', component: JavaComponent, children: [
    {path: 'main', component: JavaMainComponent},
    {path: 'anonymous', component: AnonymousComponent},
    {path: 'collection', component: CollectionComponent},
    {path: 'generic', component: GenericComponent},
    {path: 'thread', component: ThreadComponent},
    {path: 'stream', component: StreamComponent},
  ]},
  {path: 'javascript', component: JavascriptComponent, children: [
    {path: 'main', component: JavascriptMainComponent},
    {path: 'array', component: ArrayComponent},
    {path: 'object', component: ObjectComponent},
  ]},
  {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
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
