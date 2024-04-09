import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TauxTaxeLotissementAdminService} from 'src/app/shared/service/admin/lotissement/TauxTaxeLotissementAdmin.service';
import {TauxTaxeLotissementDto} from 'src/app/shared/model/lotissement/TauxTaxeLotissement.model';
import {TauxTaxeLotissementCriteria} from 'src/app/shared/criteria/lotissement/TauxTaxeLotissementCriteria.model';

@Component({
  selector: 'app-taux-taxe-lotissement-view-admin',
  templateUrl: './taux-taxe-lotissement-view-admin.component.html'
})
export class TauxTaxeLotissementViewAdminComponent extends AbstractViewController<TauxTaxeLotissementDto, TauxTaxeLotissementCriteria, TauxTaxeLotissementAdminService> implements OnInit {


    constructor(private tauxTaxeLotissementService: TauxTaxeLotissementAdminService){
        super(tauxTaxeLotissementService);
    }

    ngOnInit(): void {
    }




}
