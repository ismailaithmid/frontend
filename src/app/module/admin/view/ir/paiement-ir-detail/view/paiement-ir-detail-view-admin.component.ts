import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

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
  selector: 'app-paiement-ir-detail-view-admin',
  templateUrl: './paiement-ir-detail-view-admin.component.html'
})
export class PaiementIrDetailViewAdminComponent extends AbstractViewController<PaiementIrDetailDto, PaiementIrDetailCriteria, PaiementIrDetailAdminService> implements OnInit {


    constructor(private paiementIrDetailService: PaiementIrDetailAdminService, private paiementIrService: PaiementIrAdminService, private tauxIrService: TauxIrAdminService, private employeService: EmployeAdminService){
        super(paiementIrDetailService);
    }

    ngOnInit(): void {
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
