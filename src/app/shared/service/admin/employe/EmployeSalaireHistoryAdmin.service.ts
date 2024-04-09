import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EmployeSalaireHistoryDto} from 'src/app/shared/model/employe/EmployeSalaireHistory.model';
import {EmployeSalaireHistoryCriteria} from 'src/app/shared/criteria/employe/EmployeSalaireHistoryCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EmployeSalaireHistoryAdminService extends AbstractService<EmployeSalaireHistoryDto, EmployeSalaireHistoryCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EmployeSalaireHistoryDto {
        return new EmployeSalaireHistoryDto();
    }

    public constrcutCriteria(): EmployeSalaireHistoryCriteria {
        return new EmployeSalaireHistoryCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/employeSalaireHistory/';
    }
}
