import {Component, OnInit} from '@angular/core';
import {TaxeLotissementAdminService} from 'src/app/shared/service/admin/lotissement/TaxeLotissementAdmin.service';
import {TaxeLotissementDto} from 'src/app/shared/model/lotissement/TaxeLotissement.model';
import {TaxeLotissementCriteria} from 'src/app/shared/criteria/lotissement/TaxeLotissementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableAdminService} from 'src/app/shared/service/admin/commun/RedevableAdmin.service';


@Component({
  selector: 'app-taxe-lotissement-list-admin',
  templateUrl: './taxe-lotissement-list-admin.component.html'
})
export class TaxeLotissementListAdminComponent extends AbstractListController<TaxeLotissementDto, TaxeLotissementCriteria, TaxeLotissementAdminService>  implements OnInit {

    override fileName = 'TaxeLotissement';


    redevables: Array<RedevableDto>;


    constructor( private taxeLotissementService: TaxeLotissementAdminService  , private redevableService: RedevableAdminService) {
        super(taxeLotissementService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TaxeLotissement').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadRedevable();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'dateDePresentation', header: 'Date de presentation'},
            {field: 'surface', header: 'Surface'},
            {field: 'montantDeBase', header: 'Montant de base'},
            {field: 'ref', header: 'Ref'},
            {field: 'redevable?.cin', header: 'Redevable'},
        ];
    }


    public async loadRedevable(){
       this.redevableService.findAllOptimized().subscribe(redevables => this.redevables = redevables, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Date de presentation': this.datePipe.transform(e.dateDePresentation , 'dd/MM/yyyy hh:mm'),
                 'Surface': e.surface ,
                 'Montant de base': e.montantDeBase ,
                 'Ref': e.ref ,
                'Redevable': e.redevable?.cin ,
            }
        });

        this.criteriaData = [{
            'Date de presentation Min': this.criteria.dateDePresentationFrom ? this.datePipe.transform(this.criteria.dateDePresentationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date de presentation Max': this.criteria.dateDePresentationTo ? this.datePipe.transform(this.criteria.dateDePresentationTo , this.dateFormat) : environment.emptyForExport ,
            'Surface Min': this.criteria.surfaceMin ? this.criteria.surfaceMin : environment.emptyForExport ,
            'Surface Max': this.criteria.surfaceMax ? this.criteria.surfaceMax : environment.emptyForExport ,
            'Montant de base Min': this.criteria.montantDeBaseMin ? this.criteria.montantDeBaseMin : environment.emptyForExport ,
            'Montant de base Max': this.criteria.montantDeBaseMax ? this.criteria.montantDeBaseMax : environment.emptyForExport ,
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
        //'Redevable': this.criteria.redevable?.cin ? this.criteria.redevable?.cin : environment.emptyForExport ,
        }];
      }
}
