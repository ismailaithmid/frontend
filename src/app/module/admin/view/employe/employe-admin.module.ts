import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { GradeEmployeCreateAdminComponent } from './grade-employe/create/grade-employe-create-admin.component';
import { GradeEmployeEditAdminComponent } from './grade-employe/edit/grade-employe-edit-admin.component';
import { GradeEmployeViewAdminComponent } from './grade-employe/view/grade-employe-view-admin.component';
import { GradeEmployeListAdminComponent } from './grade-employe/list/grade-employe-list-admin.component';
import { EmployeSalaireHistoryCreateAdminComponent } from './employe-salaire-history/create/employe-salaire-history-create-admin.component';
import { EmployeSalaireHistoryEditAdminComponent } from './employe-salaire-history/edit/employe-salaire-history-edit-admin.component';
import { EmployeSalaireHistoryViewAdminComponent } from './employe-salaire-history/view/employe-salaire-history-view-admin.component';
import { EmployeSalaireHistoryListAdminComponent } from './employe-salaire-history/list/employe-salaire-history-list-admin.component';
import { EmployeCreateAdminComponent } from './employe/create/employe-create-admin.component';
import { EmployeEditAdminComponent } from './employe/edit/employe-edit-admin.component';
import { EmployeViewAdminComponent } from './employe/view/employe-view-admin.component';
import { EmployeListAdminComponent } from './employe/list/employe-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    GradeEmployeCreateAdminComponent,
    GradeEmployeListAdminComponent,
    GradeEmployeViewAdminComponent,
    GradeEmployeEditAdminComponent,
    EmployeSalaireHistoryCreateAdminComponent,
    EmployeSalaireHistoryListAdminComponent,
    EmployeSalaireHistoryViewAdminComponent,
    EmployeSalaireHistoryEditAdminComponent,
    EmployeCreateAdminComponent,
    EmployeListAdminComponent,
    EmployeViewAdminComponent,
    EmployeEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,
    CardModule,

  ],
  exports: [
  GradeEmployeCreateAdminComponent,
  GradeEmployeListAdminComponent,
  GradeEmployeViewAdminComponent,
  GradeEmployeEditAdminComponent,
  EmployeSalaireHistoryCreateAdminComponent,
  EmployeSalaireHistoryListAdminComponent,
  EmployeSalaireHistoryViewAdminComponent,
  EmployeSalaireHistoryEditAdminComponent,
  EmployeCreateAdminComponent,
  EmployeListAdminComponent,
  EmployeViewAdminComponent,
  EmployeEditAdminComponent,
  ],
})
export class EmployeAdminModule { }
