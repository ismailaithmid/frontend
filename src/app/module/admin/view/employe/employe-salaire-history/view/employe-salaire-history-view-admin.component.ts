import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EmployeSalaireHistoryAdminService} from 'src/app/shared/service/admin/employe/EmployeSalaireHistoryAdmin.service';
import {EmployeSalaireHistoryDto} from 'src/app/shared/model/employe/EmployeSalaireHistory.model';
import {EmployeSalaireHistoryCriteria} from 'src/app/shared/criteria/employe/EmployeSalaireHistoryCriteria.model';

import {SocieteDto} from 'src/app/shared/model/avancement/Societe.model';
import {SocieteAdminService} from 'src/app/shared/service/admin/avancement/SocieteAdmin.service';
import {EmployeDto} from 'src/app/shared/model/employe/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/employe/EmployeAdmin.service';
@Component({
  selector: 'app-employe-salaire-history-view-admin',
  templateUrl: './employe-salaire-history-view-admin.component.html'
})
export class EmployeSalaireHistoryViewAdminComponent extends AbstractViewController<EmployeSalaireHistoryDto, EmployeSalaireHistoryCriteria, EmployeSalaireHistoryAdminService> implements OnInit {


    constructor(private employeSalaireHistoryService: EmployeSalaireHistoryAdminService, private societeService: SocieteAdminService, private employeService: EmployeAdminService){
        super(employeSalaireHistoryService);
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
