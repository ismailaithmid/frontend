import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {GradeEmployeAdminService} from 'src/app/shared/service/admin/employe/GradeEmployeAdmin.service';
import {GradeEmployeDto} from 'src/app/shared/model/employe/GradeEmploye.model';
import {GradeEmployeCriteria} from 'src/app/shared/criteria/employe/GradeEmployeCriteria.model';
@Component({
  selector: 'app-grade-employe-create-admin',
  templateUrl: './grade-employe-create-admin.component.html'
})
export class GradeEmployeCreateAdminComponent extends AbstractCreateController<GradeEmployeDto, GradeEmployeCriteria, GradeEmployeAdminService>  implements OnInit {




    constructor( private gradeEmployeService: GradeEmployeAdminService ) {
        super(gradeEmployeService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
