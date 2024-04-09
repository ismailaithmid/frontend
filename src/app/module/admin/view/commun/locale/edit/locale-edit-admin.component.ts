import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {LocaleAdminService} from 'src/app/shared/service/admin/commun/LocaleAdmin.service';
import {LocaleDto} from 'src/app/shared/model/commun/Locale.model';
import {LocaleCriteria} from 'src/app/shared/criteria/commun/LocaleCriteria.model';


import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableAdminService} from 'src/app/shared/service/admin/commun/RedevableAdmin.service';

@Component({
  selector: 'app-locale-edit-admin',
  templateUrl: './locale-edit-admin.component.html'
})
export class LocaleEditAdminComponent extends AbstractEditController<LocaleDto, LocaleCriteria, LocaleAdminService>   implements OnInit {



    private _validRedevableCin = true;



    constructor( private localeService: LocaleAdminService , private redevableService: RedevableAdminService) {
        super(localeService);
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



   public async openCreateRedevable(redevable: string) {
        const isPermistted = await this.roleService.isPermitted('Redevable', 'edit');
        if (isPermistted) {
             this.redevable = new RedevableDto();
             this.createRedevableDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
