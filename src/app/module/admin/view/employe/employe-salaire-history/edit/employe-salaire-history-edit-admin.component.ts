import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {EmployeSalaireHistoryAdminService} from 'src/app/shared/service/admin/employe/EmployeSalaireHistoryAdmin.service';
import {EmployeSalaireHistoryDto} from 'src/app/shared/model/employe/EmployeSalaireHistory.model';
import {EmployeSalaireHistoryCriteria} from 'src/app/shared/criteria/employe/EmployeSalaireHistoryCriteria.model';


import {SocieteDto} from 'src/app/shared/model/avancement/Societe.model';
import {SocieteAdminService} from 'src/app/shared/service/admin/avancement/SocieteAdmin.service';
import {EmployeDto} from 'src/app/shared/model/employe/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/employe/EmployeAdmin.service';

@Component({
  selector: 'app-employe-salaire-history-edit-admin',
  templateUrl: './employe-salaire-history-edit-admin.component.html'
})
export class EmployeSalaireHistoryEditAdminComponent extends AbstractEditController<EmployeSalaireHistoryDto, EmployeSalaireHistoryCriteria, EmployeSalaireHistoryAdminService>   implements OnInit {



    private _validSocieteIce = true;



    constructor( private employeSalaireHistoryService: EmployeSalaireHistoryAdminService , private societeService: SocieteAdminService, private employeService: EmployeAdminService) {
        super(employeSalaireHistoryService);
    }

    ngOnInit(): void {
        this.societe = new SocieteDto();
        this.societeService.findAll().subscribe((data) => this.societes = data);
        this.employe = new EmployeDto();
        this.employeService.findAll().subscribe((data) => this.employes = data);
    }


    public override setValidation(value: boolean){
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateEmploye(employe: string) {
        const isPermistted = await this.roleService.isPermitted('Employe', 'edit');
        if (isPermistted) {
             this.employe = new EmployeDto();
             this.createEmployeDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get societe(): SocieteDto {
       return this.societeService.item;
   }
  set societe(value: SocieteDto) {
        this.societeService.item = value;
   }
   get societes(): Array<SocieteDto> {
        return this.societeService.items;
   }
   set societes(value: Array<SocieteDto>) {
        this.societeService.items = value;
   }
   get createSocieteDialog(): boolean {
       return this.societeService.createDialog;
   }
  set createSocieteDialog(value: boolean) {
       this.societeService.createDialog= value;
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



    get validSocieteIce(): boolean {
        return this._validSocieteIce;
    }
    set validSocieteIce(value: boolean) {
        this._validSocieteIce = value;
    }
}
