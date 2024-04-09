import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TaxeLotissementAdminService} from 'src/app/shared/service/admin/lotissement/TaxeLotissementAdmin.service';
import {TaxeLotissementDto} from 'src/app/shared/model/lotissement/TaxeLotissement.model';
import {TaxeLotissementCriteria} from 'src/app/shared/criteria/lotissement/TaxeLotissementCriteria.model';


import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableAdminService} from 'src/app/shared/service/admin/commun/RedevableAdmin.service';

@Component({
  selector: 'app-taxe-lotissement-edit-admin',
  templateUrl: './taxe-lotissement-edit-admin.component.html'
})
export class TaxeLotissementEditAdminComponent extends AbstractEditController<TaxeLotissementDto, TaxeLotissementCriteria, TaxeLotissementAdminService>   implements OnInit {



    private _validRedevableCin = true;



    constructor( private taxeLotissementService: TaxeLotissementAdminService , private redevableService: RedevableAdminService) {
        super(taxeLotissementService);
    }

    ngOnInit(): void {
        this.redevable = new RedevableDto();
        this.redevableService.findAll().subscribe((data) => this.redevables = data);
    }
    public override prepareEdit() {
        this.item.dateDePresentation = this.taxeLotissementService.format(this.item.dateDePresentation);
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
