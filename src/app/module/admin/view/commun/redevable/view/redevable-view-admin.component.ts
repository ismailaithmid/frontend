import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {RedevableAdminService} from 'src/app/shared/service/admin/commun/RedevableAdmin.service';
import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableCriteria} from 'src/app/shared/criteria/commun/RedevableCriteria.model';

@Component({
  selector: 'app-redevable-view-admin',
  templateUrl: './redevable-view-admin.component.html'
})
export class RedevableViewAdminComponent extends AbstractViewController<RedevableDto, RedevableCriteria, RedevableAdminService> implements OnInit {


    constructor(private redevableService: RedevableAdminService){
        super(redevableService);
    }

    ngOnInit(): void {
    }




}
