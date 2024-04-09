import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class TauxIrCriteria  extends BaseCriteria  {

    public id: number;
     public salaireMin: number;
     public salaireMinMin: number;
     public salaireMinMax: number;
     public salaireMax: number;
     public salaireMaxMin: number;
     public salaireMaxMax: number;
     public pourcentage: number;
     public pourcentageMin: number;
     public pourcentageMax: number;
    public dateMin: Date;
    public dateMinFrom: Date;
    public dateMinTo: Date;
    public dateMax: Date;
    public dateMaxFrom: Date;
    public dateMaxTo: Date;
     public cotisationPatronal: number;
     public cotisationPatronalMin: number;
     public cotisationPatronalMax: number;
     public cotisationSalarial: number;
     public cotisationSalarialMin: number;
     public cotisationSalarialMax: number;

}
