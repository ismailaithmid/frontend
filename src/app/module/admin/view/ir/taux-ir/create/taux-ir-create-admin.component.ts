import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TauxIrAdminService} from 'src/app/shared/service/admin/ir/TauxIrAdmin.service';
import {TauxIrDto} from 'src/app/shared/model/ir/TauxIr.model';
import {TauxIrCriteria} from 'src/app/shared/criteria/ir/TauxIrCriteria.model';
@Component({
  selector: 'app-taux-ir-create-admin',
  templateUrl: './taux-ir-create-admin.component.html'
})
export class TauxIrCreateAdminComponent extends AbstractCreateController<TauxIrDto, TauxIrCriteria, TauxIrAdminService>  implements OnInit {




    constructor( private tauxIrService: TauxIrAdminService ) {
        super(tauxIrService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
