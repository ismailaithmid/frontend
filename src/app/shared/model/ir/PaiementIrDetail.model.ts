import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PaiementIrDto} from './PaiementIr.model';
import {TauxIrDto} from './TauxIr.model';
import {EmployeDto} from '../employe/Employe.model';

export class PaiementIrDetailDto extends BaseDto{

    public salaireBrute: null | number;

    public cotisationpatronel: null | number;

    public cotoisationsalarial: null | number;

    public salaireNet: null | number;

    public paiementIr: PaiementIrDto ;
    public tauxIr: TauxIrDto ;
    public employe: EmployeDto ;
    

    constructor() {
        super();

        this.salaireBrute = null;
        this.cotisationpatronel = null;
        this.cotoisationsalarial = null;
        this.salaireNet = null;

        }

}
