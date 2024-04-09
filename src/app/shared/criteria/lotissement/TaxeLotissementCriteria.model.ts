import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {RedevableCriteria} from '../commun/RedevableCriteria.model';

export class TaxeLotissementCriteria  extends BaseCriteria  {

    public id: number;
    public dateDePresentation: Date;
    public dateDePresentationFrom: Date;
    public dateDePresentationTo: Date;
     public surface: number;
     public surfaceMin: number;
     public surfaceMax: number;
     public montantDeBase: number;
     public montantDeBaseMin: number;
     public montantDeBaseMax: number;
    public ref: string;
    public refLike: string;
  public redevable: RedevableCriteria ;
  public redevables: Array<RedevableCriteria> ;

}
