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

import { PaiementIrDetailCreateAdminComponent } from './paiement-ir-detail/create/paiement-ir-detail-create-admin.component';
import { PaiementIrDetailEditAdminComponent } from './paiement-ir-detail/edit/paiement-ir-detail-edit-admin.component';
import { PaiementIrDetailViewAdminComponent } from './paiement-ir-detail/view/paiement-ir-detail-view-admin.component';
import { PaiementIrDetailListAdminComponent } from './paiement-ir-detail/list/paiement-ir-detail-list-admin.component';
import { TauxIrCreateAdminComponent } from './taux-ir/create/taux-ir-create-admin.component';
import { TauxIrEditAdminComponent } from './taux-ir/edit/taux-ir-edit-admin.component';
import { TauxIrViewAdminComponent } from './taux-ir/view/taux-ir-view-admin.component';
import { TauxIrListAdminComponent } from './taux-ir/list/taux-ir-list-admin.component';
import { PaiementIrCreateAdminComponent } from './paiement-ir/create/paiement-ir-create-admin.component';
import { PaiementIrEditAdminComponent } from './paiement-ir/edit/paiement-ir-edit-admin.component';
import { PaiementIrViewAdminComponent } from './paiement-ir/view/paiement-ir-view-admin.component';
import { PaiementIrListAdminComponent } from './paiement-ir/list/paiement-ir-list-admin.component';

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

    PaiementIrDetailCreateAdminComponent,
    PaiementIrDetailListAdminComponent,
    PaiementIrDetailViewAdminComponent,
    PaiementIrDetailEditAdminComponent,
    TauxIrCreateAdminComponent,
    TauxIrListAdminComponent,
    TauxIrViewAdminComponent,
    TauxIrEditAdminComponent,
    PaiementIrCreateAdminComponent,
    PaiementIrListAdminComponent,
    PaiementIrViewAdminComponent,
    PaiementIrEditAdminComponent,
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
  PaiementIrDetailCreateAdminComponent,
  PaiementIrDetailListAdminComponent,
  PaiementIrDetailViewAdminComponent,
  PaiementIrDetailEditAdminComponent,
  TauxIrCreateAdminComponent,
  TauxIrListAdminComponent,
  TauxIrViewAdminComponent,
  TauxIrEditAdminComponent,
  PaiementIrCreateAdminComponent,
  PaiementIrListAdminComponent,
  PaiementIrViewAdminComponent,
  PaiementIrEditAdminComponent,
  ],
})
export class IrAdminModule { }
