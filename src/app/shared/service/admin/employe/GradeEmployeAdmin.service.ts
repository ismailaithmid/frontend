import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {GradeEmployeDto} from 'src/app/shared/model/employe/GradeEmploye.model';
import {GradeEmployeCriteria} from 'src/app/shared/criteria/employe/GradeEmployeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class GradeEmployeAdminService extends AbstractService<GradeEmployeDto, GradeEmployeCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): GradeEmployeDto {
        return new GradeEmployeDto();
    }

    public constrcutCriteria(): GradeEmployeCriteria {
        return new GradeEmployeCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/gradeEmploye/';
    }
}
