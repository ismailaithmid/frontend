import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {RedevableDto} from '../commun/Redevable.model';

export class TaxeLotissementDto extends BaseDto{

   public dateDePresentation: Date;

    public surface: null | number;

    public montantDeBase: null | number;

    public ref: string;

    public redevable: RedevableDto ;
    

    constructor() {
        super();

        this.dateDePresentation = null;
        this.surface = null;
        this.montantDeBase = null;
        this.ref = '';
        this.redevable = new RedevableDto() ;

        }

}
