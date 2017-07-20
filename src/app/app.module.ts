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

@NgModule({
    declarations: [
      AppComponent, MainComponent,
      JavaComponent, JavaMainComponent, AnonymousComponent, CollectionComponent, GenericComponent, ThreadComponent, StreamComponent,
      JavascriptComponent, JavascriptMainComponent, ArrayComponent, ObjectComponent,
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      AppRouting,
      FlexLayoutModule,
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
