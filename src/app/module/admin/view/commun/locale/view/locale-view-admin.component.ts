import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {LocaleAdminService} from 'src/app/shared/service/admin/commun/LocaleAdmin.service';
import {LocaleDto} from 'src/app/shared/model/commun/Locale.model';
import {LocaleCriteria} from 'src/app/shared/criteria/commun/LocaleCriteria.model';

import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableAdminService} from 'src/app/shared/service/admin/commun/RedevableAdmin.service';
@Component({
  selector: 'app-locale-view-admin',
  templateUrl: './locale-view-admin.component.html'
})
export class LocaleViewAdminComponent extends AbstractViewController<LocaleDto, LocaleCriteria, LocaleAdminService> implements OnInit {


    constructor(private localeService: LocaleAdminService, private redevableService: RedevableAdminService){
        super(localeService);
    }

    ngOnInit(): void {
    }


    get redevable(): RedevableDto {
       return this.redevableService.item;
    }
    set redevable(value: RedevableDto) {
        this.redevableService.item = value;
    }
    get redevables(): Array<RedevableDto> {
       return this.redevableService.items;
    }
    set redevables(value: Array<RedevableDto>) {
        this.redevableService.items = value;
    }


}
