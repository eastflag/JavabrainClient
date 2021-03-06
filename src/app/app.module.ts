import {BrowserModule} from "@angular/platform-browser";
import {CollectionChangeRecord, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AppRouting} from "./app.routing";
import {MainComponent} from "./main/main.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from "@angular/material";
import {JavaComponent} from "./java/java.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import {JavaMainComponent} from "./java/main/java.main.component";
import {AnonymousComponent} from "./java/anonymous/anonymous.component";
import {AppService} from "./app.service";
import {CollectionComponent} from "./java/collection/collection.component";
import {GenericComponent} from "./java/generic/generic.component";
import {ThreadComponent} from "./java/thread/thread.component";
import {StreamComponent} from "./java/stream/stream.component";
import {JavascriptComponent} from "./javascript/javascript.component";
import {JavascriptMainComponent} from "./javascript/main/javascript.main.component";
import {ArrayComponent} from "./javascript/array/array.component";
import {ObjectComponent} from "./javascript/object/object.component";
import {AnswerViewComponent} from "./shared/answer/answer.view.component";
import {LoginComponent} from "./auth/login.component";
import {DisqusModule} from "angular2-disqus";
import {CoreComponent} from "./javascript/core/core.component";
import {DomComponent} from "./javascript/dom/dom.component";
import {Es6Component} from "./javascript/es6/es6.component";
import {TypescriptComponent} from "./javascript/typescript/typescript.component";
import {SnsdicComponent} from "./snsdic/snsdic.component";
import {PromiseComponent} from "./javascript/promise/promise.component";

@NgModule({
    declarations: [
      AppComponent, MainComponent,
      LoginComponent,
      JavaComponent, JavaMainComponent, AnonymousComponent, CollectionComponent, GenericComponent, ThreadComponent, StreamComponent,
      JavascriptComponent, JavascriptMainComponent, CoreComponent, ArrayComponent, ObjectComponent, DomComponent,
      Es6Component, TypescriptComponent, PromiseComponent,
      AnswerViewComponent,
      SnsdicComponent,
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      AppRouting,
      FlexLayoutModule,
      DisqusModule,
      SharedModule,
      MdButtonModule,
      MdCardModule,
      MdCheckboxModule,
      MdCoreModule,
      MdDatepickerModule,
      MdDialogModule,
      MdExpansionModule,
      MdGridListModule,
      MdIconModule,
      MdInputModule,
      MdListModule,
      MdMenuModule,
      MdNativeDateModule,
      MdProgressBarModule,
      MdProgressSpinnerModule,
      MdRadioModule,
      MdRippleModule,
      MdSelectModule,
      MdSidenavModule,
      MdSliderModule,
      MdSlideToggleModule,
      MdSnackBarModule,
      MdTabsModule,
      MdToolbarModule,
      MdTooltipModule,
    ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
