import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {LocaleDto} from 'src/app/shared/model/commun/Locale.model';
import {LocaleCriteria} from 'src/app/shared/criteria/commun/LocaleCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class LocaleAdminService extends AbstractService<LocaleDto, LocaleCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): LocaleDto {
        return new LocaleDto();
    }

    public constrcutCriteria(): LocaleCriteria {
        return new LocaleCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/locale/';
    }
}
