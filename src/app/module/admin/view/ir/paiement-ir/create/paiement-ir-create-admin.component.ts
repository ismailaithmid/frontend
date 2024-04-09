import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {PaiementIrAdminService} from 'src/app/shared/service/admin/ir/PaiementIrAdmin.service';
import {PaiementIrDto} from 'src/app/shared/model/ir/PaiementIr.model';
import {PaiementIrCriteria} from 'src/app/shared/criteria/ir/PaiementIrCriteria.model';
import {SocieteDto} from 'src/app/shared/model/avancement/Societe.model';
import {SocieteAdminService} from 'src/app/shared/service/admin/avancement/SocieteAdmin.service';
import {TauxIrDto} from 'src/app/shared/model/ir/TauxIr.model';
import {TauxIrAdminService} from 'src/app/shared/service/admin/ir/TauxIrAdmin.service';
import {EmployeDto} from 'src/app/shared/model/employe/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/employe/EmployeAdmin.service';
import {PaiementIrDetailDto} from 'src/app/shared/model/ir/PaiementIrDetail.model';
import {PaiementIrDetailAdminService} from 'src/app/shared/service/admin/ir/PaiementIrDetailAdmin.service';
@Component({
  selector: 'app-paiement-ir-create-admin',
  templateUrl: './paiement-ir-create-admin.component.html'
})
export class PaiementIrCreateAdminComponent extends AbstractCreateController<PaiementIrDto, PaiementIrCriteria, PaiementIrAdminService>  implements OnInit {

    private _paiementIrDetailsElement = new PaiementIrDetailDto();


    private _validSocieteIce = true;

    constructor( private paiementIrService: PaiementIrAdminService , private societeService: SocieteAdminService, private tauxIrService: TauxIrAdminService, private employeService: EmployeAdminService, private paiementIrDetailService: PaiementIrDetailAdminService) {
        super(paiementIrService);
    }

    ngOnInit(): void {
        this.paiementIrDetailsElement.tauxIr = new TauxIrDto();
        this.tauxIrService.findAll().subscribe((data) => this.tauxIrs = data);
        this.paiementIrDetailsElement.employe = new EmployeDto();
        this.employeService.findAll().subscribe((data) => this.employes = data);
        this.societe = new SocieteDto();
        this.societeService.findAll().subscribe((data) => this.societes = data);
    }



    validatePaiementIrDetails(){
        this.errorMessages = new Array();
    }


    public override setValidation(value: boolean){
    }

    public addPaiementIrDetails() {
        if( this.item.paiementIrDetails == null )
            this.item.paiementIrDetails = new Array<PaiementIrDetailDto>();
       this.validatePaiementIrDetails();
       if (this.errorMessages.length === 0) {
              this.item.paiementIrDetails.push({... this.paiementIrDetailsElement});
              this.paiementIrDetailsElement = new PaiementIrDetailDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletepaiementIrDetails(p: PaiementIrDetailDto) {
        this.item.paiementIrDetails.forEach((element, index) => {
            if (element === p) { this.item.paiementIrDetails.splice(index, 1); }
        });
    }

    public editpaiementIrDetails(p: PaiementIrDetailDto) {
        this.paiementIrDetailsElement = {... p};
        this.activeTab = 0;
    }


    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateTauxIr(tauxIr: string) {
    const isPermistted = await this.roleService.isPermitted('TauxIr', 'add');
    if(isPermistted) {
         this.tauxIr = new TauxIrDto();
         this.createTauxIrDialog = true;
    }else{
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




    get validSocieteIce(): boolean {
        return this._validSocieteIce;
    }
    set validSocieteIce(value: boolean) {
        this._validSocieteIce = value;
    }

    get paiementIrDetailsElement(): PaiementIrDetailDto {
        if( this._paiementIrDetailsElement == null )
            this._paiementIrDetailsElement = new PaiementIrDetailDto();
        return this._paiementIrDetailsElement;
    }

    set paiementIrDetailsElement(value: PaiementIrDetailDto) {
        this._paiementIrDetailsElement = value;
    }

}
