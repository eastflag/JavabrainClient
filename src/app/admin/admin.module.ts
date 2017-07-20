import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {AnswerComponent} from "./answer/answer.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AdminRouting} from "./admin.routing";
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
import {AdminService} from "./admin.service";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {TreeModule} from "angular-tree-component";

@NgModule({
  declarations: [
    AdminComponent,
    AnswerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRouting,
    FlexLayoutModule,
    TreeModule,
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
  providers: [AdminService],
})
export class AdminModule { }
