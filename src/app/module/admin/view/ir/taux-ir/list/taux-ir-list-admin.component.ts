import {Component, OnInit} from '@angular/core';
import {TauxIrAdminService} from 'src/app/shared/service/admin/ir/TauxIrAdmin.service';
import {TauxIrDto} from 'src/app/shared/model/ir/TauxIr.model';
import {TauxIrCriteria} from 'src/app/shared/criteria/ir/TauxIrCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-taux-ir-list-admin',
  templateUrl: './taux-ir-list-admin.component.html'
})
export class TauxIrListAdminComponent extends AbstractListController<TauxIrDto, TauxIrCriteria, TauxIrAdminService>  implements OnInit {

    override fileName = 'TauxIr';




    constructor( private tauxIrService: TauxIrAdminService  ) {
        super(tauxIrService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TauxIr').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'salaireMin', header: 'Salaire min'},
            {field: 'salaireMax', header: 'Salaire max'},
            {field: 'pourcentage', header: 'Pourcentage'},
            {field: 'dateMin', header: 'Date min'},
            {field: 'dateMax', header: 'Date max'},
            {field: 'cotisationPatronal', header: 'Cotisation patronal'},
            {field: 'cotisationSalarial', header: 'Cotisation salarial'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Salaire min': e.salaireMin ,
                 'Salaire max': e.salaireMax ,
                 'Pourcentage': e.pourcentage ,
                'Date min': this.datePipe.transform(e.dateMin , 'dd/MM/yyyy hh:mm'),
                'Date max': this.datePipe.transform(e.dateMax , 'dd/MM/yyyy hh:mm'),
                 'Cotisation patronal': e.cotisationPatronal ,
                 'Cotisation salarial': e.cotisationSalarial ,
            }
        });

        this.criteriaData = [{
            'Salaire min Min': this.criteria.salaireMinMin ? this.criteria.salaireMinMin : environment.emptyForExport ,
            'Salaire min Max': this.criteria.salaireMinMax ? this.criteria.salaireMinMax : environment.emptyForExport ,
            'Salaire max Min': this.criteria.salaireMaxMin ? this.criteria.salaireMaxMin : environment.emptyForExport ,
            'Salaire max Max': this.criteria.salaireMaxMax ? this.criteria.salaireMaxMax : environment.emptyForExport ,
            'Pourcentage Min': this.criteria.pourcentageMin ? this.criteria.pourcentageMin : environment.emptyForExport ,
            'Pourcentage Max': this.criteria.pourcentageMax ? this.criteria.pourcentageMax : environment.emptyForExport ,
            'Date min Min': this.criteria.dateMinFrom ? this.datePipe.transform(this.criteria.dateMinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date min Max': this.criteria.dateMinTo ? this.datePipe.transform(this.criteria.dateMinTo , this.dateFormat) : environment.emptyForExport ,
            'Date max Min': this.criteria.dateMaxFrom ? this.datePipe.transform(this.criteria.dateMaxFrom , this.dateFormat) : environment.emptyForExport ,
            'Date max Max': this.criteria.dateMaxTo ? this.datePipe.transform(this.criteria.dateMaxTo , this.dateFormat) : environment.emptyForExport ,
            'Cotisation patronal Min': this.criteria.cotisationPatronalMin ? this.criteria.cotisationPatronalMin : environment.emptyForExport ,
            'Cotisation patronal Max': this.criteria.cotisationPatronalMax ? this.criteria.cotisationPatronalMax : environment.emptyForExport ,
            'Cotisation salarial Min': this.criteria.cotisationSalarialMin ? this.criteria.cotisationSalarialMin : environment.emptyForExport ,
            'Cotisation salarial Max': this.criteria.cotisationSalarialMax ? this.criteria.cotisationSalarialMax : environment.emptyForExport ,
        }];
      }
}
