import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class TauxIrDto extends BaseDto{

    public salaireMin: null | number;

    public salaireMax: null | number;

    public pourcentage: null | number;

   public dateMin: Date;

   public dateMax: Date;

    public cotisationPatronal: null | number;

    public cotisationSalarial: null | number;

    

    constructor() {
        super();

        this.salaireMin = null;
        this.salaireMax = null;
        this.pourcentage = null;
        this.dateMin = null;
        this.dateMax = null;
        this.cotisationPatronal = null;
        this.cotisationSalarial = null;

        }

}
