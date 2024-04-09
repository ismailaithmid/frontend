import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SocieteCriteria} from '../avancement/SocieteCriteria.model';
import {EmployeCriteria} from './EmployeCriteria.model';

export class EmployeSalaireHistoryCriteria  extends BaseCriteria  {

    public id: number;
     public moisdepart: number;
     public moisdepartMin: number;
     public moisdepartMax: number;
     public moisFin: number;
     public moisFinMin: number;
     public moisFinMax: number;
     public anneeDepart: number;
     public anneeDepartMin: number;
     public anneeDepartMax: number;
     public anneeFin: number;
     public anneeFinMin: number;
     public anneeFinMax: number;
     public salaireBrute: number;
     public salaireBruteMin: number;
     public salaireBruteMax: number;
    public ref: string;
    public refLike: string;
  public societe: SocieteCriteria ;
  public societes: Array<SocieteCriteria> ;

}
