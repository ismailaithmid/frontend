import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {PaiementIrDetailAdminService} from 'src/app/shared/service/admin/ir/PaiementIrDetailAdmin.service';
import {PaiementIrDetailDto} from 'src/app/shared/model/ir/PaiementIrDetail.model';
import {PaiementIrDetailCriteria} from 'src/app/shared/criteria/ir/PaiementIrDetailCriteria.model';


import {PaiementIrDto} from 'src/app/shared/model/ir/PaiementIr.model';
import {PaiementIrAdminService} from 'src/app/shared/service/admin/ir/PaiementIrAdmin.service';
import {TauxIrDto} from 'src/app/shared/model/ir/TauxIr.model';
import {TauxIrAdminService} from 'src/app/shared/service/admin/ir/TauxIrAdmin.service';
import {EmployeDto} from 'src/app/shared/model/employe/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/employe/EmployeAdmin.service';

@Component({
  selector: 'app-paiement-ir-detail-edit-admin',
  templateUrl: './paiement-ir-detail-edit-admin.component.html'
})
export class PaiementIrDetailEditAdminComponent extends AbstractEditController<PaiementIrDetailDto, PaiementIrDetailCriteria, PaiementIrDetailAdminService>   implements OnInit {






    constructor( private paiementIrDetailService: PaiementIrDetailAdminService , private paiementIrService: PaiementIrAdminService, private tauxIrService: TauxIrAdminService, private employeService: EmployeAdminService) {
        super(paiementIrDetailService);
    }

    ngOnInit(): void {
        this.paiementIr = new PaiementIrDto();
        this.paiementIrService.findAll().subscribe((data) => this.paiementIrs = data);
        this.tauxIr = new TauxIrDto();
        this.tauxIrService.findAll().subscribe((data) => this.tauxIrs = data);
        this.employe = new EmployeDto();
        this.employeService.findAll().subscribe((data) => this.employes = data);
    }


    public override setValidation(value: boolean){
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreatePaiementIr(paiementIr: string) {
        const isPermistted = await this.roleService.isPermitted('PaiementIr', 'edit');
        if (isPermistted) {
             this.paiementIr = new PaiementIrDto();
             this.createPaiementIrDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateTauxIr(tauxIr: string) {
        const isPermistted = await this.roleService.isPermitted('TauxIr', 'edit');
        if (isPermistted) {
             this.tauxIr = new TauxIrDto();
             this.createTauxIrDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get paiementIr(): PaiementIrDto {
       return this.paiementIrService.item;
   }
  set paiementIr(value: PaiementIrDto) {
        this.paiementIrService.item = value;
   }
   get paiementIrs(): Array<PaiementIrDto> {
        return this.paiementIrService.items;
   }
   set paiementIrs(value: Array<PaiementIrDto>) {
        this.paiementIrService.items = value;
   }
   get createPaiementIrDialog(): boolean {
       return this.paiementIrService.createDialog;
   }
  set createPaiementIrDialog(value: boolean) {
       this.paiementIrService.createDialog= value;
   }
   get tauxIr(): TauxIrDto {
       return this.tauxIrService.item;
   }
  set tauxIr(value: TauxIrDto) {
        this.tauxIrService.item = value;
   }
   get tauxIrs(): Array<TauxIrDto> {
        return this.tauxIrService.items;
   }
   set tauxIrs(value: Array<TauxIrDto>) {
        this.tauxIrService.items = value;
   }
   get createTauxIrDialog(): boolean {
       return this.tauxIrService.createDialog;
   }
  set createTauxIrDialog(value: boolean) {
       this.tauxIrService.createDialog= value;
   }
   get employe(): EmployeDto {
       return this.employeService.item;
   }
  set employe(value: EmployeDto) {
        this.employeService.item = value;
   }
   get employes(): Array<EmployeDto> {
        return this.employeService.items;
   }
   set employes(value: Array<EmployeDto>) {
        this.employeService.items = value;
   }
   get createEmployeDialog(): boolean {
       return this.employeService.createDialog;
   }
  set createEmployeDialog(value: boolean) {
       this.employeService.createDialog= value;
   }



}
