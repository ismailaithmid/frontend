import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {RedevableAdminService} from 'src/app/shared/service/admin/commun/RedevableAdmin.service';
import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableCriteria} from 'src/app/shared/criteria/commun/RedevableCriteria.model';



@Component({
  selector: 'app-redevable-edit-admin',
  templateUrl: './redevable-edit-admin.component.html'
})
export class RedevableEditAdminComponent extends AbstractEditController<RedevableDto, RedevableCriteria, RedevableAdminService>   implements OnInit {


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
