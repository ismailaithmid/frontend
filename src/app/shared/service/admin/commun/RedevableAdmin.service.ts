import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableCriteria} from 'src/app/shared/criteria/commun/RedevableCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class RedevableAdminService extends AbstractService<RedevableDto, RedevableCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): RedevableDto {
        return new RedevableDto();
    }

    public constrcutCriteria(): RedevableCriteria {
        return new RedevableCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/redevable/';
    }
}
