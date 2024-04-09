import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TauxTaxeLotissementDto} from 'src/app/shared/model/lotissement/TauxTaxeLotissement.model';
import {TauxTaxeLotissementCriteria} from 'src/app/shared/criteria/lotissement/TauxTaxeLotissementCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TauxTaxeLotissementAdminService extends AbstractService<TauxTaxeLotissementDto, TauxTaxeLotissementCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TauxTaxeLotissementDto {
        return new TauxTaxeLotissementDto();
    }

    public constrcutCriteria(): TauxTaxeLotissementCriteria {
        return new TauxTaxeLotissementCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/tauxTaxeLotissement/';
    }
}
