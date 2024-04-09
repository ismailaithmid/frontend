import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TauxTaxeLotissementAdminService} from 'src/app/shared/service/admin/lotissement/TauxTaxeLotissementAdmin.service';
import {TauxTaxeLotissementDto} from 'src/app/shared/model/lotissement/TauxTaxeLotissement.model';
import {TauxTaxeLotissementCriteria} from 'src/app/shared/criteria/lotissement/TauxTaxeLotissementCriteria.model';
@Component({
  selector: 'app-taux-taxe-lotissement-create-admin',
  templateUrl: './taux-taxe-lotissement-create-admin.component.html'
})
export class TauxTaxeLotissementCreateAdminComponent extends AbstractCreateController<TauxTaxeLotissementDto, TauxTaxeLotissementCriteria, TauxTaxeLotissementAdminService>  implements OnInit {




    constructor( private tauxTaxeLotissementService: TauxTaxeLotissementAdminService ) {
        super(tauxTaxeLotissementService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
