import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TauxIrDto} from 'src/app/shared/model/ir/TauxIr.model';
import {TauxIrCriteria} from 'src/app/shared/criteria/ir/TauxIrCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TauxIrAdminService extends AbstractService<TauxIrDto, TauxIrCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TauxIrDto {
        return new TauxIrDto();
    }

    public constrcutCriteria(): TauxIrCriteria {
        return new TauxIrCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/tauxIr/';
    }
}
