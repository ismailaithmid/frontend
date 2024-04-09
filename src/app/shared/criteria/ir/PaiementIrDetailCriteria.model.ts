import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {PaiementIrCriteria} from './PaiementIrCriteria.model';
import {TauxIrCriteria} from './TauxIrCriteria.model';
import {EmployeCriteria} from '../employe/EmployeCriteria.model';

export class PaiementIrDetailCriteria  extends BaseCriteria  {

    public id: number;
     public salaireBrute: number;
     public salaireBruteMin: number;
     public salaireBruteMax: number;
     public cotisationpatronel: number;
     public cotisationpatronelMin: number;
     public cotisationpatronelMax: number;
     public cotoisationsalarial: number;
     public cotoisationsalarialMin: number;
     public cotoisationsalarialMax: number;
     public salaireNet: number;
     public salaireNetMin: number;
     public salaireNetMax: number;

}
