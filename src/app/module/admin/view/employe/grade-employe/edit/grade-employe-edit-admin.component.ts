import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {GradeEmployeAdminService} from 'src/app/shared/service/admin/employe/GradeEmployeAdmin.service';
import {GradeEmployeDto} from 'src/app/shared/model/employe/GradeEmploye.model';
import {GradeEmployeCriteria} from 'src/app/shared/criteria/employe/GradeEmployeCriteria.model';



@Component({
  selector: 'app-grade-employe-edit-admin',
  templateUrl: './grade-employe-edit-admin.component.html'
})
export class GradeEmployeEditAdminComponent extends AbstractEditController<GradeEmployeDto, GradeEmployeCriteria, GradeEmployeAdminService>   implements OnInit {






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
