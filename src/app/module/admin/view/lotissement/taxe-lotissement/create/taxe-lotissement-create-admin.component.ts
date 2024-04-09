import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TaxeLotissementAdminService} from 'src/app/shared/service/admin/lotissement/TaxeLotissementAdmin.service';
import {TaxeLotissementDto} from 'src/app/shared/model/lotissement/TaxeLotissement.model';
import {TaxeLotissementCriteria} from 'src/app/shared/criteria/lotissement/TaxeLotissementCriteria.model';
import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableAdminService} from 'src/app/shared/service/admin/commun/RedevableAdmin.service';
@Component({
  selector: 'app-taxe-lotissement-create-admin',
  templateUrl: './taxe-lotissement-create-admin.component.html'
})
export class TaxeLotissementCreateAdminComponent extends AbstractCreateController<TaxeLotissementDto, TaxeLotissementCriteria, TaxeLotissementAdminService>  implements OnInit {



    private _validRedevableCin = true;

    constructor( private taxeLotissementService: TaxeLotissementAdminService , private redevableService: RedevableAdminService) {
        super(taxeLotissementService);
    }

    ngOnInit(): void {
        this.redevable = new RedevableDto();
        this.redevableService.findAll().subscribe((data) => this.redevables = data);
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
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
    get createRedevableDialog(): boolean {
       return this.redevableService.createDialog;
    }
    set createRedevableDialog(value: boolean) {
        this.redevableService.createDialog= value;
    }




    get validRedevableCin(): boolean {
        return this._validRedevableCin;
    }
    set validRedevableCin(value: boolean) {
        this._validRedevableCin = value;
    }


}
