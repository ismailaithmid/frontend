import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TauxIrAdminService} from 'src/app/shared/service/admin/ir/TauxIrAdmin.service';
import {TauxIrDto} from 'src/app/shared/model/ir/TauxIr.model';
import {TauxIrCriteria} from 'src/app/shared/criteria/ir/TauxIrCriteria.model';

@Component({
  selector: 'app-taux-ir-view-admin',
  templateUrl: './taux-ir-view-admin.component.html'
})
export class TauxIrViewAdminComponent extends AbstractViewController<TauxIrDto, TauxIrCriteria, TauxIrAdminService> implements OnInit {


    constructor(private tauxIrService: TauxIrAdminService){
        super(tauxIrService);
    }

    ngOnInit(): void {
    }




}
