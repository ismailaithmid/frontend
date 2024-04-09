import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {RedevableAdminService} from 'src/app/shared/service/admin/commun/RedevableAdmin.service';
import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableCriteria} from 'src/app/shared/criteria/commun/RedevableCriteria.model';
@Component({
  selector: 'app-redevable-create-admin',
  templateUrl: './redevable-create-admin.component.html'
})
export class RedevableCreateAdminComponent extends AbstractCreateController<RedevableDto, RedevableCriteria, RedevableAdminService>  implements OnInit {



   private _validRedevableCin = true;

    constructor( private redevableService: RedevableAdminService ) {
        super(redevableService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validRedevableCin = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateRedevableCin();
    }

    public validateRedevableCin(){
        if (this.stringUtilService.isEmpty(this.item.cin)) {
        this.errorMessages.push('Cin non valide');
        this.validRedevableCin = false;
        } else {
            this.validRedevableCin = true;
        }
    }






    get validRedevableCin(): boolean {
        return this._validRedevableCin;
    }

    set validRedevableCin(value: boolean) {
         this._validRedevableCin = value;
    }



}
