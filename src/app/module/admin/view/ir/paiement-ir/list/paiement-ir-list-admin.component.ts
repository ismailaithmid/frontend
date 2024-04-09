import {Component, OnInit} from '@angular/core';
import {PaiementIrAdminService} from 'src/app/shared/service/admin/ir/PaiementIrAdmin.service';
import {PaiementIrDto} from 'src/app/shared/model/ir/PaiementIr.model';
import {PaiementIrCriteria} from 'src/app/shared/criteria/ir/PaiementIrCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {SocieteDto} from 'src/app/shared/model/avancement/Societe.model';
import {SocieteAdminService} from 'src/app/shared/service/admin/avancement/SocieteAdmin.service';
import {TauxIrDto} from 'src/app/shared/model/ir/TauxIr.model';
import {TauxIrAdminService} from 'src/app/shared/service/admin/ir/TauxIrAdmin.service';
import {EmployeDto} from 'src/app/shared/model/employe/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/employe/EmployeAdmin.service';
import {PaiementIrDetailDto} from 'src/app/shared/model/ir/PaiementIrDetail.model';
import {PaiementIrDetailAdminService} from 'src/app/shared/service/admin/ir/PaiementIrDetailAdmin.service';


@Component({
  selector: 'app-paiement-ir-list-admin',
  templateUrl: './paiement-ir-list-admin.component.html'
})
export class PaiementIrListAdminComponent extends AbstractListController<PaiementIrDto, PaiementIrCriteria, PaiementIrAdminService>  implements OnInit {

    override fileName = 'PaiementIr';


    societes: Array<SocieteDto>;


    constructor( private paiementIrService: PaiementIrAdminService  , private societeService: SocieteAdminService, private tauxIrService: TauxIrAdminService, private employeService: EmployeAdminService, private paiementIrDetailService: PaiementIrDetailAdminService) {
        super(paiementIrService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('PaiementIr').subscribe(() => {
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
            {field: 'datePaiementIr', header: 'Date paiement ir'},
            {field: 'totalCotisationPatronal', header: 'Total cotisation patronal'},
            {field: 'totalCotisationSalarial', header: 'Total cotisation salarial'},
            {field: 'month', header: 'Month'},
            {field: 'year', header: 'Year'},
            {field: 'totalSalaireBrut', header: 'Total salaire brut'},
            {field: 'totalSalaireNet', header: 'Total salaire net'},
            {field: 'societe?.ice', header: 'Societe'},
        ];
    }


    public async loadSociete(){
       this.societeService.findAllOptimized().subscribe(societes => this.societes = societes, error => console.log(error))
    }

	public override initDuplicate(res: PaiementIrDto) {
        if (res.paiementIrDetails != null) {
             res.paiementIrDetails.forEach(d => { d.paiementIr = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Date paiement ir': this.datePipe.transform(e.datePaiementIr , 'dd/MM/yyyy hh:mm'),
                 'Total cotisation patronal': e.totalCotisationPatronal ,
                 'Total cotisation salarial': e.totalCotisationSalarial ,
                 'Month': e.month ,
                 'Year': e.year ,
                 'Total salaire brut': e.totalSalaireBrut ,
                 'Total salaire net': e.totalSalaireNet ,
                'Societe': e.societe?.ice ,
            }
        });

        this.criteriaData = [{
            'Date paiement ir Min': this.criteria.datePaiementIrFrom ? this.datePipe.transform(this.criteria.datePaiementIrFrom , this.dateFormat) : environment.emptyForExport ,
            'Date paiement ir Max': this.criteria.datePaiementIrTo ? this.datePipe.transform(this.criteria.datePaiementIrTo , this.dateFormat) : environment.emptyForExport ,
            'Total cotisation patronal Min': this.criteria.totalCotisationPatronalMin ? this.criteria.totalCotisationPatronalMin : environment.emptyForExport ,
            'Total cotisation patronal Max': this.criteria.totalCotisationPatronalMax ? this.criteria.totalCotisationPatronalMax : environment.emptyForExport ,
            'Total cotisation salarial Min': this.criteria.totalCotisationSalarialMin ? this.criteria.totalCotisationSalarialMin : environment.emptyForExport ,
            'Total cotisation salarial Max': this.criteria.totalCotisationSalarialMax ? this.criteria.totalCotisationSalarialMax : environment.emptyForExport ,
            'Month Min': this.criteria.monthMin ? this.criteria.monthMin : environment.emptyForExport ,
            'Month Max': this.criteria.monthMax ? this.criteria.monthMax : environment.emptyForExport ,
            'Year Min': this.criteria.yearMin ? this.criteria.yearMin : environment.emptyForExport ,
            'Year Max': this.criteria.yearMax ? this.criteria.yearMax : environment.emptyForExport ,
            'Total salaire brut Min': this.criteria.totalSalaireBrutMin ? this.criteria.totalSalaireBrutMin : environment.emptyForExport ,
            'Total salaire brut Max': this.criteria.totalSalaireBrutMax ? this.criteria.totalSalaireBrutMax : environment.emptyForExport ,
            'Total salaire net Min': this.criteria.totalSalaireNetMin ? this.criteria.totalSalaireNetMin : environment.emptyForExport ,
            'Total salaire net Max': this.criteria.totalSalaireNetMax ? this.criteria.totalSalaireNetMax : environment.emptyForExport ,
        //'Societe': this.criteria.societe?.ice ? this.criteria.societe?.ice : environment.emptyForExport ,
        }];
      }
}
