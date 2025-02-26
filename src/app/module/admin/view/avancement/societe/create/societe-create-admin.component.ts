import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {SocieteAdminService} from 'src/app/shared/service/admin/avancement/SocieteAdmin.service';
import {SocieteDto} from 'src/app/shared/model/avancement/Societe.model';
import {SocieteCriteria} from 'src/app/shared/criteria/avancement/SocieteCriteria.model';
@Component({
  selector: 'app-societe-create-admin',
  templateUrl: './societe-create-admin.component.html'
})
export class SocieteCreateAdminComponent extends AbstractCreateController<SocieteDto, SocieteCriteria, SocieteAdminService>  implements OnInit {



   private _validSocieteIce = true;

    constructor( private societeService: SocieteAdminService ) {
        super(societeService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validSocieteIce = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSocieteIce();
    }

    public validateSocieteIce(){
        if (this.stringUtilService.isEmpty(this.item.ice)) {
        this.errorMessages.push('Ice non valide');
        this.validSocieteIce = false;
        } else {
            this.validSocieteIce = true;
        }
    }






    get validSocieteIce(): boolean {
        return this._validSocieteIce;
    }

    set validSocieteIce(value: boolean) {
         this._validSocieteIce = value;
    }



}
