import {Component, OnInit} from '@angular/core';
import {TauxTaxeLotissementAdminService} from 'src/app/shared/service/admin/lotissement/TauxTaxeLotissementAdmin.service';
import {TauxTaxeLotissementDto} from 'src/app/shared/model/lotissement/TauxTaxeLotissement.model';
import {TauxTaxeLotissementCriteria} from 'src/app/shared/criteria/lotissement/TauxTaxeLotissementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-taux-taxe-lotissement-list-admin',
  templateUrl: './taux-taxe-lotissement-list-admin.component.html'
})
export class TauxTaxeLotissementListAdminComponent extends AbstractListController<TauxTaxeLotissementDto, TauxTaxeLotissementCriteria, TauxTaxeLotissementAdminService>  implements OnInit {

    override fileName = 'TauxTaxeLotissement';




    constructor( private tauxTaxeLotissementService: TauxTaxeLotissementAdminService  ) {
        super(tauxTaxeLotissementService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TauxTaxeLotissement').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'dateAppMin', header: 'Date app min'},
            {field: 'dateAppMax', header: 'Date app max'},
            {field: 'montantParMetreCarre', header: 'Montant par metre carre'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                'Date app min': this.datePipe.transform(e.dateAppMin , 'dd/MM/yyyy hh:mm'),
                'Date app max': this.datePipe.transform(e.dateAppMax , 'dd/MM/yyyy hh:mm'),
                 'Montant par metre carre': e.montantParMetreCarre ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Date app min Min': this.criteria.dateAppMinFrom ? this.datePipe.transform(this.criteria.dateAppMinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date app min Max': this.criteria.dateAppMinTo ? this.datePipe.transform(this.criteria.dateAppMinTo , this.dateFormat) : environment.emptyForExport ,
            'Date app max Min': this.criteria.dateAppMaxFrom ? this.datePipe.transform(this.criteria.dateAppMaxFrom , this.dateFormat) : environment.emptyForExport ,
            'Date app max Max': this.criteria.dateAppMaxTo ? this.datePipe.transform(this.criteria.dateAppMaxTo , this.dateFormat) : environment.emptyForExport ,
            'Montant par metre carre Min': this.criteria.montantParMetreCarreMin ? this.criteria.montantParMetreCarreMin : environment.emptyForExport ,
            'Montant par metre carre Max': this.criteria.montantParMetreCarreMax ? this.criteria.montantParMetreCarreMax : environment.emptyForExport ,
        }];
      }
}
