import {Component, OnInit} from '@angular/core';
import {RedevableAdminService} from 'src/app/shared/service/admin/commun/RedevableAdmin.service';
import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableCriteria} from 'src/app/shared/criteria/commun/RedevableCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-redevable-list-admin',
  templateUrl: './redevable-list-admin.component.html'
})
export class RedevableListAdminComponent extends AbstractListController<RedevableDto, RedevableCriteria, RedevableAdminService>  implements OnInit {

    override fileName = 'Redevable';




    constructor( private redevableService: RedevableAdminService  ) {
        super(redevableService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Redevable').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'cin', header: 'Cin'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Cin': e.cin ,
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
            }
        });

        this.criteriaData = [{
            'Cin': this.criteria.cin ? this.criteria.cin : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
        }];
      }
}
