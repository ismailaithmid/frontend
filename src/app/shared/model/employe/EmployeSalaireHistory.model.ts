import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SocieteDto} from '../avancement/Societe.model';
import {EmployeDto} from './Employe.model';

export class EmployeSalaireHistoryDto extends BaseDto{

    public moisdepart: null | number;

    public moisFin: null | number;

    public anneeDepart: null | number;

    public anneeFin: null | number;

    public salaireBrute: null | number;

    public ref: string;

    public societe: SocieteDto ;
    public employe: EmployeDto ;
    

    constructor() {
        super();

        this.moisdepart = null;
        this.moisFin = null;
        this.anneeDepart = null;
        this.anneeFin = null;
        this.salaireBrute = null;
        this.ref = '';
        this.societe = new SocieteDto() ;

        }

}
