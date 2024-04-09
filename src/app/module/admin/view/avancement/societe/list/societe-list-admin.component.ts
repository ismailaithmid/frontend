import {Component, OnInit} from '@angular/core';
import {SocieteAdminService} from 'src/app/shared/service/admin/avancement/SocieteAdmin.service';
import {SocieteDto} from 'src/app/shared/model/avancement/Societe.model';
import {SocieteCriteria} from 'src/app/shared/criteria/avancement/SocieteCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-societe-list-admin',
  templateUrl: './societe-list-admin.component.html'
})
export class SocieteListAdminComponent extends AbstractListController<SocieteDto, SocieteCriteria, SocieteAdminService>  implements OnInit {

    override fileName = 'Societe';




    constructor( private societeService: SocieteAdminService  ) {
        super(societeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Societe').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'ice', header: 'Ice'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Ice': e.ice ,
            }
        });

        this.criteriaData = [{
            'Ice': this.criteria.ice ? this.criteria.ice : environment.emptyForExport ,
        }];
      }
}
