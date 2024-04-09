import {Component, OnInit} from '@angular/core';
import {GradeEmployeAdminService} from 'src/app/shared/service/admin/employe/GradeEmployeAdmin.service';
import {GradeEmployeDto} from 'src/app/shared/model/employe/GradeEmploye.model';
import {GradeEmployeCriteria} from 'src/app/shared/criteria/employe/GradeEmployeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-grade-employe-list-admin',
  templateUrl: './grade-employe-list-admin.component.html'
})
export class GradeEmployeListAdminComponent extends AbstractListController<GradeEmployeDto, GradeEmployeCriteria, GradeEmployeAdminService>  implements OnInit {

    override fileName = 'GradeEmploye';




    constructor( private gradeEmployeService: GradeEmployeAdminService  ) {
        super(gradeEmployeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('GradeEmploye').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
