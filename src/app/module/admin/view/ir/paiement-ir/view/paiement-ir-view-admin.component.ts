import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

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
  selector: 'app-paiement-ir-view-admin',
  templateUrl: './paiement-ir-view-admin.component.html'
})
export class PaiementIrViewAdminComponent extends AbstractViewController<PaiementIrDto, PaiementIrCriteria, PaiementIrAdminService> implements OnInit {

    paiementIrDetails = new PaiementIrDetailDto();
    paiementIrDetailss: Array<PaiementIrDetailDto> = [];

    constructor(private paiementIrService: PaiementIrAdminService, private societeService: SocieteAdminService, private tauxIrService: TauxIrAdminService, private employeService: EmployeAdminService, private paiementIrDetailService: PaiementIrDetailAdminService){
        super(paiementIrService);
    }

    ngOnInit(): void {
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


}
