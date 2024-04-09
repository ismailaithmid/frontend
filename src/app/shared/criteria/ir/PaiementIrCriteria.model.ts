import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SocieteCriteria} from '../avancement/SocieteCriteria.model';
import {PaiementIrDetailCriteria} from './PaiementIrDetailCriteria.model';

export class PaiementIrCriteria  extends BaseCriteria  {

    public id: number;
    public datePaiementIr: Date;
    public datePaiementIrFrom: Date;
    public datePaiementIrTo: Date;
     public totalCotisationPatronal: number;
     public totalCotisationPatronalMin: number;
     public totalCotisationPatronalMax: number;
     public totalCotisationSalarial: number;
     public totalCotisationSalarialMin: number;
     public totalCotisationSalarialMax: number;
     public month: number;
     public monthMin: number;
     public monthMax: number;
     public year: number;
     public yearMin: number;
     public yearMax: number;
     public totalSalaireBrut: number;
     public totalSalaireBrutMin: number;
     public totalSalaireBrutMax: number;
     public totalSalaireNet: number;
     public totalSalaireNetMin: number;
     public totalSalaireNetMax: number;
  public societe: SocieteCriteria ;
  public societes: Array<SocieteCriteria> ;
      public paiementIrDetails: Array<PaiementIrDetailCriteria>;

}
