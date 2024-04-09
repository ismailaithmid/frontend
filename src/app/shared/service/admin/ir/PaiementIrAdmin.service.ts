import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {PaiementIrDto} from 'src/app/shared/model/ir/PaiementIr.model';
import {PaiementIrCriteria} from 'src/app/shared/criteria/ir/PaiementIrCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PaiementIrAdminService extends AbstractService<PaiementIrDto, PaiementIrCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PaiementIrDto {
        return new PaiementIrDto();
    }

    public constrcutCriteria(): PaiementIrCriteria {
        return new PaiementIrCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/paiementIr/';
    }
}
