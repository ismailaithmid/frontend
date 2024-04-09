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

import { TaxeLotissementCreateAdminComponent } from './taxe-lotissement/create/taxe-lotissement-create-admin.component';
import { TaxeLotissementEditAdminComponent } from './taxe-lotissement/edit/taxe-lotissement-edit-admin.component';
import { TaxeLotissementViewAdminComponent } from './taxe-lotissement/view/taxe-lotissement-view-admin.component';
import { TaxeLotissementListAdminComponent } from './taxe-lotissement/list/taxe-lotissement-list-admin.component';
import { TauxTaxeLotissementCreateAdminComponent } from './taux-taxe-lotissement/create/taux-taxe-lotissement-create-admin.component';
import { TauxTaxeLotissementEditAdminComponent } from './taux-taxe-lotissement/edit/taux-taxe-lotissement-edit-admin.component';
import { TauxTaxeLotissementViewAdminComponent } from './taux-taxe-lotissement/view/taux-taxe-lotissement-view-admin.component';
import { TauxTaxeLotissementListAdminComponent } from './taux-taxe-lotissement/list/taux-taxe-lotissement-list-admin.component';

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

    TaxeLotissementCreateAdminComponent,
    TaxeLotissementListAdminComponent,
    TaxeLotissementViewAdminComponent,
    TaxeLotissementEditAdminComponent,
    TauxTaxeLotissementCreateAdminComponent,
    TauxTaxeLotissementListAdminComponent,
    TauxTaxeLotissementViewAdminComponent,
    TauxTaxeLotissementEditAdminComponent,
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
  TaxeLotissementCreateAdminComponent,
  TaxeLotissementListAdminComponent,
  TaxeLotissementViewAdminComponent,
  TaxeLotissementEditAdminComponent,
  TauxTaxeLotissementCreateAdminComponent,
  TauxTaxeLotissementListAdminComponent,
  TauxTaxeLotissementViewAdminComponent,
  TauxTaxeLotissementEditAdminComponent,
  ],
})
export class LotissementAdminModule { }
