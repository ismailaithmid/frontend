import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class TauxTaxeLotissementCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public dateAppMin: Date;
    public dateAppMinFrom: Date;
    public dateAppMinTo: Date;
    public dateAppMax: Date;
    public dateAppMaxFrom: Date;
    public dateAppMaxTo: Date;
     public montantParMetreCarre: number;
     public montantParMetreCarreMin: number;
     public montantParMetreCarreMax: number;

}
