import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SocieteDto} from '../avancement/Societe.model';
import {PaiementIrDetailDto} from './PaiementIrDetail.model';

export class PaiementIrDto extends BaseDto{

   public datePaiementIr: Date;

    public totalCotisationPatronal: null | number;

    public totalCotisationSalarial: null | number;

    public month: null | number;

    public year: null | number;

    public totalSalaireBrut: null | number;

    public totalSalaireNet: null | number;

    public societe: SocieteDto ;
     public paiementIrDetails: Array<PaiementIrDetailDto>;
    

    constructor() {
        super();

        this.datePaiementIr = null;
        this.totalCotisationPatronal = null;
        this.totalCotisationSalarial = null;
        this.month = null;
        this.year = null;
        this.totalSalaireBrut = null;
        this.totalSalaireNet = null;
        this.societe = new SocieteDto() ;
        this.paiementIrDetails = new Array<PaiementIrDetailDto>();

        }

}
