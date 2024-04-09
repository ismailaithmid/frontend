import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class RedevableDto extends BaseDto{

    public cin: string;

    public nom: string;

    public prenom: string;

    

    constructor() {
        super();

        this.cin = '';
        this.nom = '';
        this.prenom = '';

        }

}
