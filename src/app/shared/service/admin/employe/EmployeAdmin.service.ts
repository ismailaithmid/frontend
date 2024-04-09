import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EmployeDto} from 'src/app/shared/model/employe/Employe.model';
import {EmployeCriteria} from 'src/app/shared/criteria/employe/EmployeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EmployeAdminService extends AbstractService<EmployeDto, EmployeCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EmployeDto {
        return new EmployeDto();
    }

    public constrcutCriteria(): EmployeCriteria {
        return new EmployeCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/employe/';
    }
}
