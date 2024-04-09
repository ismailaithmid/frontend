import {Component, OnInit} from '@angular/core';
import {EmployeAdminService} from 'src/app/shared/service/admin/employe/EmployeAdmin.service';
import {EmployeDto} from 'src/app/shared/model/employe/Employe.model';
import {EmployeCriteria} from 'src/app/shared/criteria/employe/EmployeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {SocieteDto} from 'src/app/shared/model/avancement/Societe.model';
import {SocieteAdminService} from 'src/app/shared/service/admin/avancement/SocieteAdmin.service';


@Component({
  selector: 'app-employe-list-admin',
  templateUrl: './employe-list-admin.component.html'
})
export class EmployeListAdminComponent extends AbstractListController<EmployeDto, EmployeCriteria, EmployeAdminService>  implements OnInit {

    override fileName = 'Employe';


    societes: Array<SocieteDto>;


    constructor( private employeService: EmployeAdminService  , private societeService: SocieteAdminService) {
        super(employeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Employe').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadSociete();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'firstname', header: 'Firstname'},
            {field: 'lastname', header: 'Lastname'},
            {field: 'societe?.ice', header: 'Societe'},
        ];
    }


    public async loadSociete(){
       this.societeService.findAllOptimized().subscribe(societes => this.societes = societes, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Firstname': e.firstname ,
                 'Lastname': e.lastname ,
                'Societe': e.societe?.ice ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Firstname': this.criteria.firstname ? this.criteria.firstname : environment.emptyForExport ,
            'Lastname': this.criteria.lastname ? this.criteria.lastname : environment.emptyForExport ,
        //'Societe': this.criteria.societe?.ice ? this.criteria.societe?.ice : environment.emptyForExport ,
        }];
      }
}
