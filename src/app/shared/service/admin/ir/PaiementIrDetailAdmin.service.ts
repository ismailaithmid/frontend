import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {PaiementIrDetailDto} from 'src/app/shared/model/ir/PaiementIrDetail.model';
import {PaiementIrDetailCriteria} from 'src/app/shared/criteria/ir/PaiementIrDetailCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PaiementIrDetailAdminService extends AbstractService<PaiementIrDetailDto, PaiementIrDetailCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PaiementIrDetailDto {
        return new PaiementIrDetailDto();
    }

    public constrcutCriteria(): PaiementIrDetailCriteria {
        return new PaiementIrDetailCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/paiementIrDetail/';
    }
}
