import {Component, OnInit} from '@angular/core';
import {LocaleAdminService} from 'src/app/shared/service/admin/commun/LocaleAdmin.service';
import {LocaleDto} from 'src/app/shared/model/commun/Locale.model';
import {LocaleCriteria} from 'src/app/shared/criteria/commun/LocaleCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {RedevableDto} from 'src/app/shared/model/commun/Redevable.model';
import {RedevableAdminService} from 'src/app/shared/service/admin/commun/RedevableAdmin.service';


@Component({
  selector: 'app-locale-list-admin',
  templateUrl: './locale-list-admin.component.html'
})
export class LocaleListAdminComponent extends AbstractListController<LocaleDto, LocaleCriteria, LocaleAdminService>  implements OnInit {

    override fileName = 'Locale';


    redevables: Array<RedevableDto>;


    constructor( private localeService: LocaleAdminService  , private redevableService: RedevableAdminService) {
        super(localeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Locale').subscribe(() => {
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
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'adresse', header: 'Adresse'},
            {field: 'redevable?.cin', header: 'Redevable'},
        ];
    }


    public async loadRedevable(){
       this.redevableService.findAllOptimized().subscribe(redevables => this.redevables = redevables, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Adresse': e.adresse ,
                'Redevable': e.redevable?.cin ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Adresse': this.criteria.adresse ? this.criteria.adresse : environment.emptyForExport ,
        //'Redevable': this.criteria.redevable?.cin ? this.criteria.redevable?.cin : environment.emptyForExport ,
        }];
      }
}
