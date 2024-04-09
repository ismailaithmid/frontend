import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TaxeLotissementAdminService} from 'src/app/shared/service/admin/lotissement/TaxeLotissementAdmin.service';
import {TaxeLotissementDto} from 'src/app/shared/model/lotissement/TaxeLotissement.model';
import {TaxeLotissementCriteria} from 'src/app/shared/criteria/lotissement/TaxeLotissementCriteria.model';

import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableAdminService} from 'src/app/shared/service/admin/commun/RedevableAdmin.service';
@Component({
  selector: 'app-taxe-lotissement-view-admin',
  templateUrl: './taxe-lotissement-view-admin.component.html'
})
export class TaxeLotissementViewAdminComponent extends AbstractViewController<TaxeLotissementDto, TaxeLotissementCriteria, TaxeLotissementAdminService> implements OnInit {


    constructor(private taxeLotissementService: TaxeLotissementAdminService, private redevableService: RedevableAdminService){
        super(taxeLotissementService);
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
