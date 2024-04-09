import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EmployeAdminService} from 'src/app/shared/service/admin/employe/EmployeAdmin.service';
import {EmployeDto} from 'src/app/shared/model/employe/Employe.model';
import {EmployeCriteria} from 'src/app/shared/criteria/employe/EmployeCriteria.model';

import {SocieteDto} from 'src/app/shared/model/avancement/Societe.model';
import {SocieteAdminService} from 'src/app/shared/service/admin/avancement/SocieteAdmin.service';
@Component({
  selector: 'app-employe-view-admin',
  templateUrl: './employe-view-admin.component.html'
})
export class EmployeViewAdminComponent extends AbstractViewController<EmployeDto, EmployeCriteria, EmployeAdminService> implements OnInit {


    constructor(private employeService: EmployeAdminService, private societeService: SocieteAdminService){
        super(employeService);
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


}
