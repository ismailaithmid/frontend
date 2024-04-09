import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TauxTaxeLotissementAdminService} from 'src/app/shared/service/admin/lotissement/TauxTaxeLotissementAdmin.service';
import {TauxTaxeLotissementDto} from 'src/app/shared/model/lotissement/TauxTaxeLotissement.model';
import {TauxTaxeLotissementCriteria} from 'src/app/shared/criteria/lotissement/TauxTaxeLotissementCriteria.model';



@Component({
  selector: 'app-taux-taxe-lotissement-edit-admin',
  templateUrl: './taux-taxe-lotissement-edit-admin.component.html'
})
export class TauxTaxeLotissementEditAdminComponent extends AbstractEditController<TauxTaxeLotissementDto, TauxTaxeLotissementCriteria, TauxTaxeLotissementAdminService>   implements OnInit {






    constructor( private tauxTaxeLotissementService: TauxTaxeLotissementAdminService ) {
        super(tauxTaxeLotissementService);
    }

    ngOnInit(): void {
    }
    public override prepareEdit() {
        this.item.dateAppMin = this.tauxTaxeLotissementService.format(this.item.dateAppMin);
        this.item.dateAppMax = this.tauxTaxeLotissementService.format(this.item.dateAppMax);
    }



    public override setValidation(value: boolean){
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
