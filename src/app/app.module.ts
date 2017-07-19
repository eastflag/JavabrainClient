import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouting} from './app.routing';
import {MainComponent} from './main/main.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MaterialModule, MdButtonModule, MdCardModule, MdCheckboxModule, MdCoreModule,
  MdDatepickerModule, MdDialogModule, MdExpansionModule, MdGridListModule, MdIconModule, MdInputModule, MdListModule,
  MdMenuModule, MdNativeDateModule, MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule, MdRippleModule,
  MdSelectModule, MdSidenavModule, MdSliderModule, MdSlideToggleModule, MdSnackBarModule, MdTabsModule,
  MdTooltipModule, MdToolbarModule
} from "@angular/material";
import {JavaComponent} from "./java/java.component";
import {JavaMainComponent} from "./java/java.main.component";
import {JavaAnonymousComponent} from "./java/java.anonymous.component";
import {PrismComponent} from "angular-prism/dist/src/prism.component";
import {AdminComponent} from "./admin/admin.component";
import {AnswerComponent} from "./admin/answer/answer.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
      AppComponent, MainComponent,
      PrismComponent,
      JavaComponent, JavaMainComponent, JavaAnonymousComponent,
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      AppRouting,
      FlexLayoutModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
