import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TaxeLotissementDto} from 'src/app/shared/model/lotissement/TaxeLotissement.model';
import {TaxeLotissementCriteria} from 'src/app/shared/criteria/lotissement/TaxeLotissementCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TaxeLotissementAdminService extends AbstractService<TaxeLotissementDto, TaxeLotissementCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TaxeLotissementDto {
        return new TaxeLotissementDto();
    }

    public constrcutCriteria(): TaxeLotissementCriteria {
        return new TaxeLotissementCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/taxeLotissement/';
    }
}
