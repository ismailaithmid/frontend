import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {GradeEmployeAdminService} from 'src/app/shared/service/admin/employe/GradeEmployeAdmin.service';
import {GradeEmployeDto} from 'src/app/shared/model/employe/GradeEmploye.model';
import {GradeEmployeCriteria} from 'src/app/shared/criteria/employe/GradeEmployeCriteria.model';

@Component({
  selector: 'app-grade-employe-view-admin',
  templateUrl: './grade-employe-view-admin.component.html'
})
export class GradeEmployeViewAdminComponent extends AbstractViewController<GradeEmployeDto, GradeEmployeCriteria, GradeEmployeAdminService> implements OnInit {


    constructor(private gradeEmployeService: GradeEmployeAdminService){
        super(gradeEmployeService);
    }

    ngOnInit(): void {
    }




}
