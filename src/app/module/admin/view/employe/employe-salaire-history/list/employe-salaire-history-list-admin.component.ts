import {Component, OnInit} from '@angular/core';
import {EmployeSalaireHistoryAdminService} from 'src/app/shared/service/admin/employe/EmployeSalaireHistoryAdmin.service';
import {EmployeSalaireHistoryDto} from 'src/app/shared/model/employe/EmployeSalaireHistory.model';
import {EmployeSalaireHistoryCriteria} from 'src/app/shared/criteria/employe/EmployeSalaireHistoryCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {SocieteDto} from 'src/app/shared/model/avancement/Societe.model';
import {SocieteAdminService} from 'src/app/shared/service/admin/avancement/SocieteAdmin.service';
import {EmployeDto} from 'src/app/shared/model/employe/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/employe/EmployeAdmin.service';


@Component({
  selector: 'app-employe-salaire-history-list-admin',
  templateUrl: './employe-salaire-history-list-admin.component.html'
})
export class EmployeSalaireHistoryListAdminComponent extends AbstractListController<EmployeSalaireHistoryDto, EmployeSalaireHistoryCriteria, EmployeSalaireHistoryAdminService>  implements OnInit {

    override fileName = 'EmployeSalaireHistory';


    societes: Array<SocieteDto>;
    employes: Array<EmployeDto>;


    constructor( private employeSalaireHistoryService: EmployeSalaireHistoryAdminService  , private societeService: SocieteAdminService, private employeService: EmployeAdminService) {
        super(employeSalaireHistoryService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('EmployeSalaireHistory').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadSociete();
                this.loadEmploye();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'moisdepart', header: 'Moisdepart'},
            {field: 'moisFin', header: 'Mois fin'},
            {field: 'anneeDepart', header: 'Annee depart'},
            {field: 'anneeFin', header: 'Annee fin'},
            {field: 'salaireBrute', header: 'Salaire brute'},
            {field: 'societe?.ice', header: 'Societe'},
            {field: 'employe?.id', header: 'Employe'},
            {field: 'ref', header: 'Ref'},
        ];
    }


    public async loadSociete(){
       this.societeService.findAllOptimized().subscribe(societes => this.societes = societes, error => console.log(error))
    }
    public async loadEmploye(){
       this.employeService.findAll().subscribe(employes => this.employes = employes, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Moisdepart': e.moisdepart ,
                 'Mois fin': e.moisFin ,
                 'Annee depart': e.anneeDepart ,
                 'Annee fin': e.anneeFin ,
                 'Salaire brute': e.salaireBrute ,
                'Societe': e.societe?.ice ,
                'Employe': e.employe?.id ,
                 'Ref': e.ref ,
            }
        });

        this.criteriaData = [{
            'Moisdepart Min': this.criteria.moisdepartMin ? this.criteria.moisdepartMin : environment.emptyForExport ,
            'Moisdepart Max': this.criteria.moisdepartMax ? this.criteria.moisdepartMax : environment.emptyForExport ,
            'Mois fin Min': this.criteria.moisFinMin ? this.criteria.moisFinMin : environment.emptyForExport ,
            'Mois fin Max': this.criteria.moisFinMax ? this.criteria.moisFinMax : environment.emptyForExport ,
            'Annee depart Min': this.criteria.anneeDepartMin ? this.criteria.anneeDepartMin : environment.emptyForExport ,
            'Annee depart Max': this.criteria.anneeDepartMax ? this.criteria.anneeDepartMax : environment.emptyForExport ,
            'Annee fin Min': this.criteria.anneeFinMin ? this.criteria.anneeFinMin : environment.emptyForExport ,
            'Annee fin Max': this.criteria.anneeFinMax ? this.criteria.anneeFinMax : environment.emptyForExport ,
            'Salaire brute Min': this.criteria.salaireBruteMin ? this.criteria.salaireBruteMin : environment.emptyForExport ,
            'Salaire brute Max': this.criteria.salaireBruteMax ? this.criteria.salaireBruteMax : environment.emptyForExport ,
        //'Societe': this.criteria.societe?.ice ? this.criteria.societe?.ice : environment.emptyForExport ,
        //'Employe': this.criteria.employe?.id ? this.criteria.employe?.id : environment.emptyForExport ,
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
        }];
      }
}
