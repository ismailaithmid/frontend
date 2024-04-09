import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {RedevableDto} from './Redevable.model';

export class LocaleDto extends BaseDto{

    public ref: string;

    public libelle: string;

    public adresse: string;

    public redevable: RedevableDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.libelle = '';
        this.adresse = '';
        this.redevable = new RedevableDto() ;

        }

}
