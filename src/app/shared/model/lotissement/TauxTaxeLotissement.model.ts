import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class TauxTaxeLotissementDto extends BaseDto{

    public ref: string;

   public dateAppMin: Date;

   public dateAppMax: Date;

    public montantParMetreCarre: null | number;

    

    constructor() {
        super();

        this.ref = '';
        this.dateAppMin = null;
        this.dateAppMax = null;
        this.montantParMetreCarre = null;

        }

}
